import { useContext, useState } from "react";
import AnimatedBookMark from "./Animations/AnimatedBookMark";
import Button from "./Button";
import { useHandleModal } from "./useHandleModal";

export default function MonitorRiserCard() {
  const [isMarked, setIsmarked] = useState<boolean>(false);
  const context=useContext(useHandleModal)
  if(!context){
    return null
  }
  const {openModal}=context;

  const handleClick = () => {
    openModal()
  };

  const handleClickIsMarked = () => {
    setIsmarked(!isMarked);
  };
  return (
    <>
      <div className=" w-[44rem] relative bottom-20  bg-white space-y-7 px-16  p-10 pt-0 rounded-lg ">
        <div className="w-full h-10 justify-center items-center flex relative  ">
          <img
            className="absolute bottom-4"
            src="/images/logo-mastercraft.svg"
            alt="mastercraft img"
          />
        </div>
        <h1 className="text-2xl font-bold">Mastercraft Bamboo Monitor Riser</h1>
        <p className="text-gray-400">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex flex-row justify-between">
          <Button
            isHoverable={true}
            name=" Back this Project"
            onClick={handleClick}
            className="px-7 py-3 text-ms font-semibold text-white bg-emeraldLight hover:bg-emeraldDark rounded-[2rem] flex justify-center items-center transition-colors duration-200  "
          />
          <AnimatedBookMark
            isMarked={isMarked}
            handleClickIsMarked={handleClickIsMarked}
          >
            <span>{isMarked ? "BookMarked" : "BookMark"}</span>
          </AnimatedBookMark>
        </div>
      </div>
    </>
  );
}
