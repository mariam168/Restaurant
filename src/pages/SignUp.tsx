import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SignUp() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen lg:mt-8 sm:mt-16 p-10 flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-2xl rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-neutral-700"
      >
        <h2 className="text-3xl font-extrabold text-center text-yellow-600 dark:text-yellow-400 mb-6">
          Create Your Account
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mr-2 accent-yellow-500"
            />
            <label htmlFor="agree" className="text-gray-600 dark:text-gray-400">
              I agree to the <span className="text-yellow-600 dark:text-yellow-400 font-medium cursor-pointer">Terms & Conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={!agree}
            className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
              agree
                ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                : "bg-yellow-300 text-white cursor-not-allowed"
            }`}
          >
            Sign Up
          </motion.button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300 dark:bg-neutral-600" />
            <span className="mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-neutral-600" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full border border-gray-300 dark:border-neutral-600 py-2 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-neutral-700 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Sign up with Google
            </span>
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-yellow-700 dark:text-yellow-400 font-semibold hover:underline">
            Sign in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
