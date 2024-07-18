import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth";
import { useState } from 'react';
import loginimg from "../../assets/images/loginimg.jpg"
import googlelogo from "../../assets/images/googlelogo.png"
import { toast } from "react-toastify";
import Loader from "../../components/loader";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password
      });
      console.log("Response", res.data);
      localStorage.setItem("accessToken", res.data.accessToken)
      toast.success(res.data);
      setTimeout(() => { navigate("/dashboard") }, 5000);

    } catch (error) {
      console.log(error);
      toast.error("An error occurred!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-1/2 h-auto hidden md:block">
          <img src={loginimg} alt="Login image" className="object-cover h-full w-full" />
        </div>
        <div className="w-1/2 p-8">
          <div className="flex flex-col justify-center text-left">
            <h3 className="font-extrabold text-center">Welcome Back.</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="email" className="font-semibold text-[#1826ef] mb-1">Email</label>
                <input
                  type="text"
                  id="email"
                  className="h-10 w-full px-2 py-1 border-blue-500 border-2 rounded-lg"
                  {...register("email", { required: "Enter your email!" })}
                />
                {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
              </div>
              <div>
                <label htmlFor="password" className="font-semibold text-[#1826ef] mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="h-10 w-full px-2 py-1 border-blue-500 border-2 rounded-lg"
                  {...register("password", { required: "Enter your password!" })}
                />
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              </div>
              <button
                type="submit"
                className="mt-4 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                {isSubmitting ? <Loader /> : "Login"}
              </button>
              <div className="flex items-center mt-4">
                <hr className="flex-1 border-gray-300" />
                <span className="mx-2 text-gray-600">or</span>
                <hr className="flex-1 border-gray-300" />
              </div>
              <button
                type="button"
                className="flex items-center justify-center h-10 border border-blue-500 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-200"
              >
                <img className="w-5 h-5 mr-2" src={googlelogo} alt="Google logo" />
                Sign in with Google
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-600">Not registered? <Link to="/signup" className="text-blue-600 underline">Sign Up</Link></p>
              <p className="text-gray-600 mt-2">Forgot password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LogIn
