import { Dispatch, SetStateAction, useState } from "react";
import "../styles/main.css";
import { ControlledInput } from "./ControlledInput";
import {
  handleMode,
  handleView,
  handleSearch,
  handleLoad,
  REPLFunction,
} from "./Handlers";

interface REPLInputProps {
  history: JSX.Element[];
  setHistory: Dispatch<SetStateAction<JSX.Element[]>>;
}

export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("");
  const [modeBrief, setMode] = useState<Boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [file, setFile] = useState<String>("");
  const [headers, setHeaders] = useState<Boolean>(false);

  const commandMap: Map<String, REPLFunction> = new Map<String, REPLFunction>([
    ["mode", handleMode],
    ["view", handleView],
    ["load_file", handleLoad],
    ["search", handleSearch],
  ]);

  function handleSubmit(commandString: string) {
    setCount(count + 1);

    const commandArgs: Array<string> = commandString.split(/ *& */);
    console.log(commandArgs);
    let commandReturn;
    if (commandArgs.length > 0) {
      const command = commandMap.get(commandArgs[0]);
      if (command != undefined) {
        commandReturn = command(
          commandArgs,
          modeBrief,
          setMode,
          file,
          setFile,
          headers,
          setHeaders
        );
      } else {
        commandReturn = <p>{"Command does not exist :("}</p>;
      }
    } else {
      commandReturn = <p>{""}</p>;
    }

    props.setHistory([...props.history, commandReturn]); //FIX THIS LATER
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
