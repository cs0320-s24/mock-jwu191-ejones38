import { Dispatch, SetStateAction, useState } from "react";
import "../styles/main.css";
import { ControlledInput } from "./ControlledInput";
import { handleView, handleSearch, handleLoad } from "./Handlers";

interface REPLInputProps {
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
}

interface REPLFunction {
  (args: Array<string>): String | String[][];
}

export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("");
  const [modeBrief, setMode] = useState<Boolean>(true);

  const [count, setCount] = useState<number>(0);

  function handleMode(args: Array<string>) {
    let output;
    if (modeBrief) {
      output = "Mode set to Brief";
    } else {
      output = "Mode set to Verbose";
    }

    setMode(!modeBrief);

    return Array.from([[output]]);
  }

  const commandMap = new Map<string, REPLFunction>([
    ["mode", handleMode],
    ["view", handleView],
    ["load", handleLoad],
    ["search", handleSearch],
  ]);

  function handleSubmit(commandString: string) {
    setCount(count + 1);

    const commandArgs: string[] = commandString.split(" ");
    let commandReturn;
    if (commandArgs.length > 0) {
      const command = commandMap.get(commandArgs[0]);
      if (command != undefined) {
        commandReturn = command(commandArgs);
      } else {
        commandReturn = "Command does not exist :(";
      }
    } else {
      commandReturn = "";
    }

    props.setHistory([...props.history, commandReturn.toString()]); //FIX THIS LATER
    setCommandString("");
  }

  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */
  return (
    <div className="repl-input">
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
      <button onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
