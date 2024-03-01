import { expect, test } from "@playwright/test";

/**
  The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
    2. Interact with the page
    3. Assert something about the page against your expectations
  Look for this pattern in the tests below!
 */

// If you needed to do something before every test case...
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000/");
});

/**
 * Don't worry about the "async" yet. We'll cover it in more detail
 * for the next sprint. For now, just think about "await" as something
 * you put before parts of your test that might take time to run,
 * like any interaction with the page.
 */

test("on page load, i see a login button", async ({ page }) => {
  await expect(page.getByLabel("Login")).toBeVisible();
});

test("on page load, i dont see the input box until login", async ({ page }) => {
  await expect(page.getByLabel("Sign Out")).not.toBeVisible();
  await expect(page.getByLabel("Command input")).not.toBeVisible();
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  await expect(page.getByLabel("Command input")).toBeVisible();
});
test("after I type into the input box, its text changes", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("Awesome command");
  const mock_input = `Awesome command`;
  await expect(page.getByLabel("Command input")).toHaveValue(mock_input);
});

test("on page load, i see a button", async ({ page }) => {
  await page.getByLabel("Login").click();
  await expect(
    page.getByRole("button", { name: "Submitted 0 times" })
  ).toBeVisible();
});

test("after I click the button, its label increments", async ({ page }) => {
  await page.getByLabel("Login").click();
  await expect(
    page.getByRole("button", { name: "Submitted 0 times" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await expect(
    page.getByRole("button", { name: "Submitted 1 times" })
  ).toBeVisible();
});

test("improper command input returns 'command not found' ", async ({
  page,
}) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").fill("Awesome command");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  const firstChild = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[0]?.textContent;
  });
  expect(firstChild).toEqual("Command does not exist :(");
});

test("test that Mode command changes output", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[0]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[1]?.textContent;
  });
  expect(output1).toEqual("Command: modeOutput: Mode set to Verbose");
  expect(output2).toEqual("Mode set to Brief");
});

test("test Load with improper args", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").fill("load_file");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page.getByLabel("Command input").fill("load_file & small.csv");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[0]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[2]?.textContent;
  });
  expect(output1).toEqual("Not enough arguments");
  expect(output2).toEqual(
    "Command: load_file & small.csvOutput: Not enough arguments"
  );
});

test("test Load empty csv/improper fileName", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").fill("load_file & empty.csv & true");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page
    .getByLabel("Command input")
    .fill("load_file & smallefef.csv & true");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[0]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[1]?.textContent;
  });

  expect(output1).toEqual("File is not long enough to have headers");
  expect(output2).toEqual("File smallefef.csv does not exist");
});

test("test Load correct load/load switch", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page
    .getByLabel("Command input")
    .fill("load_file & mockSmall.csv & true");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page
    .getByLabel("Command input")
    .fill("load_file & income_by_race.csv & true");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[0]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[2]?.textContent;
  });
  expect(output1).toEqual("File mockSmall.csv loaded successfully.");
  expect(output2).toEqual(
    "Command: load_file & income_by_race.csv & trueOutput: File income_by_race.csv loaded successfully."
  );
});

test("test view without load", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[0]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[2]?.textContent;
  });
  expect(output1).toEqual("No file has been loaded");
  expect(output2).toEqual("Command: viewOutput: No file has been loaded");
});

test("test successfull view", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page
    .getByLabel("Command input")
    .fill("load_file & mockSmall.csv & true");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submitted 3 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[1]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[3]?.textContent;
  });
  expect(output1).toEqual(
    "NameAgeCountryJohn30USAEmily25CanadaMichael35UKSophia28France"
  );
  expect(output2).toEqual(
    "Command: viewOutput: NameAgeCountryJohn30USAEmily25CanadaMichael35UKSophia28France"
  );
});

test("test view different files", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page
    .getByLabel("Command input")
    .fill("load_file & mockSmall.csv & true");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page
    .getByLabel("Command input")
    .fill("load_file & mockSmall2.csv & false");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submitted 3 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[1]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[3]?.textContent;
  });
  expect(output1).toEqual(
    "NameAgeCountryJohn30USAEmily25CanadaMichael35UKSophia28France"
  );
  expect(output2).toEqual("Apple1.2510Banana0.7515Orange1.012Grapes2.58");
});

test("test search with improper args/no file loaded", async ({ page }) => {
  await page.getByLabel("Login").click();

  await page.getByLabel("Command input").fill("search");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page.getByLabel("Command input").fill("search & Name & John");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[0]?.textContent;
  });
  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[2]?.textContent;
  });
  expect(output1).toEqual("Not enough arguments");
  expect(output2).toEqual(
    "Command: search & Name & JohnOutput: No file has been loaded"
  );
});

test("test search by index/index out of bounds", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page
    .getByLabel("Command input")
    .fill("load_file & mockSmall2.csv & false");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("search & 2 & 12");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page.getByLabel("Command input").fill("search & 47 & 12");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 3 times" }).click();

  await page.getByLabel("Command input").fill("search & 2 & 12");
  await page.getByRole("button", { name: "Submitted 4 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[1]?.textContent;
  });

  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[2]?.textContent;
  });

  const output3 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[4]?.textContent;
  });

  expect(output1).toEqual("Orange1.012");
  expect(output2).toEqual("Column index out of bounds");
  expect(output3).toEqual("Command: search & 2 & 12Output: Orange1.012");
});

test("test search by column/(column doesn't exist/no headers)", async ({
  page,
}) => {
  await page.getByLabel("Login").click();
  await page
    .getByLabel("Command input")
    .fill("load_file & mockSmall2.csv & false");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  await page.getByLabel("Command input").fill("search & chicken & 12");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  await page
    .getByLabel("Command input")
    .fill("load_file & mockSmall.csv & true");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  await page.getByLabel("Command input").fill("search & Age & 25");
  await page.getByRole("button", { name: "Submitted 3 times" }).click();

  await page.getByLabel("Command input").fill("search & Age & 1000");
  await page.getByRole("button", { name: "Submitted 4 times" }).click();

  await page.getByLabel("Command input").fill("mode");
  await page.getByRole("button", { name: "Submitted 5 times" }).click();

  await page.getByLabel("Command input").fill("search & Nintendo & 44");
  await page.getByRole("button", { name: "Submitted 6 times" }).click();

  const output1 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[1]?.textContent;
  });

  const output2 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[3]?.textContent;
  });

  const output3 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[4]?.textContent;
  });

  const output4 = await page.evaluate(() => {
    const history = document.querySelector(".repl-history");
    return history?.children[6]?.textContent;
  });
  expect(output1).toEqual(
    "File has no headers; Cannot do string column search"
  );
  expect(output2).toEqual("NameAgeCountryEmily25Canada");
  expect(output3).toEqual("No matching entries found");
  expect(output4).toEqual(
    "Command: search & Nintendo & 44Output: Column could not be found"
  );
});

//test("search by column/column doesn't exist", async ({ page }) => {});
