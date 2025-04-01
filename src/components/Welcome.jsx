import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="m-10 my-20"
    >
      <span className="font-bold text-baseRed text-4xl flex justify-center">
        About Us
      </span>
      <div className="flex flex-col xxl:flex-row items-center  gap-8 xxl:m-15 my-15">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative xxl:p-8"
        >
          <div className="absolute -top-2 -left-2 border-8 border-gray-400 xxl:w-150 xxl:h-110 hidden xxl:block rounded-2xl"></div>
          <img
            src="/welcome/welcome.jpg"
            alt="Profile"
            className="relative xxl:w-300 object-cover rounded-3xl"
          />
          <div className="absolute z-10 top-3 right-26 items-center gap-2 space-x-1 hidden xxl:flex ">
            <span className="w-5 h-5 bg-baseRed rounded-full"></span>
            <span className="w-10 h-10 border-baseRed border-5 rounded-full"></span>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl font-bold">
              WHO ARE WE <span className="text-baseRed">.</span>
            </h2>
          </div>
          <p className="text-gray-600 mt-3 max-w-300 text-justify">
            Society of Nepalese Architects (SONA) is the professional
            organization of Nepalese Architects, established in 1990 by a group
            of enthusiastic architects who represented government, private
            sector and academia. The main objective of SONA is to protect the
            rights and responsibilities of Nepalese architects and promote
            architectural profession in Nepal.
          </p>
          <p className="text-gray-600 mt-3 max-w-300">
            SONA has established its own office space at the Churchill Complex,
            Sundhara Kathmandu in 2011, supported by full-time staff for
            day-to-day administration works.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
