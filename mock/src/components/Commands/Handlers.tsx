import { Dispatch, SetStateAction, useState } from "react";
import "../../styles/main.css";
import { mockData } from "../Data/MockData";
import { type } from "os";
import { modeifyOutput } from "../Utilities/Utilities";

/**
 * Interface representing a function that handles REPL commands.
 */
export interface REPLFunction {
  (args: Array<string>, statefuls: REPLFuctionStatefulInputProps): JSX.Element;
}

/**
 * Interface representing the stateful inputs required by REPL functions.
 */
export interface REPLFuctionStatefulInputProps {
  brief: Boolean;
  setBrief: Dispatch<SetStateAction<Boolean>>;
  file: String;
  setFileName: Dispatch<SetStateAction<String>>;
  headers: Boolean;
  setHeaders: Dispatch<SetStateAction<Boolean>>;
}

/**
 * Mocks the 'view' REPL command.
 * @param {Array<string>} args - Arguments passed to the 'view' command.
 * @param {REPLFunctionStatefulInputProps} statefuls - Stateful inputs for the REPL function.
 * @returns {JSX.Element} The JSX representation of the command output.
 */
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

/**
 * Mocks the 'load_file' REPL command.
 * @param {Array<string>} args - Arguments passed to the 'load_file' command.
 * @param {REPLFunctionStatefulInputProps} statefuls - Stateful inputs for the REPL function.
 * @returns {JSX.Element} The JSX representation of the command output.
 */
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

/**
 * Mocks the 'search' REPL command.
 * @param {Array<string>} args - Arguments passed to the 'search' command.
 * @param {REPLFunctionStatefulInputProps} statefuls - Stateful inputs for the REPL function.
 * @returns {JSX.Element} The JSX representation of the command output.
 */
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

/**
 * Handles the 'mode' REPL command.
 * @param {Array<string>} args - Arguments passed to the 'mode' command.
 * @param {REPLFunctionStatefulInputProps} statefuls - Stateful inputs for the REPL function.
 * @returns {JSX.Element} The JSX representation of the command output.
 */
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
