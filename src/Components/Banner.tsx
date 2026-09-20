import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-24 grid 
    grid-cols-[2fr_1fr] items-center gap-10 px-5">
      {/* Text Section */}
      <div className="max-w-2xl">
        <h1 className="banner-heading-txt pb-5 leading-tight">
          Build Your Ideal <br />
          <span className="banner-gredient-txt">Development Stack</span>
        </h1>

        <p className="simple-text max-w-xl pb-10 leading-7">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn btn-active btn-secondary h-12 w-48 rounded-xl border-0 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg banner-gredient-btn">
            Explore Technologies
          </button>

          <button className="btn btn-neutral h-12 w-48 rounded-xl border-[#E5E7EB] bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <div className="rounded-3xl bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6 shadow-sm">
          <img
            src={BannerImage}
            alt="Development stack illustration"
            className="w-[400px] max-w-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
