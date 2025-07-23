import { useEffect, useState } from "react";
import TextField from "../components/TextField.jsx";

const Register = () => {
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("name"))|| "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(()=>{
    setUserName(JSON.parse(localStorage.getItem("name")) || "")
    localStorage.setItem("authTokem","1234567890abcdefg")
    localStorage.setItem("email","pr@gmail.com")
  })

  const handleSaveCookie = async () => {
    Cookies.set("name","pravesh")
    localStorage.setItem("name","sandip")
  };

  const handleClearCookie = () =>{
    localStorage.removeItem("name")
  }

  const clearAll = () =>{
    localStorage.clear();
  }
  const registerField = [
    {
      id: "userName",
      label: "Username",
      placeholder: "Enter your username",
      type: "text",
      value: userName,
      onChange: setUserName,
    },
    {
      id: "email",
      label: "Email",
      placeholder: "example@gmail.com",
      type: "email",
      value: email,
      onChange: setEmail,
    },
    {
      id: "phone",
      label: "Phone",
      placeholder: "Enter your phone number",
      type: "text",
      value: phone,
      onChange: setPhone,
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      value: password,
      onChange: setPassword,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Re-enter your password",
      type: "password",
      value: confirmPassword,
      onChange: setConfirmPassword,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, phone, password, confirmPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
      } else {
        alert(data.message || "Registration failed");
      } 
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us and start your journey today
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              {registerField.map((field) => (
                <TextField
                  key={field.id}
                  label={field.label}
                  id={field.id}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  type={field.type}
                />
              ))}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 font-medium transition duration-200"
              >
                Create Account
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-200">
                  Sign in here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;