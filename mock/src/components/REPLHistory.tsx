import "../styles/main.css";

interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  // CHANGED
  history: JSX.Element[];
}
export function REPLHistory(props: REPLHistoryProps) {
  

  return (
    <div className="repl-history">
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {/* CHANGED */}
      {props.history.map((command, index) => (
        command
      ))}
    </div>
  );
}
