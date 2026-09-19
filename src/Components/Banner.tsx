
import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-[2fr_1fr] gap-5 my-24">
      {/* Text Section */}
      <div>
        <h1 className="banner-heading-txt pb-5">Build Your Ideal <br /> <span className="banner-gredient-txt">Development Stack</span></h1>
        <p className="simple-text pb-10">
          Explore frontend, backend, database, and tooling options, <br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
      <div className="flex gap-5">
          <button className="btn btn-active btn-secondary rounded-xl text-white w-48 banner-gredient-btn">
            Explore Technologies
          </button>

          <button className="btn btn-neutral btn-outline rounded-full border-[#E5E7EB] w-48">
            Learn More
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div>
        <img src={BannerImage} alt="Banner Logo" className="w-[450px] h-auto"/>
      </div>
    </div>
  );
};

export default Banner;
