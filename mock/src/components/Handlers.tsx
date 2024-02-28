import { Dispatch, SetStateAction, useState } from "react";
import "../styles/main.css";
import { mockData } from "./MockData";
import { type } from "os";

export interface REPLFunction {
  (
    args: Array<string>,
    brief: Boolean,
    setBrief: Dispatch<SetStateAction<Boolean>>,
    file: String,
    setFileName: Dispatch<SetStateAction<String>>
  ): JSX.Element;
}

function modeifyOutput(
  brief: Boolean,
  command: String,
  args: Array<String>,
  output: Array<Array<String>>
) {
  let modifiedOutput = [...output];
  if (brief) {
    return createViewTable(output, "");
  }
  let commandText =
    "Command: " + command + " " + args.slice(1, undefined).join(" ");
  return createViewTable(modifiedOutput, commandText);
}
export function createViewTable(
  data: Array<Array<String>>,
  commandText: string
) {
  return (
    <div className="table-container">
      <div>
        <p>{commandText}</p>
      </div>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function mockHandleView(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  file: String,
  setFileName: Dispatch<SetStateAction<String>>
) {
  let output;
  const fileData = mockData.get(file);
  if (file.length == 0) {
    output = Array.from([["No file has been loaded"]]);
  } else if (fileData == undefined) {
    output = Array.from([["File " + file + " does not exist"]]);
  } else {
    output = fileData;
  }
  return modeifyOutput(brief, "view", args, output);
}

function mockHandleLoad(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  file: String,
  setFileName: Dispatch<SetStateAction<String>>
) {
  let output;
  if (args.length < 2) {
    output = Array.from([["Not enough arguments"]]);
  } else {
    const fileName = args[1];
    const fileData = mockData.get(fileName);
    if (fileData == undefined) {
      output = Array.from([["File " + fileName + " does not exist"]]);
    } else {
      output = Array.from([["File " + file + " loaded successfully."]]);
      setFileName(fileName);
    }
  }
  return modeifyOutput(brief, "load_file", args, output);
}

function mockHandleSearch(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  file: String,
  setFileName: Dispatch<SetStateAction<String>>
) {
  let output;
  const fileData = mockData.get(file);
  if (args.length < 3) {
    output = Array.from([["Not enough arguments"]]);
  } else if (file.length == 0) {
    output = Array.from([["No file has been loaded"]]);
  } else if (fileData == undefined) {
    output = Array.from([["File " + file + " does not exist"]]);
  } else {
    const column = args[1];
    const value = args[2];
    const columnIdx = parseInt(column);
    if (isNaN(columnIdx)) {
      output = Array.from([[" "]]);
    }
    output = Array.from([[" "]]);
  }
  return modeifyOutput(brief, "search", args, output);
}

export function handleView(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>
) {
  return mockHandleView(args, brief, setBrief, fileName, setFileName);
}

export function handleLoad(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>
) {
  return mockHandleLoad(args, brief, setBrief, fileName, setFileName);
}

export function handleSearch(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>
) {
  return mockHandleSearch(args, brief, setBrief, fileName, setFileName);
}

export function handleMode(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>
) {
  let output;
  setBrief(!brief);
  if (!brief) {
    output = "Mode set to Brief";
  } else {
    output = "Mode set to Verbose";
  }
  return modeifyOutput(!brief, "mode", args, Array.from([[output]]));
}
