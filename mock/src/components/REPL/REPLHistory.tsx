import "../../styles/main.css";

/**
 * Props interface for the REPLHistory component.
 */
interface REPLHistoryProps {
  /** An array of JSX elements representing the history of REPL commands and outputs. */
  history: JSX.Element[];
}

/**
 * Component for displaying the history of REPL commands and outputs.
 * @param {REPLHistoryProps} props - The object containing the history array.
 * @returns {JSX.Element} The JSX representation of the REPLHistory component.
 */
export function REPLHistory(props: REPLHistoryProps): JSX.Element {
  return (
    <div className="repl-history">
      {/* Render each output element in the history */}
      {props.history.map((command, index) => command)}
    </div>
  );
}
