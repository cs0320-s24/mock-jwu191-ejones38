/** A String[][] containing a subset of data from income_by_race.csv. */
const mockDataIncome = [
  [
    "ID Race",
    "Race",
    "ID Year",
    "Year",
    "Household Income by Race",
    "Household Income by Race Moe",
    "Geography",
    "ID Geography",
    "Slug Geography",
  ],
  [
    "0",
    "Total",
    "2020",
    "2020",
    "85413",
    "6122",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "0",
    "Total",
    "2020",
    "2020",
    "75857",
    "2022",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "0",
    "Total",
    "2020",
    "2020",
    "84282",
    "2629",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "0",
    "Total",
    "2020",
    "2020",
    "62323",
    "1270",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "0",
    "Total",
    "2020",
    "2020",
    "86970",
    "3651",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "1",
    "White",
    "2020",
    "2020",
    "85359",
    "6432",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "1",
    "White",
    "2020",
    "2020",
    "75408",
    "2311",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "1",
    "White",
    "2020",
    "2020",
    "87407",
    "3706",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "1",
    "White",
    "2020",
    "2020",
    "67639",
    "1255",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "1",
    "White",
    "2020",
    "2020",
    "88147",
    "3942",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "2",
    "Black",
    "2020",
    "2020",
    "72443",
    "54768",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "2",
    "Black",
    "2020",
    "2020",
    "100375",
    "20176",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "2",
    "Black",
    "2020",
    "2020",
    "46622",
    "14559",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "2",
    "Black",
    "2020",
    "2020",
    "46084",
    "3384.0000000000000",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "2",
    "Black",
    "2020",
    "2020",
    "45849",
    "6614",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "3",
    "Native American",
    "2020",
    "2020",
    "36106",
    "16192",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "4",
    "Asian",
    "2020",
    "2020",
    "69612",
    "53700",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "4",
    "Asian",
    "2020",
    "2020",
    "97578",
    "18617",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "4",
    "Asian",
    "2020",
    "2020",
    "110350",
    "12239",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "4",
    "Asian",
    "2020",
    "2020",
    "81438",
    "5762",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "4",
    "Asian",
    "2020",
    "2020",
    "69653",
    "31807.000000000000",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "5",
    "Pacific Islander",
    "2020",
    "2020",
    "43990",
    "4351",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "6",
    "Other",
    "2020",
    "2020",
    "60446",
    "13988",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "6",
    "Other",
    "2020",
    "2020",
    "29375",
    "2225",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "6",
    "Other",
    "2020",
    "2020",
    "40706",
    "4024",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2020",
    "2020",
    "100250",
    "22504",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2020",
    "2020",
    "75938",
    "26788",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2020",
    "2020",
    "83574",
    "5944",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2020",
    "2020",
    "47163",
    "8892",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2020",
    "2020",
    "96898",
    "42213",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2020",
    "2020",
    "86463",
    "7051",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2020",
    "2020",
    "75265",
    "2318",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2020",
    "2020",
    "87713",
    "3638",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2020",
    "2020",
    "71428",
    "1376",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2020",
    "2020",
    "87516",
    "3859.0000000000000",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "9",
    "Hispanic",
    "2020",
    "2020",
    "64167",
    "25729",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "9",
    "Hispanic",
    "2020",
    "2020",
    "76602",
    "14152",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "9",
    "Hispanic",
    "2020",
    "2020",
    "56652",
    "33449",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "9",
    "Hispanic",
    "2020",
    "2020",
    "41592",
    "1749",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "9",
    "Hispanic",
    "2020",
    "2020",
    "104929",
    "30259",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "0",
    "Total",
    "2019",
    "2019",
    "83092",
    "4339",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "0",
    "Total",
    "2019",
    "2019",
    "73521",
    "1703",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "0",
    "Total",
    "2019",
    "2019",
    "79454",
    "2611",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "0",
    "Total",
    "2019",
    "2019",
    "58974",
    "1051",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "0",
    "Total",
    "2019",
    "2019",
    "85531",
    "2042",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "1",
    "White",
    "2019",
    "2019",
    "82750",
    "5075",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "1",
    "White",
    "2019",
    "2019",
    "73415",
    "1906",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "1",
    "White",
    "2019",
    "2019",
    "82158",
    "2740",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "1",
    "White",
    "2019",
    "2019",
    "64195",
    "1128",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "1",
    "White",
    "2019",
    "2019",
    "87019",
    "2150",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "2",
    "Black",
    "2019",
    "2019",
    "79609",
    "17881",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "2",
    "Black",
    "2019",
    "2019",
    "44765",
    "12493",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "2",
    "Black",
    "2019",
    "2019",
    "43387",
    "3459.0000000000000",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "2",
    "Black",
    "2019",
    "2019",
    "83011",
    "16035",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "3",
    "Native American",
    "2019",
    "2019",
    "39375",
    "35211",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "3",
    "Native American",
    "2019",
    "2019",
    "33200",
    "10203",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "4",
    "Asian",
    "2019",
    "2019",
    "118750",
    "78991",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "4",
    "Asian",
    "2019",
    "2019",
    "92268",
    "9257",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "4",
    "Asian",
    "2019",
    "2019",
    "106912",
    "24529",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "4",
    "Asian",
    "2019",
    "2019",
    "75425",
    "4603",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "4",
    "Asian",
    "2019",
    "2019",
    "75735",
    "11221",
    "Washington County, RI",
    "05000US44009",
    "washington-county-ri",
  ],
  [
    "5",
    "Pacific Islander",
    "2019",
    "2019",
    "40815",
    "16560",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "6",
    "Other",
    "2019",
    "2019",
    "70179",
    "23312",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "6",
    "Other",
    "2019",
    "2019",
    "36962",
    "3139",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2019",
    "2019",
    "110078",
    "43635",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2019",
    "2019",
    "58112",
    "11419",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2019",
    "2019",
    "70750",
    "16835",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "7",
    "Two Or More",
    "2019",
    "2019",
    "45030",
    "6614",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2019",
    "2019",
    "83216",
    "4938",
    "Bristol County, RI",
    "05000US44001",
    "bristol-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2019",
    "2019",
    "73316",
    "1864.0000000000000",
    "Kent County, RI",
    "05000US44003",
    "kent-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2019",
    "2019",
    "82282",
    "2614",
    "Newport County, RI",
    "05000US44005",
    "newport-county-ri",
  ],
  [
    "8",
    "White Non-Hispanic",
    "2019",
    "2019",
    "67975",
    "1352",
    "Providence County, RI",
    "05000US44007",
    "providence-county-ri",
  ],
];

/** A String[][] containing data from dol_ri_earnings_disparity.csv. */
const mockDataEarningsDisparity = [
  [
    "State",
    "Data Type",
    "Average Weekly Earnings",
    "Number of Workers",
    "Earnings Disparity",
    "Employed Percent",
  ],
  ["RI", "White", " $1,058.47 ", "395773.6521", " $1.00 ", "75%"],
  ["RI", "Black", " $770.26 ", "30424.80376", " $0.73 ", "6%"],
  [
    "RI",
    "Native American/American Indian",
    " $471.07 ",
    "2315.505646",
    " $0.45 ",
    "0%",
  ],
  [
    "RI",
    "Asian-Pacific Islander",
    " $1,080.09 ",
    "18956.71657",
    " $1.02 ",
    "4%",
  ],
  ["RI", "Hispanic/Latino", " $673.14 ", "74596.18851", " $0.64 ", "14%"],
  ["RI", "Multiracial", " $971.89 ", "8883.049171", " $0.92 ", "2%"],
];

/** A String[][] containing data from postsecondary_education.csv. */
const mockDataEducation = [
  [
    "IPEDS Race",
    "ID Year",
    "Year",
    "ID University",
    "University",
    "Completions",
    "Slug University",
    "share",
    "Sex",
    "ID Sex",
  ],
  [
    "Asian",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "214",
    "brown-university",
    "0.069233258",
    "Men",
    "1",
  ],
  [
    "Black or African American",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "77",
    "brown-university",
    "0.024911032",
    "Men",
    "1",
  ],
  [
    "Native Hawaiian or Other Pacific Islanders",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "3",
    "brown-university",
    "0.00097056",
    "Men",
    "1",
  ],
  [
    "Hispanic or Latino",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "143",
    "brown-university",
    "0.046263345",
    "Men",
    "1",
  ],
  [
    "Two or More Races",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "58",
    "brown-university",
    "0.018764154",
    "Men",
    "1",
  ],
  [
    "American Indian or Alaska Native",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "4",
    "brown-university",
    "0.00129408",
    "Men",
    "1",
  ],
  [
    "Non-resident Alien",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "327",
    "brown-university",
    "0.105791006",
    "Men",
    "1",
  ],
  [
    "White",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "691",
    "brown-university",
    "0.223552248",
    "Men",
    "1",
  ],
  [
    "Asian",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "235",
    "brown-university",
    "0.076027176",
    "Women",
    "2",
  ],
  [
    "Black or African American",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "95",
    "brown-university",
    "0.03073439",
    "Women",
    "2",
  ],
  [
    "Native Hawaiian or Other Pacific Islanders",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "4",
    "brown-university",
    "0.00129408",
    "Women",
    "2",
  ],
  [
    "Hispanic or Latino",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "207",
    "brown-university",
    "0.066968619",
    "Women",
    "2",
  ],
  [
    "Two or More Races",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "85",
    "brown-university",
    "0.027499191",
    "Women",
    "2",
  ],
  [
    "American Indian or Alaska Native",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "7",
    "brown-university",
    "0.002264639",
    "Women",
    "2",
  ],
  [
    "Non-resident Alien",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "281",
    "brown-university",
    "0.090909091",
    "Women",
    "2",
  ],
  [
    "White",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "660",
    "brown-university",
    "0.213523132",
    "Women",
    "2",
  ],
];

/** A String[][] containing a small set of CSV data. */
const mockSmall = [
  ["Name", "Age", "Country"],
  ["John", "30", "USA"],
  ["Emily", "25", "Canada"],
  ["Michael", "35", "UK"],
  ["Sophia", "28", "France"],
];

/** A String[][] containing a small set of CSV data. */
const mockSmall2 = [
  ["Apple", "1.25", "10"],
  ["Banana", "0.75", "15"],
  ["Orange", "1.0", "12"],
  ["Grapes", "2.5", "8"],
];

/** A String[][] containing a set of CSV data with on column. */
const oneColumn = [["Only Column"], ["bingo"], ["bongo"], ["mingo"], ["mongo"]];

/** A String[][] containing a set of empty CSV data. */
const empty: any[] = [];

/** A Map<String, Array<Array<String>>> mapping filename to the file data above. */
export const mockData = new Map<String, Array<Array<String>>>([
  ["income_by_race.csv", mockDataIncome],
  ["dol_ri_earnings_disparity.csv", mockDataEarningsDisparity],
  ["postsecondary_education.csv", mockDataEducation],
  ["mockSmall.csv", mockSmall],
  ["empty.csv", empty],
  ["mockSmall2.csv", mockSmall2],
  ["oneColumn.csv", oneColumn],
]);
