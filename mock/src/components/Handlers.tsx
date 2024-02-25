import { useState } from "react";
import "../styles/main.css";

export interface REPLFunction {
  (args: Array<string>): String | String[][];
}

export const commandMap = new Map<string, REPLFunction>([
  ["mode", handleMode],
  ["view", handleView],
  ["load", handleLoad],
  ["search", handleSearch],
]);

export const [modeBrief, boolSwitch] = useState<Boolean>(true);

export function handleMode(args: Array<string>) {
  let output;
  if (modeBrief) {
    output = "Mode set to Brief";
  } else {
    output = "Mode set to Verbose";
  }

  boolSwitch(!modeBrief);

  return Array.from([[output]]);
}

export function handleView(args: Array<String>) {
  return Array.from([[""]]);
}

export function handleLoad(args: Array<String>) {
  return Array.from([[""]]);
}

export function handleSearch(args: Array<String>) {
  return Array.from([[""]]);
}
