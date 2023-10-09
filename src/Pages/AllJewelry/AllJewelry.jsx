import axios from "axios";
import { useState } from "react";

import Loading from "../../common/Loading/Loading";
// import { useEffect } from "react";

const AllJewelry = () => {
  const [allJewelry, setAllJewelry] = useState([]);
  axios.get("http://localhost:5021/all-jewelry").then((res) => {
    console.log(res);
    setAllJewelry(res.data);
  });
  if (allJewelry.length == 0) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">All Jewelry</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 mx-auto">
        {allJewelry.map((item, i) => {
          return (
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.jewelryName}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllJewelry;
