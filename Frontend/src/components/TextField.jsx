import React from "react";

const TextField = ({
  label = "TextField",
  onChange,
  id,
  placeholder = "placeholder",
  value,
  required = false,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
