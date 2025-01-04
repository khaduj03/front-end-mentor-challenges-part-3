import React, { useState } from "react";
import { pledges } from "../../lib/data";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPledges from "../Animations/AnimatedPledges";
import AnimatedModal from "../Animations/AnimatedModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedPledge, setSelectedPledge] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  if (!isOpen) return null;

  const handlePledgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPledge(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = (value: string) => {
    if (selectedPledge !== null) {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue < 0) {
        setError("Please enter a valid number.");
        
      } else {
        setError("");
        setValue("")
        console.log("Pledge submitted:", numericValue);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <AnimatePresence>
        <AnimatedModal>
          <h2 className="text-2xl font-bold py-4">Back this project</h2>
          <p className="text-gray-400">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          {pledges &&
            pledges.map((item, index) => (
              <form
                key={index}
                onSubmit={(e) => handleSubmit(e)}
                className={`border  rounded-lg p-7 w-full mt-4 ${
                  selectedPledge === index.toString()
                    ? "border-emeraldLight"
                    : "border-gray-400"
                }`}
              >
                <div className="flex flex-row items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id={`pledge-${index}`}
                      value={index.toString()}
                      name="pledge"
                      checked={selectedPledge === index.toString()}
                      onChange={handlePledgeChange}
                      className="peer cursor-pointer w-5 h-5 appearance-none border border-gray-400 rounded-full checked:bg-emeraldLight checked:border-emeraldLight"
                    />
                    <label
                      htmlFor={`pledge-${index}`}
                      className={`font-semibold text-lg ${
                        selectedPledge === index.toString()
                          ? "text-emeraldLight"
                          : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </label>
                    <span>
                      <p className="text-emeraldLight font-semibold ">
                        {item.pledgeAmount
                          ? `Pledge ${item.pledgeAmount} or more`
                          : ""}
                      </p>
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg">
                    {" "}
                    <span className="text-xl font-bold mr-3 text-black">
                      {item.available ? item.available : ""}
                    </span>
                    {item.available ? `left` : ""}{" "}
                  </p>
                </div>
                <p className="mt-4  text-start pb-10 text-gray-500">
                  {item.description}
                </p>

                {selectedPledge === index.toString() && (
                  <AnimatedPledges>
                    <label
                      htmlFor="pledge"
                      className="flex justify-between items-center w-full text-gray-500"
                    >
                      Enter your pledge
                      <div className="flex flex-col">
                        <input
                        value={value}
                          placeholder="$ 0.00"
                          onChange={(e) => {
                            setValue(e.target.value);
                          }}
                          className={`p-5 h-12 w-60 outline-none border 0  rounded-3xl ${
                            error ? "border-red-400" : "border-gray-400"
                          }`}
                          type="text"
                          id="pledge"
                        />
                        <p className="text-red-300 text-xs">
                          {error ?error :""}
                        </p>
                      </div>
                      <motion.button
                        type="submit"
                        onClick={() => handleClick(value)}
                        whileHover={{ scale: 0.95 }}
                        className="px-8 py-3 text-ms font-semibold text-white bg-emeraldLight hover:bg-emeraldDark rounded-[2rem] flex justify-center items-center transition-colors duration-200  "
                      >
                        Continue
                      </motion.button>
                    </label>
                  </AnimatedPledges>
                )}
              </form>
            ))}

          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </AnimatedModal>
      </AnimatePresence>
    </div>
  );
};

export default Modal;
