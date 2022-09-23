const Input = (props) => {
    let errMessage = "";
    if (props.hasError) {
      errMessage = <p style={{color:"red"}}>{props.errMessage}</p>;
    }
  
    return (
      <div>
        <input
        placeholder={props.placeholder}
          type={props.type || "text"}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          autoComplete="nope" //added randome string as off was not working in chorme
        />
        {errMessage}
      </div>
    );
  };
  
  export default Input;