import { useState } from "react";
import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../Hooks/UseAxiosSecure/useAxiosSecure";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
// import useWebTitle from "../../Hooks/useWebTitle/useWebTitle";
import SocialLogin from "../../common/SocialLogin/SocialLogin";

const Login = () => {
  //   const [axiosSecure] = useAxiosSecure();
  //   useWebTitle("OceanView | Login");
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErr("");

    console.log(data);
    login(data.email, data.password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your are login",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => setErr(err.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200 md:pt-8 pt-32">
      <div className="hero-content flex-col md:w-1/2 w-full">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Log In Your Account</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
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
              New To JewelryCastle?
              <Link className="text-blue-600 font-bold p-2" to="/register">
                Register
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

export default Login;
