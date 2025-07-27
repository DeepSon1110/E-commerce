import { useState } from "react";
import TextField from "../components/TextField";
import registerField from "../config/registerField";
import { handlePostOperation } from "../config/handlePostOperation";
import { registerInitialValue } from "../config/constants";

const Register = () => {
  const [formData, setFormData] = useState(registerInitialValue);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(formData);

    const response = await handlePostOperation("/auth/register", formData);

    console.log(response);

    if (response.status === 201) {
      alert("User registered Sucessfully!");
      setFormData(registerInitialValue);
    } else {
      alert("User registration failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center flex-col">
      <div>Register</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4">
        {registerField.map(({ id, label, placeholder, type, name }) => (
          <TextField
            key={name}
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
            value={formData[name]}
            onChange={handleChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
