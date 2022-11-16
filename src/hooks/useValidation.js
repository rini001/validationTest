import { useState } from "react";
const useValidation = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [isTouched, setIsTouched] = useState(false);
  let errors = {};
  if (!values.username.trim() && isTouched) {
    errors.username = 'Username required';
  }
  if (!values.email && isTouched) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email) &&  isTouched) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password && isTouched) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6 && isTouched) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  return {handleChange,values,inputBlurHandler,errors}
};
export default useValidation;