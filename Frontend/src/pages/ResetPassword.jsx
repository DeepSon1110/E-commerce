import { useEffect, useState } from "react";
import TextField from "../components/TextField";
import { resetField } from "../config/loginField";
import { handlePostOperation } from "../config/handlePostOperation";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const initialValue = {
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    const isOtpVerified = localStorage.getItem("isOtpVerified");
    if (!email || !isOtpVerified) {
      // alert("No email found. Please request a new OTP.");
      navigate("/verify-otp");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const response = await handlePostOperation("/auth/reset-password", {
      password: formData.password,
    });

    console.log(response);

    if (response.status === 200) {
      alert(response.data.message || "Password reset successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      alert(response.response.data || "Error reseting password");
    }
  };
  
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div>Reset Password</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            {resetField.map(({ id, label, placeholder, type, name }) => (
              <TextField
                key={name}
                id={id}
                name={name}
                autoFocusOn="password"
                label={label}
                placeholder={placeholder}
                type={type}
                value={formData[name]}
                onChange={handleChange}
              />
            ))}

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
