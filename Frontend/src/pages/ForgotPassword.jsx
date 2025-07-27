import { useState } from "react";
import TextField from "../components/TextField";
import { handlePostOperation } from "../config/handlePostOperation";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handlePostOperation("/auth/forgot-password", {
      email,
    });

    console.log(response);

    if (response.status === 200) {
      alert(response.data.message || "OTP Sent!");
      localStorage.setItem("email", email);

      setTimeout(() => {
        navigate("/verify-otp");
      }, 1500);
    } else {
      alert(response.response.data || "Error sending otp!");
    }
    console.log(email);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div>Forgot Password</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            <TextField
              key={"email"}
              id={"email"}
              name={"email"}
              label={"Email"}
              placeholder={"example@gmail.com"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
