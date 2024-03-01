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
} from "../Utilities/Handlers";

interface REPLInputProps {
  history: JSX.Element[];
  setHistory: Dispatch<SetStateAction<JSX.Element[]>>;
}

export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("");
  const [brief, setBrief] = useState<Boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [file, setFileName] = useState<String>("");
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

    props.setHistory([...props.history, commandReturn]); //FIX THIS LATER
    setCommandString("");
  }

  return (
    <div className="repl-input">
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      <button onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
