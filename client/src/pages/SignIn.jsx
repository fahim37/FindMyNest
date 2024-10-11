import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth.jsx";

const SignIn = () => {
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(`/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data) {
        dispatch(signInSuccess(data));
        navigate("/"); // Navigate to the home page on successful sign-in
      } else {
        // Handle incorrect credentials, stay on the sign-in page
        dispatch(signInFailure(data.message || "Invalid credentials"));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
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
          type="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-75"
        >
          {loading ? "Almost there..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="mt-3">
        <span>Dont have an account?</span>
        <Link to="/sign-up">
          <span className="text-blue-700 mx-2 font-semibold"> Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default SignIn;
