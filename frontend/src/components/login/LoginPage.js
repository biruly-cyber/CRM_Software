import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <>
      <div className="flex">
        <div className="bg-slate-900 h-screen flex items-center w-[35rem]">
          <div className="mx-auto">
            <h1 className=" text-white text-9xl font-bold">LOGO</h1>
            <h3 className="text-white"> BLUROCK</h3>
          </div>
        </div>
        <div class="flex items-center w-full">
          <div class="h-auto w-96 bg-slate-100 mx-auto rounded-md shadow-md p-6">
            <h1 class="py-5 text-center text-xl font-bold">PERSON IMG</h1>
            <div class="mb-4">
              <label class="block text-left mb-1">Email</label>
              <input
                class="w-full px-3 py-2 border rounded-md"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label class="block text-left mb-1">Password</label>
              <input
                class="w-full px-3 py-2 border rounded-md"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              class="w-full bg-slate-900 text-white py-2 rounded-lg"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
