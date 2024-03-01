import "../../styles/main.css";
import { Dispatch, SetStateAction } from "react";

/**
 * Props interface for the ControlledInput component.
 */
interface ControlledInputProps {
  /** The current value of the input. */
  value: string;
  /** A function to update the value of the input. */
  setValue: Dispatch<SetStateAction<string>>;
  /** A string describing the purpose of the input field for accessibility. */
  ariaLabel: string;
}

/**
 * A controlled input component.
 * This component allows users to input text with controlled behavior.
 * @param {ControlledInputProps} props - The props object containing value, setValue, and ariaLabel.
 * @returns {JSX.Element} The JSX representation of the ControlledInput component.
 */
export function ControlledInput({
  value,
  setValue,
  ariaLabel,
}: ControlledInputProps): JSX.Element {
  return (
    <input
      type="text"
      className="repl-command-box"
      value={value}
      placeholder="Enter command here!"
      onChange={(ev) => setValue(ev.target.value)}
      aria-label={ariaLabel}
    />
  );
}
