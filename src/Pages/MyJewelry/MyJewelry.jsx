import axios from "axios";
import { useEffect, useState } from "react";

import Loading from "../../common/Loading/Loading";
import useAuth from "../../Hooks/useAuth/useAuth";
// import { useEffect } from "react";

const MyJewelry = () => {
  const [myJewelry, setMyJewelry] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios.get(`http://localhost:5021/jewelry/${user.email}`).then((res) => {
      console.log(res);
      setMyJewelry(res.data);
    });
  }, [user]);

  if (myJewelry.length == 0) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">My Jewelry</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 mx-auto">
        {myJewelry.map((item, i) => {
          return (
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.jewelryName}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyJewelry;
