import { PledgeData } from "../lib/data";
import Button from "./Button";
import { useContext } from "react";
import { useHandleModal } from "./useHandleModal";

export const PledgeCard = ({
  title,
  pledgeAmount,
  description,
  available,
}: PledgeData) => {
  const contextHandler = useContext(useHandleModal);

  if (!contextHandler) {
    return null;
  }
  const { openModal } = contextHandler;
  return (
    <>
      {available !== null && (
        <div className="rounded-lg p-6 my-1 bg-white  w-[38rem]">
          <div className="border border-gray-300 p-10 rounded-lg">
            <div className="flex flex-row justify-between">
              <h3
                className={`font-bold text-xl ${
                  available > 0 ? "text-black" : "text-gray-400 "
                } `}
              >
                {title}
              </h3>
              <p
                className={` font-semibold ${
                  available > 0 ? "text-emeraldLight" : "text-gray-400 "
                }  `}
              >
                {pledgeAmount ? `Pledge ${pledgeAmount} or more` : ""}
              </p>
            </div>
            <p
              className={`text-start py-3 ${
                available > 0 ? "text-black" : "text-gray-400 "
              } `}
            >
              {description}
            </p>
            <div className="flex flex-row justify-between">
              <p
                className={`${
                  available > 0 ? "text-gray-600" : "text-gray-400 "
                } `}
              >
                <span
                  className={`text-4xl  font-extrabold${
                    available > 0 ? "text-black" : "text-gray-400 "
                  } `}
                >
                  {available}
                </span>
                {available === null ? "" : "left"}
              </p>
              <Button
                isHoverable={available > 0}
                onClick={openModal}
                name="Select Reward"
                className={`mt-4 px-6 py-2   rounded-full ${
                  available === null || available > 0
                    ? "bg-emeraldLight text-white  hover:bg-emeraldDark"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }   `}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
