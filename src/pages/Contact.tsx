import assets from "../assets/assets/assets";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      {/* Heading */}
      <h1 className="text-center text-2xl font-semibold mb-12">
        CONTACT US
      </h1>

      {/* Content */}
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="rounded-lg w-full max-w-md"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          {/* Office */}
          <div>
            <h2 className="font-bold   text-gray-600 text-lg mb-2">OUR OFFICE</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>

            <p className="text-gray-600 text-sm mt-3">
              Tel: (415) 555-0132 <br />
              Email: greatstackdev@gmail.com
            </p>
          </div>

          {/* Careers */}
          <div>
            <h2 className="font-bold text-gray-600  text-lg mb-2">
              CAREERS AT PRESCRIPTO
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Learn more about our teams and job openings.
            </p>

            <button
              className="
              border border-gray-800
              px-5 py-2 text-sm
              hover:bg-black hover:text-white
              transition
            "
            >
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
