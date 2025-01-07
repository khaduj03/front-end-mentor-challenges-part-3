import { useContext } from "react";
import { Counter } from "../hooks/useCount";
import { AnimatePresence, motion } from "framer-motion";


export default function FundingTracker() {
  const context = useContext(Counter);
  if (!context) {
    return null;
  }
  //amount for total and backers
  const { total, backers } = context;

  //max total and perecentage number for handling the range div
  const maxTotal = 120000;
  const widthPercentage = (total / maxTotal) * 100;

  return (
    <section className=" lg:w-[43rem] w-full  md:space-y-10 relative bottom-20 flex flex-col  bg-white md:px-16  p-10  rounded-lg">
      <div className="md:flex-row flex flex-col">
        <div className="border-gray-300 md:border-r md:border-b-0 border-b md:px-10 md:py-0 py-5">
          <h2 className="text-4xl font-bold">${total.toLocaleString()}</h2>
          <p className="text-gray-400">of $100,000 backed</p>
        </div>
        <div className="border-gray-300 md:border-r md:border-b-0 border-b md:px-10 md:py-0 py-5">
          <h2 className="text-4xl font-bold">{backers.toLocaleString()}</h2>
          <p className="text-gray-400">total backers</p>
        </div>
        <div className=" md:px-10 md:py-0 py-5">
          <h2 className="text-4xl font-bold">56</h2>
          <p className="text-gray-400 ">days left</p>
        </div>
      </div>
      <div>
        <div
          style={{ width: "100%" }}
          className={`bg-gray-300 relative h-4 rounded-lg`}
        >
          {/* range section for shoung perecentage  */}
          <AnimatePresence>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(widthPercentage, 100)}%` }}
              transition={{ delay: 0.67, duration: 1.5, ease: "linear" }}
              className={`absolute inset-0 bg-emeraldLight   rounded-lg`}
            ></motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
