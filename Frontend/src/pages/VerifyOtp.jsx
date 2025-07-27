import { useEffect, useState } from "react";
import TextField from "../components/TextField";
import { handlePostOperation } from "../config/handlePostOperation";
import { useNavigate } from "react-router-dom";
import { handleGetOperation } from "../config/handleGetOperation";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handlePostOperation("/auth/verify-otp", {
      otp,
    });

    console.log(response);

    if (response.status === 200) {
      alert(response.data.message || "OTP verified!");
      localStorage.setItem("isOtpVerified", true);

      setTimeout(() => {
        navigate("/reset-password");
      }, 1500);
    } else {
      alert(response.response.data.error || "Error verifing otp!");
    }

    console.table(otp);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/forgot-password");
    }

    const checkAuth = async () => {
      const response = await handleGetOperation("/auth/verify/2");
      // setLoading(true);

      console.log(response);

      if (response.status === 200) {
        toast.success(response.response.data.message || "Success");
        // setLoading(false);
      } else {
        toast.error(response.response.data.error || "Fail!");
        navigate(-1);
        // setLoading(false)
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div>Verify OTP</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            <TextField
              key={"otp"}
              id={"otp"}
              name={"otp"}
              label={"Your OTP"}
              placeholder={"123456"}
              type={"text"}
              value={otp}
              maxLength={6}
              autoFocusOn="otp"
              onChange={(e) => setOtp(e.target.value)}
            />

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
