import React, { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigete = useNavigate();
  const {signIn} = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const from = location.state.from.pathname || "/" ;

  const successMsgHandler =()=> {
    Swal.fire({
      icon: 'success',
      title: 'Yeh!!..',
      text: "You successfully logged in",
    })
  }
  const errorMsgHandler =(error)=> {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error}`,
    })
  }

  const emailChange = (e) => {
    setEmail(e);
  };
  const passwordChange = (e) => {
    setPassword(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email2 = email.target.value;
    const password2 = password.target.value;

    signIn(email2, password2)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user){
          successMsgHandler()
          navigete(from , {replace: true});
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorMsgHandler(error)
      });

    e.target.reset();
  };

  const handleGoogleSubmit = () => {
    // Google()
    // .then((result) => {
    //   const user = result.user;
    //   navigate(from, { replace: true });
    // }).catch((error) => {
    //   const errorMessage = error.message;
    //   setError(errorMessage, credential)
    // });
  };

  const handleValidateCapcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Helmet>
      <title>Bistro Boss || Log In </title>
      </Helmet>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center rounded-md my-3 bg-white">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started again!</h1>

            <p className="mt-4 text-gray-500">You came back! We welcome you</p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  onChange={emailChange}
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  name="email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  onChange={passwordChange}
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  name="password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="text-left">
              <label htmlFor="capcha" className="sr-only">
                Capcha
              </label>

              <div className="relative">
                <div className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">
                  <LoadCanvasTemplate />
                </div>

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="capcha" className="sr-only">
                Capcha
              </label>

              <div className="relative">
                <input
                  onBlur={handleValidateCapcha}
                  type="capcha"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter capcha"
                  name="capcha"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* {error &&  <p className='col-span-6 text-red-600 font-bold font-sm py-5'>
              {error} </p>
            } */}
            <div className="flex gap-x-2">
              <p className="text-sm text-gray-500">Login with</p>
              <button onClick={handleGoogleSubmit}>
                <FaGoogle />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <a className="underline mx-2" href="/signup">
                  Sign up
                </a>
              </p>

              <button
                disabled={disabled}
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://i.ibb.co/sJwM7GQ/1.png"
            className="absolute inset-0 h-full w-9/12 object-cover "
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
