import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [addedJewelry, setAddedJewelry] = useState([]);
  const added = localStorage.getItem("addToCart");
  useEffect(() => {
    const product = added ? Object.keys(JSON.parse(added)) : [];
    product.forEach((i) => {
      axios.get(`http://localhost:5021/added-jewelry/${i}`).then((res) => {
        console.log(res);
        setAddedJewelry(res.data);
      });
    });
  }, [added]);
  console.log(addedJewelry);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Buy Jewelry</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 mx-auto ">
        {addedJewelry.map((item, i) => {
          return (
            <div key={i} className="card w-96 bg-base-100 shadow-xl border">
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
      <button className="btn btn-info btn-outline mx-auto">Pay</button>
    </div>
  );
};

export default Product;
