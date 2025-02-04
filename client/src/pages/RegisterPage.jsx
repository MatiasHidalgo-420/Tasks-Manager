import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import {Link} from "react-router-dom"

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

 

  return (
    <div className="full-registerpage">

    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      {registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <div className="bg-zinc-800 bg-opacity-60 max-w-md w-full p-10 rounded-md transition transform duration-300 hover:scale-105">
        

        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
            />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
            />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
            Sign up
          </button>
        </form>
        <p className="flex gap-x-2 justify-between text-yellow-300 underline font-semibold mt-3">
          Already have an account? <Link to="/login" className="bg-indigo-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">Login</Link>
        </p>
      </div>
    </div>
          </div>
  );
}

export default RegisterPage;
