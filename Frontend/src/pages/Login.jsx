import { useEffect, useState } from "react";
import TextField from "../components/TextField";
import { loginField } from "../config/loginField";
import { handlePostOperation } from "../config/handlePostOperation";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handlePostOperation("/auth/login", formData);

    console.log(response);

    if (response.status === 200) {
      alert(response.data.message || "Login Successful!");
      setFormData(initialValue);
      localStorage.setItem("authToken", response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      alert(response.response.data || "Login Failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div>Login</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start justify-center box-sd"
          >
            {loginField.map(({ id, label, placeholder, type, name }) => (
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

            <Link
              to="/forgot-password"
              className="text-blue-500 text-right w-full underline underline-offset-6"
            >
              Forgot Password?
            </Link>

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
