import React, { useState } from "react";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" font-semibold text-3xl text-center p-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-75"
        >
          {/* {loading ? "Almost there..." : "Sign Up"} */} Signup
        </button>
      </form>
    </div>
  );
};

export default SignIn;
