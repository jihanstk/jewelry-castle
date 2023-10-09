import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth/useAuth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth/useAuth";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../common/SocialLogin/SocialLogin";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");
  // const navigate = useNavigate();
  const { registerProfile, updateUserProfile } = useContext(AuthContext);

  // console.log(user);
  // const { registerProfile, updateUserProfile, logOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErr("");
    console.log(data);

    registerProfile(data.email, data.password).then((res) => {
      const user = res.user;
      console.log(user);
      // TODO : Update User Profile Name and photo
      updateUserProfile(user, data.name, data.photo).then(() => {
        console.log("User Profile is updated");
        // const userInfo = {
        //   email: user.email,
        //   name: user.displayName,

        //   role: "user",
        // };

        // axios
        //   .post("http://localhost:5021/users", userInfo)
        //   .then((userUpdate) => {
        //     console.log("from register Add", userUpdate);
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "Your work has been saved",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //     logOut();
        //     navigate("/login");
        //   });
      });
    });

    // updateUserProfile(res, data.name);
  };
  return (
    <div className="hero min-h-screen bg-base-200 md:pt-8 pt-32">
      <div className="hero-content flex-col md:w-1/2 w-full">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register Account</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="input input-bordered bg-slate-200"
              />
              {errors.name && (
                <p className="text-red-700">This field is required</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo"
                {...register("photo", { required: true })}
                className="input input-bordered bg-slate-200"
              />
              {errors.photo && (
                <p className="text-red-700">This field is required</p>
              )}
            </div>

            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="input input-bordered bg-slate-200"
              />
              {errors.email && (
                <p className="text-red-700">This field is required</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">PassWord</span>
              </label>

              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true })}
                className="input input-bordered bg-slate-200 relative"
              />
              <div
                className="text-2xl absolute right-12 mt-12 cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </div>
              {errors.password && (
                <p className="text-red-700">This field is required</p>
              )}
            </div>
            <p>
              Already Have an Account
              <Link className="text-blue-600 font-bold p-2" to="/login">
                Log In
              </Link>
            </p>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Log In" />
            </div>
            <p className="text-red-600">{err}</p>
          </form>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
