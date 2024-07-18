import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { apiLogin } from "../../services/auth";
import { useState } from 'react';
import loginimg from "../../assets/images/loginimg.jpg"
import googlelogo from "../../assets/images/googlelogo.png"
import { toast } from "react-toastify";
import ColorRing from "../../components/loader";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate

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
      toast.error("An error occured!");

    } finally {
      setIsSubmitting(false)
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">

        <div className="w-1/2 h-auto hidden md:block">
          <img src={loginimg} alt="Login image" className="object-cover h-full w-full" />
        </div>


        <div className="w-1/2 p-8">
          <div className="flex flex-col justify-center text-left ">
            <h3 className="font-extrabold text-center text-blue-500 text-2xl">Welcome Back!</h3>
            <p className="font-thin text-center text-blue-500 mt-4">Log into your account</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
              <div className="flex flex-col space-y-4 w-full">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-[#1826ef] mb-0">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="h-10 w-full px-3 py-2 border-blue-500 border-2 rounded-lg focus:outline-none focus:border-blue-700"
                    {
                    ...register("email", { required: "Enter your email !" })
                    }
                  />
                  {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="font-semibold text-[#1826ef] mb-0">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="h-10 w-full px-3 py-2 border-blue-500 border-2 rounded-lg focus:outline-none focus:border-blue-700"
                    {
                    ...register("password", { required: "Enter your password !" })
                    }
                  />
                  {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    type="submit"
                    className="h-10 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-opacity-50">
                    {isSubmitting ? (<ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />) : "Log in"}
                  </button>
                </div>

                <div className="flex items-center mt-4">
                  <hr className="flex-1 border-gray-300" />
                  <span className="mx-2 text-gray-600">or</span>
                  <hr className="flex-1 border-gray-300" />
                </div>


                <button className="flex items-center justify-center h-10 border border-blue-500 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-200 w-1/2 mx-auto">
                  <img className="w-5 h-5 mr-2" src={googlelogo} alt="Google logo" />
                  Log in with Google
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">Not registered? <Link to="/signup" className="text-blue-600 underline">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


      export default LogIn
