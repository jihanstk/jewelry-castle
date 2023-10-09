import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../Hooks/UseAxiosSecure/useAxiosSecure";

// import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";
const AddJewelry = () => {
  const { user } = useAuth();
  //   const [axiosSecure] = useAxiosSecure();
  const [buttonDis, setButtonDis] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    setButtonDis(true);

    const jewelryData = {
      jewelryName: data.jewelryName,
      category: data.category,
      price: parseInt(data.price),
      email: data.email,
      userName: data.userName,
      photo: data.image,
      description: data.description,
    };
    axios
      .post("http://localhost:5021/jewelry", jewelryData)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        setButtonDis(false);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200 md:pt-8 ">
      <div className="hero-content flex-col md:w-1/2 w-full">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Add Your Menus</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
            <div className="md:flex gap-4">
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">jewelry Name</span>
                </label>
                <input
                  type="text"
                  placeholder="jewelryName"
                  {...register("jewelryName", { required: true })}
                  className="input input-bordered bg-slate-200"
                />
                {errors.foodName && (
                  <p className="text-red-700">This field is required</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text"> Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Category"
                  {...register("category", { required: true })}
                  className="input input-bordered bg-slate-200"
                />
                {errors.category && (
                  <p className="text-red-700">This field is required</p>
                )}
              </div>
            </div>

            <div className="md:flex gap-4">
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered bg-slate-200"
                />
                {errors.price && (
                  <p className="text-red-700">This field is required</p>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered bg-slate-200"
                  readOnly
                  defaultValue={user.email}
                />
                {errors.email && (
                  <p className="text-red-700">This field is required</p>
                )}
              </div>
            </div>

            <div className="md:flex gap-4">
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">Who Add</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  {...register("userName", { required: true })}
                  className="input input-bordered bg-slate-200"
                  defaultValue={user.displayName}
                />
                {errors.userName && (
                  <p className="text-red-700">This field is required</p>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="jewelry Photo"
                  {...register("image", { required: true })}
                  className="input input-bordered bg-slate-200"
                />
                {errors.image && (
                  <p className="text-red-700">This field is required</p>
                )}
              </div>
            </div>

            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Description"
                {...register("description", { required: true })}
                //   defaultValue={user.displayName}
                className="textarea textarea-bordered bg-slate-200 h-24"
                id=""
                cols="30"
                rows="10"
              ></textarea>

              {errors.userName && (
                <p className="text-red-700">This field is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                disabled={buttonDis}
                type="submit"
                className="btn btn-primary"
                value="Add Jewelry"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJewelry;
