import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="m-auto my-20">
      <img src="/logo.png" width="120px" className="m-auto " alt="" />
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-xl font-bold mb-4">Application Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="">Name:</label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label>Contact Number:</label>
          <input
            type="tel"
            {...register("number", { required: "Phone number is required" })}
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
          />
          {errors.number && (
            <p className="text-red-500">{errors.number.message}</p>
          )}

          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <label className="">Retype Password:</label>
          <input
            type="password"
            {...register("repassword", {
              required: "Please re-enter your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            placeholder="Re-enter Password"
            className="w-full p-2 border rounded"
          />
          {errors.repassword && (
            <p className="text-red-500">{errors.repassword.message}</p>
          )}

          {/* Buttons */}
          <div className="flex justify-between">
            <Link to="/" className="hover:underline">
              Already Registered?
            </Link>
            <button
              type="submit"
              className="bg-[#7D0A0A] text-white px-4 py-2 rounded cursor-pointer"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
