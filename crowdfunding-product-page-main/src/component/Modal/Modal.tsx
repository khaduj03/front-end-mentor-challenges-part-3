import React, { useContext, useState } from "react";
import { pledges } from "../../lib/data";
import { AnimatePresence } from "framer-motion";
import AnimatedPledges from "../Animations/AnimatedPledges";
import AnimatedModal from "../Animations/AnimatedModal";
import Button from "../Button";
import { Counter } from "../useCount";
import ThankModal from "./ThankModal";
import { useHandleModal } from "../useHandleModal";

const Modal = () => {
  const [selectedPledge, setSelectedPledge] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isRewardded,setIsRewarded]=useState<boolean>(false)
  const context = useContext(Counter);
  const contextHandler=useContext(useHandleModal)

  if(!contextHandler){
    return null
  }
  const {isModalOpen , closeModal}=contextHandler

  if (!context) {
    return null; 
  }

  const { setTotal ,setBackers} = context;

  if (!isModalOpen) return null;

  const handlePledgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPledge(event.target.value);
    setError(""); 
    setValue("")
  };


  const handleClick = (value: string) => {
    if (selectedPledge !== null && selectedPledge !== undefined) {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue < 0) {
        setError("Please enter a valid number.");
        setValue("")
      } else {
        setTotal((prev) => prev + numericValue);
        setBackers((prev)=>prev + 1)
        setIsRewarded(true)
        setError("");
        setValue("");
        console.log("Pledge submitted:", numericValue);
      }
    }
  };


  const handleClose=()=>{
    setIsRewarded(false)
    closeModal()
  }
  

  return (
    <>
    {!isRewardded?(<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <AnimatePresence>
        <AnimatedModal className="bg-white overflow-y-auto h-[30rem] flex items-start flex-col p-6 rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-2xl font-bold py-4">Back this project</h2>
          <p className="text-gray-400">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          {pledges &&
            pledges.map((item, index) => (
              <div
                key={index}
                className={`border  rounded-lg p-7 w-full mt-4 ${
                  selectedPledge === index.toString()
                    ? "border-emeraldLight"
                    : "border-gray-400"
                } ${
                  item.available === null || item.available > 0
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
                      className="peer cursor-pointer w-5 h-5 appearance-none border border-gray-400 rounded-full 
                      checked:bg-emeraldLight checked:border-emeraldLight
                      disabled:bg-gray-300 disabled:cursor-not-allowed"
                      disabled={item.available !== null && item.available <= 0}
                    />

                    <label
                      htmlFor={`pledge-${index}`}
                      className={`font-semibold text-lg ${
                        selectedPledge === index.toString()
                          ? "text-emeraldLight"
                          : "text-gray-600"
                      } ${
                        item.available !== null && item.available <= 0
                          ? "text-gray-300"
                          : "text-emeraldLight"
                      }`}
                    >
                      {item.title}
                    </label>
                    <span>
                      <p
                        className={`font-semibold ${
                          item.available !== null && item.available <= 0
                            ? "text-gray-300 "
                            : " text-emeraldLight"
                        }`}
                      >
                        {item.pledgeAmount
                          ? `Pledge ${item.pledgeAmount} or more`
                          : ""}
                      </p>
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg">
                    {" "}
                    <span
                      className={`text-xl font-bold mr-3  ${
                        item.available !== null && item.available <= 0
                          ? "text-gray-400"
                          : " text-black"
                      }`}
                    >
                      {item.available ? item.available : ""}
                    </span>
                    {item.available ? `left` : ""}{" "}
                  </p>
                </div>
                <p
                  className={`mt-4  text-start pb-10  ${
                    item.available !== null && item.available <= 0
                      ? "text-gray-300"
                      : " text-gray-600"
                  }`}
                >
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
                          placeholder={`${item.pledgeAmount!==null?item.pledgeAmount:"$0.00"}`}
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
                          {error ? error : ""}
                        </p>
                      </div>
                      <Button
                        isHoverable={
                          item.available !== null && item.available <= 0
                        }
                        onClick={() => handleClick(value)}
                        name=" Continue"
                        className="px-8 py-3 text-ms font-semibold text-white bg-emeraldLight hover:bg-emeraldDark rounded-[2rem] flex justify-center items-center transition-colors duration-200  "
                      />
                    </label>
                  </AnimatedPledges>
                )}
              </div>
            ))}
          <Button
            isHoverable={true}
            name=" Close"
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          />
        </AnimatedModal>
      </AnimatePresence>
    </div>):(
      <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <AnimatePresence>
          <ThankModal close={handleClose}/>
        </AnimatePresence>
      </div>
    )}
    </>
  );
};

export default Modal;
