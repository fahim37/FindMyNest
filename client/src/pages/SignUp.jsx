import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold p-7">Sign Up</h1>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Username"
          id="username"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Email"
          id="email"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95">
          Sign Up
        </button>
      </form>
      <div className="mt-3">
        <span>Have an account? </span>
        <Link to="/sign-in">
          <span className="text-blue-700 mx-2 font-semibold"> Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
