import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SignIn() {
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen mt-8 p-10 flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-2xl rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-neutral-700"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 dark:text-yellow-400 mb-6">
          Sign In to Your Account
        </h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-400 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-green-600 dark:accent-yellow-400"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-green-700 dark:text-yellow-400 hover:underline font-medium">
              Forgot Password?
            </Link>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-black font-semibold transition duration-300"
          >
            Sign In
          </motion.button>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300 dark:bg-neutral-600" />
            <span className="mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-neutral-600" />
          </div>
          <button
            type="button"
            className="w-full border border-gray-300 dark:border-neutral-600 py-2 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-neutral-700 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Continue with Google</span>
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-700 dark:text-yellow-400 font-semibold hover:underline">
            Sign up here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
