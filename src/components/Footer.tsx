import assets from "../assets/assets/assets";

const Footer = () => {
  return (
    <div className="mt-10 mb-5">
      <div
        className="flex flex-col gap-8 border-b border-gray-300 p-5
        md:flex-row md:justify-between"
      >
        {/* Logo & Description */}
        <div className="md:w-1/3">
          <img src={assets.logo} alt="logo" className="w-40" />
          <p className="mt-3 text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h1 className="text-xl font-bold mb-2">COMPANY</h1>
          <p className="text-gray-500 mt-2 cursor-pointer hover:text-black">
            Home
          </p>
          <p className="text-gray-500 mt-2 cursor-pointer hover:text-black">
            About us
          </p>
          <p className="text-gray-500 mt-2 cursor-pointer hover:text-black">
            Delivery
          </p>
          <p className="text-gray-500 mt-2 cursor-pointer hover:text-black">
            Privacy Policy
          </p>
        </div>

        {/* Contact */}
        <div>
          <h1 className="text-xl font-bold mb-2">GET IN TOUCH</h1>
          <p className="text-gray-500 mt-2">+0-000-000-000</p>
          <p className="text-gray-500 mt-2 break-all">
            hafizhaseeb4480@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-500">
        Copyright 2024 ©. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
