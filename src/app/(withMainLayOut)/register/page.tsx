import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center  bg-gray-50 pb-10  md:px-0 px-3 py-10">
        <form className="bg-white p-6  shadow-xl w-full max-w-xl pb-12 pt-10 rounded-md  ">
          <h1 className="text-center text-4xl my-2 font-bold rancho-regular">
            Please Register
          </h1>

        <div className="md:flex justify-between">
        <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
             Your Full Name
            </label>
            <input
             placeholder="Your Email"
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
             Your Name
            </label>
            <input
             placeholder="Your Email"
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
        </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
         <div className="md:flex justify-between">
         <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="your password"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="your password"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
         </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
               placeholder="Your Email"
                type="checkbox"
                name="terms"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">
                I agree to the Terms and Conditions
              </span>
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
          <p className="my-5 text-center ">
            Already have an account yet?{" "}
            <Link href={"/login"}>
              <span className="font-bold text-red-500">Login</span>
            </Link>
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
            {/* Google Button */}
            <button className="btn border border-red-500  bg-white text-red-500  hover:bg-transparent hover:shadow-md hover:ring-2 hover:ring-red-500 items-center space-x-2">
              <FcGoogle className="text-xl" />
              <span>Sign in with Google</span>
            </button>
            {/* Facebook Button */}
            <button className="btn  btn-wid  border-red-500  bg-white text-red-500  hover:bg-transparent hover:shadow-md hover:ring-2 hover:ring-red-500 items-center space-x-2">
              <FaFacebook className="text-xl text-[#1182D4]" />
              <span>Sign in with Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
