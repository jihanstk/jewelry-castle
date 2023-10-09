import Swal from "sweetalert2";

const AddToCartBTN = ({ JID, JName }) => {
  const handleAddToCart = (id, JName) => {
    let cart = {};
    const existingCart = JSON.parse(localStorage.getItem("addToCart"));
    if (existingCart) {
      const quantity = existingCart[id];
      if (quantity) {
        const newQuantity = quantity + 1;
        existingCart[id] = newQuantity;
      } else {
        existingCart[id] = 1;
      }
      localStorage.setItem("addToCart", JSON.stringify(existingCart));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Added To Cart ${JName} and Quantity ${existingCart[id]}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      cart[id] = 1;
      localStorage.setItem("addToCart", JSON.stringify(cart));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Added To Cart ${JName}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div className="card-actions">
      <button
        onClick={() => handleAddToCart(JID, JName)}
        className="btn btn-primary"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCartBTN;
