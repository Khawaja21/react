import React,{useState} from "react";

import SignUpForm1 from "./SignUpForm1";
import Header from "./Header";


function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSignIn = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };
  return (
    <>
     {/* <SignUpForm1></SignUpForm1> */}
     <div>
      {!isLoggedIn ? (
        <SignUpForm1 onSignIn={handleSignIn} />
      ) : (
        <Header username={username} />
      )}
    </div>
 
    </>
  );
}
export default App;