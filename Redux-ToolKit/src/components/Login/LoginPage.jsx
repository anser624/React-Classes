import { useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../../Firebase/firebaseconfig";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../Features/Auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";

const VIPLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const auth = getAuth();
    try {
      if (isLogin) {
        // Login logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User logged in:", userCredential.user);
        // window.location.href = "/";
        // Redirect to dashboard or home page
        dispatch(
          loginSuccess({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
          })
        );
        navigate("/");
        return;
      } else {
        // Signup logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User created:", userCredential.user);
        alert("Account created successfully!");
        // Redirect to profile setup or home page
      }
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthError = (error) => {
    if (isLogin) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Account not found. Would you like to create one?");
          setIsLogin(false);
          break;
        case "auth/wrong-password":
          alert("Incorrect password. Please try again.");
          break;
        default:
          alert("Please Register Your Account First Thank You");
      }
    } else {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already registered. Please log in instead.");
          setIsLogin(true);
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters.");
          break;
        default:
          alert("Signup error: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
          {/* VIP Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
            <motion.h2
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white"
            >
              {isLogin ? "Member Login" : "Create Account"}
            </motion.h2>
          </motion.div>

          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      className="h-5 w-5 text-purple-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </motion.div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white placeholder-purple-200 rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      className="h-5 w-5 text-purple-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white placeholder-purple-200 rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                    placeholder="••••••••"
                    minLength="6"
                    required
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition-all shadow-lg"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Create Account"
                )}
              </motion.button>
            </form>

            {/* Toggle between Login/Signup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-center"
            >
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-200 hover:text-white text-sm font-medium focus:outline-none"
              >
                {isLogin
                  ? "Need a account? Register here"
                  : "Already have an account? Login"}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VIPLoginPage;
