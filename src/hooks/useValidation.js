import { useState } from "react";
const useValidation = (initialValue) => {
  const [inputName, setInputName] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const inputChangeHandler = (e) => {
    setInputName(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const isEmailValid =
  inputName.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputName);
  const hasEmailError = !isEmailValid && isTouched;
  const isNameValid = inputName.trim() !== "";
  const hasNameError = !isNameValid && isTouched;
  const isPasswordValid = inputName.length>8;
  const hasPasswordError = !isPasswordValid && isTouched;

  return [inputName, inputChangeHandler, inputBlurHandler, hasEmailError,hasNameError,hasPasswordError ];
};
export default useValidation;