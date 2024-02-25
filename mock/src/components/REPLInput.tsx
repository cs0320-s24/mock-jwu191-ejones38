import { Dispatch, SetStateAction, useState } from "react";
import "../styles/main.css";
import { ControlledInput } from "./ControlledInput";
import { REPLFunction } from "./Handlers";

interface REPLInputProps {
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  // CHANGED
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
function handleView(args: Array<String>) {
  return Array.from([[""]]);
}

export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("mode");

  const [count, setCount] = useState<number>(0);

  const commandMap = {
    mode: handleMode,
    view: handleView,
    search: handleSearch,
    load: handleLoad,
  };

  const [modeBrief, boolSwitch] = useState<Boolean>(true);

  function handleMode(args: Array<string>) {
    let output;
    if (modeBrief) {
      output = "Mode set to Brief";
    } else {
      output = "Mode set to Verbose";
    }

    boolSwitch(!modeBrief);

    return Array.from([[output]]);
  }

  function handleLoad(args: Array<String>) {
    return Array.from([[""]]);
  }

  function handleSearch(args: Array<String>) {
    return Array.from([[""]]);
  }

  function handleSubmit(commandString: string) {
    setCount(count + 1);

    const commandArgs: string[] = commandString.split(" ");
    if (commandArgs.at(0) != undefined) {
      const command = commandMap["mode"];
      let commandReturn;
      if (command != undefined) {
        commandReturn = command(commandArgs);
      } else {
        commandReturn = "Command does not exist :(";
      }
    }

    props.setHistory([...props.history, commandString.toString()]); //FIX THIS LATER
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
