import { useState } from "react";
import "../styles/main.css";

export interface REPLFunction {
  (args: Array<string>): String | String[][];
}

export function handleView(args: Array<String>) {
  return Array.from([["View"]]);
}

export function handleLoad(args: Array<String>) {
  return Array.from([[""]]);
}

export function handleSearch(args: Array<String>) {
  return Array.from([[""]]);
}