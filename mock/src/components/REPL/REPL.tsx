import { useState } from "react";
import "../../styles/main.css";
import { REPLHistory } from "./REPLHistory";
import { REPLInput } from "./REPLInput";

/**
 * This component provides a user interface for interacting with a REPL environment.
 * @returns {JSX.Element} The JSX representation of the REPL component.
 */
export default function REPL(): JSX.Element {
  // State to manage the history of REPL commands and outputs
  const [history, setHistory] = useState<JSX.Element[]>([]);

  return (
    <div className="repl">
      {/* Display REPL history */}
      <REPLHistory history={history} />
      <hr></hr>
      {/* Input component for new REPL commands */}
      <REPLInput history={history} setHistory={setHistory} />
    </div>
  );
}
