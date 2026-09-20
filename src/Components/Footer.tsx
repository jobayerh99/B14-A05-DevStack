import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <div>
        <div className="container mx-auto mt-20 py-12 flex justify-between">
          <div className="space-y-3">
            <img src={Logo} alt="" />
            <p className="simple-text">
              Curated tools, technologies, and resources for developers <br />{" "}
              building modern software.
            </p>
            <div>
              <ul className="flex gap-5">
                <li>
                  <a href="">GitHub</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold pb-3">PRODUCT</h2>
            <ul className="space-y-2">
              <li className="simple-text">
                <a href="">Home</a>
              </li>
              <li className="simple-text">
                <a href="">Technology</a>
              </li>
              <li className="simple-text">
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold pb-3">COMPANY</h2>
            <ul className={"space-y-2"}>
              <li className="simple-text">
                <a href="">About</a>
              </li>
              <li className="simple-text">
                <a href="">Contact</a>
              </li>
              <li className="simple-text">
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold pb-3">LEGAL</h2>
            <ul className="space-y-2">
              <li className="simple-text">
                <a href="">Privacy Policy</a>
              </li>
              <li className="simple-text">
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="container mx-auto">
            <div className="flex justify-between mb-5">
                <p className="simple-text">© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-5">
                    <li className="simple-text"><a href="">Privecy</a></li>
                    <li className="simple-text"><a href="">Terms</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
