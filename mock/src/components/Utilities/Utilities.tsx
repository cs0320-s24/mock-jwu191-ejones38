import "../../styles/main.css";

/**
 * Formats the output based on the specified parameters.
 * @param {boolean} brief - Indicates whether the output should be brief.
 * @param {boolean} tableify - Indicates whether the output should be formatted as a table.
 * @param {string} command - The command that produced the output.
 * @param {Array<string>} args - The arguments passed to the command.
 * @param {Array<Array<string>>} output - The output data to be formatted.
 * @returns {JSX.Element} The JSX representation of the formatted output.
 */
export function modeifyOutput(
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

/**
 * Utility function to generate a view table for displaying data.
 * @param {Array<Array<String>>} data - The data to display in the table.
 * @param {JSX.Element} commandElt - JSX element representing the command.
 * @param {JSX.Element} outputElt - JSX element representing the output.
 * @returns {JSX.Element} The JSX representation of the view table.
 */
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
