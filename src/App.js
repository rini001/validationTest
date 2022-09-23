import React from "react";
import Input from "./components/Input";
import useValidation from "./hooks/useValidation";



export default function App() {
  const [
    firstName,
    firstNameChangeHandler,
    firstNameBlurHandler,
    ,
    hasFirstNameError
  ] = useValidation("");
  const [
    email,
    emailChangeHandler,
    emailBlurHandler,
    hasEmailError
  ] = useValidation("");
  const [
    password,
    passwordChangeHandler,
    passwordBlurHandler,
    ,
    ,
    hasPasswordError
  ] = useValidation("");
  return (
    <div className="App">
      <Input
        id="firstname"
        type="text"
        value={firstName}
        onChange={firstNameChangeHandler}
        onBlur={firstNameBlurHandler}
        errMessage={"Please input your first name."}
        hasError={hasFirstNameError}
        placeholder="First Name"
      />
      <Input
        id="email"
        type="email"
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        errMessage={"Please input valid email."}
        hasError={hasEmailError}
        placeholder="Email"
      />
      <Input
        id="password"
        type="password"
        value={password}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        errMessage={"Please input valid Password."}
        hasError={hasPasswordError}
        placeholder="Password"
      />
    </div>
  );
}

