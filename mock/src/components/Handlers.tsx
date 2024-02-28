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
  ): String | String[][];
}

function modeifyOutput(
  brief: Boolean,
  command: String,
  args: Array<String>,
  output: Array<Array<String>>
) {
  if (brief) {
    return output;
  }
  let commandText = "Command: " + command + " ";
  for (let i = 1; i < args.length; i++) {
    commandText += args[i] + " ";
  }
  output.unshift([commandText.trim()]);
  console.log(output);
  return output;
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
  let output = Array.from([[""]]);
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
