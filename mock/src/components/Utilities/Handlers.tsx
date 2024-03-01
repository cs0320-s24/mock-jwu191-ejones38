import { Dispatch, SetStateAction, useState } from "react";
import "../../styles/main.css";
import { mockData } from "../Data/MockData";
import { type } from "os";

export interface REPLFunction {
  (args: Array<string>, statefuls: REPLFuctionStatefulInputProps): JSX.Element;
}

export interface REPLFuctionStatefulInputProps {
  brief: Boolean;
  setBrief: Dispatch<SetStateAction<Boolean>>;
  file: String;
  setFileName: Dispatch<SetStateAction<String>>;
  headers: Boolean;
  setHeaders: Dispatch<SetStateAction<Boolean>>;
}

function modeifyOutput(
  brief: Boolean,
  tableify: Boolean,
  command: String,
  args: Array<String>,
  output: Array<Array<String>>
) {
  let copiedOutput = [...output];
  if (brief) {
    if (tableify) {
      return createViewTable(output, <div />, <div />);
    } else {
      return (
        <div>
          <h2 className="small-font">{output.toString()}</h2>
        </div>
      );
    }
  }

  let commandText = "Command: " + command;
  if (args.length > 1) {
    commandText += " & " + args.slice(1, undefined).join(" & ");
  }

  if (tableify) {
    const commandElt = <h2 className="small-font">{commandText}</h2>;
    const outputElt = <h2 className="small-font">{"Output: "}</h2>;
    return createViewTable(copiedOutput, commandElt, outputElt);
  } else {
    return (
      <div>
        <h2 className="small-font">{commandText}</h2>
        <h2 className="small-font">{"Output: " + output.toString()}</h2>
      </div>
    );
  }
}
export function createViewTable(
  data: Array<Array<String>>,
  commandElt: JSX.Element,
  outputElt: JSX.Element
) {
  return (
    <div>
      <div>{commandElt}</div>
      <div>{outputElt}</div>
      <table className="table-container">
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
  statefuls: REPLFuctionStatefulInputProps
) {
  let output;
  let tableify = false;
  const fileData = mockData.get(statefuls.file);
  if (statefuls.file.length == 0) {
    output = Array.from([["No file has been loaded"]]);
  } else if (fileData == undefined) {
    output = Array.from([["File " + statefuls.file + " does not exist"]]);
  } else {
    output = fileData;
    tableify = true;
  }
  return modeifyOutput(statefuls.brief, tableify, "view", args, output);
}

function mockHandleLoad(
  args: Array<string>,
  statefuls: REPLFuctionStatefulInputProps
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
      output = Array.from([["File " + fileName + " loaded successfully."]]);
      if (headersStr.toLowerCase() == "true") {
        if (fileData.length == 0) {
          output = Array.from([["File is not long enough to have headers"]]);
        } else {
          statefuls.setFileName(fileName);
          statefuls.setHeaders(true);
        }
      } else {
        statefuls.setFileName(fileName);
        statefuls.setHeaders(false);
      }
    }
  }
  return modeifyOutput(statefuls.brief, false, "load_file", args, output);
}

function mockHandleSearch(
  args: Array<string>,
  statefuls: REPLFuctionStatefulInputProps
) {
  let output: String[][] = Array.from([[""]]);
  let tableify = false;
  const fileData = mockData.get(statefuls.file);

  function filterHelper(colIdx: number, value: string, data: String[][]) {
    tableify = true;
    output = data.filter(
      (row, i) => (!statefuls.headers || i > 0) && row[colIdx] == value
    );
    if (output.length == 0) {
      tableify = false;
      output = Array.from([["No matching entries found"]]);
    } else if (statefuls.headers) {
      output.unshift(data[0]);
    }
  }

  if (args.length < 3) {
    output = Array.from([["Not enough arguments"]]);
  } else if (statefuls.file.length == 0) {
    output = Array.from([["No file has been loaded"]]);
  } else if (fileData == undefined) {
    output = Array.from([["File " + statefuls.file + " does not exist"]]);
  } else {
    const column = args[1];
    const value = args[2];
    const columnIdx = parseInt(column);
    if (!isNaN(columnIdx)) {
      if (fileData.length == 0 || fileData[0].length > columnIdx) {
        filterHelper(columnIdx, value, fileData);
      } else {
        output = Array.from([["Column index out of bounds"]]);
      }
    } else {
      if (statefuls.headers) {
        const headerRow = fileData[0]; // We ensure that the first row exists in mockHandleLoad
        const headerCol = headerRow.findIndex((e) => e == column);
        if (headerCol == -1) {
          output = Array.from([["Column could not be found"]]);
        } else {
          filterHelper(headerCol, value, fileData);
        }
      } else {
        output = Array.from([
          ["File has no headers; Cannot do string column search"],
        ]);
      }
    }
  }
  return modeifyOutput(statefuls.brief, tableify, "search", args, output);
}

export function handleMode(
  args: Array<string>,
  statefuls: REPLFuctionStatefulInputProps
) {
  let output;
  statefuls.setBrief(!statefuls.brief);
  if (!statefuls.brief) {
    output = Array.from([["Mode set to Brief"]]);
  } else {
    output = Array.from([["Mode set to Verbose"]]);
  }
  return modeifyOutput(!statefuls.brief, false, "mode", args, output);
}

export function handleView(
  args: Array<string>,
  statefuls: REPLFuctionStatefulInputProps
) {
  return mockHandleView(args, statefuls);
}

export function handleLoad(
  args: Array<string>,
  statefuls: REPLFuctionStatefulInputProps
) {
  return mockHandleLoad(args, statefuls);
}

export function handleSearch(
  args: Array<string>,
  statefuls: REPLFuctionStatefulInputProps
) {
  return mockHandleSearch(args, statefuls);
}
