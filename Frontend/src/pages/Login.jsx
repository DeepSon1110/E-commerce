import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // <-- Add this

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle login here
  };

  console.log("email", email);
  console.log("password", password);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>Login</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            {/* Email */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;