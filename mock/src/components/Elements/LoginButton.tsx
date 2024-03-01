import { Dispatch, SetStateAction } from "react";

/**
 * Props interface for the LoginButton component.
 */
interface LoginProps {
  /** A boolean indicating whether the user is logged in or not. */
  isLoggedIn: boolean;
  /** A function to update the authentication status. */
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

/**
 * A button component used for user authentication.
 * This component toggles the authentication status when clicked.
 * @param {LoginProps} props - The props object containing isLoggedIn and setIsLoggedIn.
 * @returns {JSX.Element} The JSX representation of the LoginButton component.
 */
export function LoginButton(props: LoginProps): JSX.Element {
  /**
   * Toggles the authentication status.
   * @returns {boolean} The new authentication status after toggling.
   */
  const authenticate = (): boolean => {
    const newValue = !props.isLoggedIn;
    props.setIsLoggedIn(newValue);
    return newValue;
  };

  // Render different button text based on authentication status
  return (
    <button
      aria-label={props.isLoggedIn ? "Sign Out" : "Login"}
      onClick={authenticate}
    >
      {props.isLoggedIn ? "Sign out" : "Login"}
    </button>
  );
}
