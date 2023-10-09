const Category = () => {
  return (
    <div className="mt-20 w-11/12 mx-auto  p-10">
      <div className="md:w-4/12 w-full mx-auto text-center">
        <p className="text-sm text-[#338bbb]">EXCITING CONFIDENT JEWELRY</p>
        <h1 className="text-4xl font-bold text-[#358ebe]">Choose your own</h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-14 md:p-10">
        <div className="text-center border py-10 hover:-translate-y-3 duration-200 hover:bg-[#e4f4f9] hover:border-none group">
          <img
            src="https://amona-demo4.myshopify.com/cdn/shop/files/icon-01.png?v=1635504191"
            alt=""
            className=" w-auto mx-auto"
          />
          <h2 className=" uppercase  text-3xl text-[#5fb9ea] mt-10">Rings</h2>
          <button className="btn btn-outline btn-info btn-md mt-5 md:opacity-0 md:group-hover:opacity-100 duration-150 ">
            See Collections
          </button>
        </div>
        <div className="text-center border py-10 hover:-translate-y-3 duration-200 hover:bg-[#e4f4f9] hover:border-none group">
          <img
            src="https://amona-demo4.myshopify.com/cdn/shop/files/icon-02.png?v=1635504191"
            alt=""
            className=" w-auto mx-auto"
          />
          <h2 className=" uppercase  text-3xl text-[#5fb9ea] mt-10">
            Earrings
          </h2>
          <button className="btn btn-outline btn-info btn-md mt-5 md:opacity-0 md:group-hover:opacity-100 duration-150 ">
            See Collections
          </button>
        </div>
        <div className="text-center border py-10 hover:-translate-y-3 duration-200 hover:bg-[#e4f4f9] hover:border-none group">
          <img
            src="https://amona-demo4.myshopify.com/cdn/shop/files/icon-03.png?v=1635504190"
            alt=""
            className=" w-auto mx-auto"
          />
          <h2 className=" uppercase  text-3xl text-[#5fb9ea] mt-10">
            necklaces
          </h2>
          <button className="btn btn-outline btn-info btn-md mt-5 md:opacity-0 md:group-hover:opacity-100 duration-150 ">
            See Collections
          </button>
        </div>
        <div className="text-center border py-10 hover:-translate-y-3 duration-200 hover:bg-[#e4f4f9] hover:border-none group">
          <img
            src="https://amona-demo4.myshopify.com/cdn/shop/files/icon-04.png?v=1635504191"
            alt=""
            className=" w-auto mx-auto"
          />
          <h2 className=" uppercase  text-3xl text-[#5fb9ea] mt-10">
            bracelet
          </h2>
          <button className="btn btn-outline btn-info btn-md mt-5 md:opacity-0 md:group-hover:opacity-100 duration-150 ">
            See Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
