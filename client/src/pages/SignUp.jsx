import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold p-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-75"
        >
          {loading ? "Almost there..." : "Sign Up"}
        </button>
      </form>
      <div className="mt-3">
        <span>Have an account? </span>
        <Link to="/sign-in">
          <span className="text-blue-700 mx-2 font-semibold"> Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default SignUp;
