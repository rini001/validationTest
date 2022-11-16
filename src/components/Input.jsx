const Input = (props) => {
    return (
      <div>
        <input
        placeholder={props.placeholder}
          type={props.type || "text"}
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          autoComplete="nope" //added randome string as off was not working in chorme
        />
      </div>
    );
  };
  
  export default Input;