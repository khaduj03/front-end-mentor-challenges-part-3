import { useContext, useState } from "react";
import AnimatedBookMark from "./Animations/AnimatedBookMark";
import Button from "./Animations/Button";
import { useHandleModal } from "../hooks/useHandleModal";

export default function MonitorRiserCard() {
  const [isMarked, setIsmarked] = useState<boolean>(false);
  const context=useContext(useHandleModal)
  if(!context){
    return null
  }
  const {openModal}=context;

  //function for the open modal 
  const handleClick = () => {
    openModal()
  };

  //handling bookmark when click
  const handleClickIsMarked = () => {
    setIsmarked(!isMarked);
  };
  return (
    <>
      <div className=" md:w-[43rem] w-auto  relative bottom-20  bg-white md:space-y-7 space-y-2 md:px-16  md:p-10 p-7 pt-0 rounded-lg ">
        {/* the logo section */}
        <div className="w-full h-10 justify-center items-center flex relative  ">
          <img
            className="absolute bottom-4"
            src="/images/logo-mastercraft.svg"
            alt="mastercraft img"
          />
        </div>
        {/* the title of home main */}
        <h1 className="md:text-2xl text-xl font-bold">Mastercraft Bamboo Monitor Riser</h1>
        {/* the description */}
        <p className="text-gray-400 md:text-lg text-sm">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex flex-row justify-between">
          {/* button for handling modal  */}
          <Button
            isHoverable={true}
            name=" Back this Project"
            onClick={handleClick}
            className="px-7 py-3 md:px-10 text-xs md:text-sm font-semibold text-white bg-emeraldLight hover:bg-emeraldDark rounded-[2rem] flex justify-center items-center transition-colors duration-200  "
          />

          {/* book mark section  */}
          <AnimatedBookMark
            isMarked={isMarked}
            handleClickIsMarked={handleClickIsMarked}
          >
            <span className="md:flex hidden">{isMarked ? "BookMarked" : "BookMark"}</span>
          </AnimatedBookMark>
        </div>
      </div>
    </>
  );
}
