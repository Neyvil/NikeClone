import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex 
    justify-between 
    items-center 
    max-lg:flex-col 
    gsp-10 w-full 
    max-container"
    >
      <div className=" flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Indulge in an unparalleled experience of top-notch quality and style
          with our sought-after selection of footwear.Step into a world where
          comfort, design, and value converge seamlessly, elevating every stride
          you take. 
        </p>
        <p className="mt-6 max-w-lg info-text">
        Explore our curated collection, meticulously crafted to
          offer you the finest in footwear excellence.
        </p>
          <div className=" mt-11">
        <Button label="View Detail" />
          </div>
      </div>
      <div className=" flex-1 flex justify-center items-center ">
        <img 
        src={shoe8}
        alt="Shoe collection"
        width={570}
        height={522}
        className=" object-contain bg-cover bg-card w-400 h-400"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
