import { arrowRight } from "../assets/icons";
import { bigShoe1} from "../assets/images";
import Button from "../components/Button";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:flex-row flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="tex-xl
        font-montserrat
        text-coral-red">
          Our Summer Collection
          </p>
        <h1 className="mt-10
        font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82]
        font-bold">
          <span classname="xl:bg-white xl:whitespace-nowrap
          realtive z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mb-14
        leading-8 mt-6 sm:max-w-sm">
        Step into style and comfort with our latest collection of shoes! Designed to elevate your every step, our shoes blend fashion-forward trends with unbeatable comfort features.  
        </p>
        <Button label="Shop now"
        iconURL={arrowRight}/>
        <div className="flex 
        justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=>(
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold text-[#48cae4]">{stat.value}</p>
              <p className="leading-7 font-montserrat text-[#8d99ae]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoe1}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
        </div>

    </section>
  );
};

export default Hero;
