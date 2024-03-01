import { useState } from "react";
import "../styles/App.css";
import { LoginButton } from "./Elements/LoginButton";
import REPL from "./REPL/REPL";

/**
 * The top-level component of the application.
 * This component manages the authentication state and renders
 * the appropriate UI based on the user's authentication status.
 * @returns {JSX.Element} The JSX representation of the App component.
 */
function App() {
  // State to manage the authentication status
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      <p className="App-header">
        <h1>Mock</h1>
        {/* Login button component */}
        <LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </p>

      {/* Render REPL component if user is logged in */}
      {isLoggedIn && <REPL />}
    </div>
  );
}

export default App;
