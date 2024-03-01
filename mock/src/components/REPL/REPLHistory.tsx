import "../../styles/main.css";

interface REPLHistoryProps {
  history: JSX.Element[];
}
export function REPLHistory(props: REPLHistoryProps) {
  

  return (
    <div className="repl-history">
      {props.history.map((command, index) => (
        command
      ))}
    </div>
  );
}
