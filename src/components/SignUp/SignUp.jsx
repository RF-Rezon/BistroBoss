import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const updateProfileHandler =()=>{
    Swal.fire({
      icon: 'success',
      title: 'Yeh!!..',
      text: "Created Profile successfully",
    })
    navigate("/")
  }

  const updateProfileHandlerFailed =(error)=>{
    Swal.fire({
      icon: 'error',
      title: 'Ops!!..',
      text: `Profile didn't update successfully. ${error}`,
    })
  }

  const ProfileHandlerFailed =(error)=>{
    Swal.fire({
      icon: 'error',
      title: 'Ops!!..',
      text: `Didn't registered successfully. ${error}`,
    })
  }

  const onSubmit = (data) => {
    const { email, password, photoUrl, fullName} = data;
    createUser(email, password)
      .then((userCredential) => {
        updateUser(fullName, photoUrl)
        .then(() => {
          updateProfileHandler()
        }).catch((error) => {
          updateProfileHandlerFailed(error)
        });
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        ProfileHandlerFailed(errorMessage)
      });
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const emailChange =(e)=> {
  //     setEmail(e)
  // }
  // const passwordChange =(e)=> {
  //     setPassword(e)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const email2 = email.target.value;
  //   const password2 = password.target.value;

  //   e.target.reset();

  //   console.log(email2, password2)
  // };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Sign Up </title>
      </Helmet>
      <section className="bg-white rounded-md p-5 my-3">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="https://i.ibb.co/TtfrN2G/4.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Welcome to Bistro Boss</h1>

              <p className="mt-4 leading-relaxed text-gray-500">Register from here</p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    {...register("fullName", { required: true, minLength: 5 })}
                    id="FirstName"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.fullName && <span className="text-red-500 font-medium">This field is required</span>}
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.email && <span className="text-red-500 font-medium">This field is required</span>}
                </div>

                {/* <div className="col-span-6">
                  <label htmlFor="Number" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    {...register("phoneNumber", { required: true })}
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.phoneNumber && <span className="text-red-500 font-medium">This field is required</span>}
                </div> */}

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    {...register("password", { required: true, minLength: 6 })}
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.password && <span className="text-red-500 font-medium">This field is required</span>}
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Photo Url
                  </label>

                  <input
                    {...register("photoUrl", { required: true })}
                    type="url"
                    id="photoUrl"
                    name="photoUrl"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.photoUrl && <span className="text-red-500 font-medium">This field is required</span>}
                </div> 


                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline mx-2">
                      terms and conditions
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline mx-2">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="submit" value="Sign Up"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          
                  />

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/login" className="text-gray-700 underline mx-2">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
