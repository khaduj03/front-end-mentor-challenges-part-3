import React, { useContext, useState } from "react";
import { pledges } from "../../lib/data";
import { AnimatePresence } from "framer-motion";
import AnimatedPledges from "../Animations/AnimatedPledges";
import AnimatedModal from "../Animations/AnimatedModal";
import Button from "../Animations/Button";
import { Counter } from "../../hooks/useCount";
import ThankModal from "./ThankModal";
import { useHandleModal } from "../../hooks/useHandleModal";


const Modal = () => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isRewardded, setIsRewarded] = useState<boolean>(false);
  const context = useContext(Counter);
  const contextHandler = useContext(useHandleModal);


  //handling the when modal open a
  if (!contextHandler) {
    return null;
  }
  const {
    isModalOpen,
    pledgeRefs,
    selectedPledge,
    setSelectedPledge,
    closeModal,
  } = contextHandler;

  if (!context) {
    return null;
  }


  //hadling when the user enter a number and it count it
  const { setTotal, setBackers } = context;
  if (!isModalOpen) return null;


  //to hadle pledge when the user want enter number for one of card
  const handlePledgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPledge(event.target.value);
    setError("");
    setValue("");
  };


  //when the user enter a number it recognize is it number or string
  const handleClick = (value: string) => {
    if (selectedPledge !== null && selectedPledge !== undefined) {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue < 0) {
        setError("Please enter a valid number.");
        setValue("");
      } else {
        setTotal((prev) => prev + numericValue);
        setBackers((prev) => prev + 1);
        setIsRewarded(true);
        setError("");
        setValue("");
        setSelectedPledge("");
      }
    }
  };


  //when the modal close
  const handleClose = () => {
    setIsRewarded(false);
    closeModal();
  };

  return (
    <>
    {/* is rewarded is for handling modal after enrting a value to show the thankmodal */}
      {!isRewardded ? (
        <div className="fixed px-2  md:px-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <AnimatePresence>
            {/* main modal */}
            <AnimatedModal className="bg-white overflow-y-auto h-[30rem] mx-2 flex items-start flex-col p-3 md:p-6 rounded-lg shadow-lg max-w-3xl w-full">
              <button className="flex items-end" onClick={closeModal}>
                <img src="/images/icon-close-modal.svg" alt="close icon" />
              </button>
              <h2 className="text-2xl font-bold py-4">Back this project</h2>
              <p className="text-gray-400">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>

              {pledges &&
                pledges.map((item, index) => (
                  // the container div section
                  <div
                    key={index}
                    ref={(el) => (pledgeRefs.current[index] = el!)}
                    className={`border rounded-lg p-7 w-full mt-4 ${
                      selectedPledge === item.id.toString()
                        ? "border-emeraldLight"
                        : "border-gray-400"
                    } ${
                      item.available === null || item.available > 0
                        ? "border-emeraldLight"
                        : "border-gray-400"
                    }`}
                  >
                    <div className="flex flex-row items-start justify-between">
                      <div className="flex flex-row items-center md:items-center space-x-4">
                        {/* radio button for  selection card */}
                        <input
                          type="radio"
                          id={`pledge-${item.id}`}
                          value={index.toString()}
                          name="pledge"
                          checked={selectedPledge === index.toString()}
                          onChange={handlePledgeChange}
                          className="peer cursor-pointer md:w-5 w-3 md:h-5 h-3 appearance-none border border-gray-400 rounded-full  checked:bg-emeraldLight checked:border-emeraldLight disabled:bg-gray-300 disabled:cursor-not-allowed"
                          disabled={
                            item.available !== null && item.available <= 0
                          }
                        />
                        <div className="flex md:flex-row flex-col">
                        {/*title  card section */}
                        <label
                          htmlFor={`pledge-${item.id}`}
                          className={`font-semibold text-sm md:text-lg ${
                            selectedPledge === item.id.toString()
                              ? "text-emeraldLight "
                              : "text-gray-600 hover:text-emeraldLight cursor-pointer"
                          } ${
                            item.available !== null && item.available <= 0
                              ? "text-gray-300"
                              : "text-emeraldLight"
                          }`}
                        >
                          {item.title}
                        </label>
                        {/* the Amount section in card */}
                        <span>
                          <p
                            className={`font-semibold md:text-lg text-xs ${
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
                      </div>

                      {/* the availble section of card  */}
                      <p className="text-gray-400 text-lg">
                        {" "}
                        <span
                          className={`md:text-xl text-sm font-bold mr-3  ${
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

                    {/* the description card */}
                    <p
                      className={`mt-4 md:text-lg text-sm  text-start pb-10  ${
                        item.available !== null && item.available <= 0
                          ? "text-gray-300"
                          : " text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                    {/* if the user select a radio button so the Amount section open until user can enter value */}
                    {selectedPledge === item.id.toString() && (
                      <AnimatedPledges>

                        <label
                          htmlFor="pledge"
                          className="flex md:flex-row flex-col justify-between items-center w-full text-gray-500"
                        >
                          Enter your pledge
                          <div className="flex  justify-between md:py-0 py-2">
                          <div className="flex flex-col ">

                            {/* the user can enter a value for raward */}
                            <input
                              value={value}
                              placeholder={`${
                                item.pledgeAmount !== null
                                  ? item.pledgeAmount
                                  : "$0.00"
                              }`}
                              onChange={(e) => {
                                setValue(e.target.value);
                              }}
                              className={`md:p-5 p-3 h-12  md:w-60 w-24 md:mr-0 mr-4 outline-none border 0  rounded-3xl ${
                                error ? "border-red-400" : "border-gray-400"
                              }`}
                              type="text"
                              id="pledge"
                            />

                            {/* if the value wasn't vailed it show an error */}
                            <p className="text-red-300 text-xs">
                              {error ? error : ""}
                            </p>
                          </div>

                          {/* button for contine  */}
                          <Button
                            isHoverable={
                             true
                            }
                            onClick={() => handleClick(value)}
                            name=" Continue"
                            className="px-8 py-3 text-ms font-semibold text-white bg-emeraldLight hover:bg-emeraldDark rounded-[2rem] flex justify-center items-center transition-colors duration-200  "
                          />
                          </div>
                        </label>
                      </AnimatedPledges>
                    )}
                  </div>
                ))}
            </AnimatedModal>
          </AnimatePresence>
        </div>
      ) : (
        // a modal for thanks user after rewarded
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <AnimatePresence>
            <ThankModal close={handleClose} />
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Modal;
