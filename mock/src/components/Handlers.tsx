import { useState } from "react";
import "../styles/main.css";

export interface REPLFunction {
  (args: Array<string>): String | String[][];
}
