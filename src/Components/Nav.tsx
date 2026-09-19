
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="grid grid-cols-3 gap-5 container mx-auto pt-6 items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div>
          <ul className="flex gap-4 items-center justify-center">
            <li className="font-semibold text-[#DB2777]">
              <a href="">Home</a>
            </li>
            <li className="simple-text">
              <a href="">Technologies</a>
            </li>
            <li className="simple-text">
              <a href="">Projects</a>
            </li>
            <li className="simple-text">
              <a href="">About</a>
            </li>
            <li className="simple-text">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-2 justify-end">
          <button className="btn btn-neutral btn-outline rounded-full border-white">
            Sign In
          </button>

          <button className="btn btn-active btn-secondary rounded-full text-white">
            Sign Up
          </button>
        </div>
      </div>
        <div className="divider"></div>
    </div>
  );
};

export default Nav;
