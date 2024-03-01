import { Dispatch, SetStateAction, useState } from "react";
import "../../styles/main.css";
import { ControlledInput } from "../Elements/ControlledInput";
import {
  handleMode,
  handleView,
  handleSearch,
  handleLoad,
  REPLFunction,
  REPLFuctionStatefulInputProps,
} from "../Commands/Handlers";

/**
 * Props interface for the REPLInput component.
 */
interface REPLInputProps {
  /** An array of JSX elements representing the history of REPL commands and outputs. */
  history: JSX.Element[];
  /** A function to update the history of REPL commands and outputs. */
  setHistory: Dispatch<SetStateAction<JSX.Element[]>>;
}

/**
 * Component for handling user input and executing REPL commands.
 * @param {REPLInputProps} props - The props object containing history and setHistory.
 * @returns {JSX.Element} The JSX representation of the REPLInput component.
 */
export function REPLInput(props: REPLInputProps) {
  // State variables for user input and command options
  const [commandString, setCommandString] = useState<string>("");
  const [brief, setBrief] = useState<Boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [file, setFileName] = useState<String>("");
  const [headers, setHeaders] = useState<Boolean>(false);

  // Map of command strings to their corresponding handler functions
  const commandMap: Map<String, REPLFunction> = new Map<String, REPLFunction>([
    ["mode", handleMode],
    ["view", handleView],
    ["load_file", handleLoad],
    ["search", handleSearch],
  ]);

  /**
   * Handles the submission of a command.
   * @param {string} commandString - The string representing the command to be executed.
   */
  function handleSubmit(commandString: string) {
    setCount(count + 1);

    // Split commandString into arguments
    const commandArgs: Array<string> = commandString.split(/ *& */);

    // Execute command if it exists, otherwise display an error message
    console.log(commandArgs);
    let commandReturn;
    if (commandArgs.length > 0) {
      const command = commandMap.get(commandArgs[0]);
      if (command != undefined) {
        const statefuls: REPLFuctionStatefulInputProps = {
          brief: brief,
          setBrief: setBrief,
          file: file,
          setFileName: setFileName,
          headers: headers,
          setHeaders: setHeaders,
        };
        commandReturn = command(commandArgs, statefuls);
      } else {
        commandReturn = <p>{"Command does not exist :("}</p>;
      }
    } else {
      commandReturn = <p>{""}</p>;
    }

    props.setHistory([...props.history, commandReturn]);

    // Clear command input
    setCommandString("");
  }

  return (
    <div className="repl-input">
      <fieldset>
        <legend>Enter a command:</legend>
        {/* Input field for entering commands */}
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      {/* Button to submit the command */}
      <button onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
