import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";
import axios from "axios";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  // const location = useLocation()
  // const naviget = useNavigate()
  // const from = location.state.
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      axios
        .post("http://localhost:5021/users", {
          email: result.user.email,
          name: result.user.displayName,
          photo: result.user.photoURL,
          role: "user",
        })
        .then((res) => {
          console.log(res);
        });
      console.log(result);
    });
  };
  return (
    <div className="pl-10 pb-10">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle btn-outline text-3xl text-green-500"
      >
        <FcGoogle></FcGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
