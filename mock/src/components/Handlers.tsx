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
    setFileName: Dispatch<SetStateAction<String>>,
    headers: Boolean,
    setHeaders: Dispatch<SetStateAction<Boolean>>
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
  setFileName: Dispatch<SetStateAction<String>>,
  headers: Boolean,
  setHeaders: Dispatch<SetStateAction<Boolean>>
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
  setFileName: Dispatch<SetStateAction<String>>,
  headers: Boolean,
  setHeaders: Dispatch<SetStateAction<Boolean>>
) {
  let output;
  if (args.length < 3) {
    output = Array.from([["Not enough arguments"]]);
  } else {
    const fileName = args[1];
    const headersStr = args[2];
    const fileData = mockData.get(fileName);
    if (fileData == undefined) {
      output = Array.from([["File " + fileName + " does not exist"]]);
    } else {
      output = Array.from([["File " + file + " loaded successfully."]]);
      if (headersStr.toLowerCase() == "true") {
        if (fileData.length == 0) {
          output = Array.from([["File is not long enough to have headers"]]);
        } else {
          setFileName(fileName);
          setHeaders(true);
        }
      } else {
        setFileName(fileName);
        setHeaders(false);
      }
    }
  }
  return modeifyOutput(brief, "load_file", args, output);
}

function mockHandleSearch(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  file: String,
  setFileName: Dispatch<SetStateAction<String>>,
  headers: Boolean,
  setHeaders: Dispatch<SetStateAction<Boolean>>
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
    if (!isNaN(columnIdx)) {
      if (fileData.length == 0 || fileData[0].length > columnIdx) {
        output = fileData.filter(
          (row, i) => (!headers || i > 0) && row[columnIdx] == value
        );
      } else {
        output = Array.from([["Column index out of bounds"]]);
      }
    } else {
      if (headers) {
        const headerRow = fileData[0]; // We ensure that the first row exists in mockHandleLoad
        const headerCol = headerRow.findIndex((e) => e == column);
        if (headerCol == -1) {
          output = Array.from([["Column could not be found"]]);
        } else {
          output = fileData.filter(
            (row, i) => i > 0 && row[headerCol] == value
          );
        }
      } else {
        output = Array.from([
          ["File has no headers; Cannot do string column search"],
        ]);
      }
    }
  }
  return modeifyOutput(brief, "search", args, output);
}

export function handleView(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>,
  headers: Boolean,
  setHeaders: Dispatch<SetStateAction<Boolean>>
) {
  return mockHandleView(
    args,
    brief,
    setBrief,
    fileName,
    setFileName,
    headers,
    setHeaders
  );
}

export function handleLoad(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>,
  headers: Boolean,
  setHeaders: Dispatch<SetStateAction<Boolean>>
) {
  return mockHandleLoad(
    args,
    brief,
    setBrief,
    fileName,
    setFileName,
    headers,
    setHeaders
  );
}

export function handleSearch(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>,
  headers: Boolean,
  setHeaders: Dispatch<SetStateAction<Boolean>>
) {
  return mockHandleSearch(
    args,
    brief,
    setBrief,
    fileName,
    setFileName,
    headers,
    setHeaders
  );
}

export function handleMode(
  args: Array<string>,
  brief: Boolean,
  setBrief: Dispatch<SetStateAction<Boolean>>,
  fileName: String,
  setFileName: Dispatch<SetStateAction<String>>,
  headers: Boolean,
  setHeaders: Dispatch<SetStateAction<Boolean>>
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
