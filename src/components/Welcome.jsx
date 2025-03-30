import imffg from "/whitelogo.png";

export default function Welcome() {
  return (
    <div className="m-10 my-20">
      <span className="font-bold text-baseRed text-4xl flex justify-center">
        About Us
      </span>
      <div className="max-w-2xlshadow-lg flex flex-col xxl:flex-row items-center justify-center gap-8 xxl:m-15 my-15">
        <div className="relative xxl:p-8">
          <div className="absolute -top-2 -left-2 border-8 border-gray-400 xxl:w-150 xxl:h-110 hidden xxl:block rounded-2xl"></div>
          <img
            src="/welcome.jpg"
            alt="Profile"
            className="relative xxl:w-300  object-cover border-4 border-white rounded-3xl"
          />
          <div className="absolute z-10 top-4 right-18 items-center gap-2 space-x-1 hidden xxl:flex ">
            <span className="w-5 h-5 bg-baseRed rounded-full"></span>
            <span className="w-10 h-10 border-baseRed border-5 rounded-full"></span>
          </div>
        </div>

        {/* Text Section */}
        <div className="">
          <div>
            <h2 className="text-2xl font-bold">
              WHO ARE WE <span className="text-baseRed">.</span>
            </h2>
          </div>
          <p className="text-gray-600 mt-3  max-w-300 text-justify">
            Society of Nepalese Architects (SONA) is the professional
            organization of Nepalese Architects, established in 1990 by a group
            of enthusiastic architects who represented government, private
            sector and academia. The main objective of SONA is to protect the
            rights and responsibilities of Nepalese architects and promote
            architectural profession in Nepal.
            <p className="text-gray-600 mt-3  max-w-300">
              {" "}
              SONA has established its own office space at the Churchill
              Complex, Sundhara Kathmandu in 2011, supported by full-time staff
              for day-to-day administration works.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
