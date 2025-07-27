const TextField = ({
  label = "TextField",
  onChange,
  name,
  id,
  placeholder = "placeholder",
  value,
  required = false,
  type = "text",
  autoFocusOn = "email",
  maxLength = 40,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-gray-700">
        {label} {required && "*"}
      </label>
      <input
        className="auth-input"
        type={type}
        inputMode={type === "number" ? "numeric" : "text"}
        name={name}
        id={id}
        pattern={type === "number" && "d*"}
        // autoComplete="off"
        placeholder={placeholder}
        value={value}
        autoFocus={id === autoFocusOn}
        required={required}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextField;
