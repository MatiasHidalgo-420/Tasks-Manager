import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(()=>{
    if(isAuthenticated) navigate("/tasks");
  },[isAuthenticated])
  

  return (
    <div className="full-loginpage">
    <div className="flex h-screen items-center justify-center ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md bg-opacity-60 transition transform duration-300 hover:scale-105">
      {signinErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
          {error}
        </div>
      ))}
    

      <form onSubmit={onSubmit} className="flex flex-col items-center">
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
          Login
        </button>
      </form>

        <p className="flex gap-x-2 justify-between text-yellow-300 underline font-semibold mt-3">
        Don`t have an account? <Link to="/register" className="bg-indigo-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">Sign up</Link>
        </p>

      </div>
    </div>

</div>
    
  );
}

export default LoginPage;