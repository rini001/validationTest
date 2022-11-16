import React from "react";
import Input from "./components/Input";
import useValidation from "./hooks/useValidation";

export default function App() {
  const { handleChange, values, inputBlurHandler, errors } = useValidation();
  console.log(values);
  return (
    <div className="App">
      <Input
        type="text"
        name="username"
        placeholder="Enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={inputBlurHandler}
      />
      {errors.username && <p>{errors.username}</p>}
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={inputBlurHandler}
      />

      {errors.email && <p>{errors.email}</p>}
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={inputBlurHandler}
      />
      {errors.password && <p>{errors.password}</p>}
    </div>
  );
}
