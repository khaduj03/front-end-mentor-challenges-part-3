import { PledgeData } from "../../lib/data";
import Button from "../Animations/Button";
import { useContext } from "react";
import { useHandleModal } from "../../hooks/useHandleModal";

//card in main home
export const PledgeCard = ({
  id,
  title,
  pledgeAmount,
  description,
  available,
}: PledgeData) => {
  const contextHandler = useContext(useHandleModal);
  if (!contextHandler) {
    return null;
  }
  
  const { handleOpen } = contextHandler;
  return (
    <>
      {available !== null && (
        <div className="rounded-lg md:p-6 my-1 bg-white w-auto  md:w-[38rem]">
          <div className="border border-gray-300 p-5 md:p-10 rounded-lg">
            <div className="flex flex-col md:flex-row items-start justify-between">
              {/* the title card */}
              <h3
                className={`font-bold text-xl ${
                  available > 0 ? "text-black" : "text-gray-400 "
                } `}
              >
                {title}
              </h3>
              {/* the Amount number */}
              <p
                className={` font-semibold ${
                  available > 0 ? "text-emeraldLight" : "text-gray-400 "
                }  `}
              >
                {pledgeAmount ? `Pledge ${pledgeAmount} or more` : ""}
              </p>
            </div>
            {/* the description section */}
            <p
              className={`text-start py-3 ${
                available > 0 ? "text-black" : "text-gray-400 "
              } `}
            >
              {description}
            </p>
            <div className="flex flex-col md:flex-row items-start justify-between">
              {/* the available number section */}
              <p
                className={`${
                  available > 0 ? "text-gray-600" : "text-gray-400 "
                } `}
              >
                <span
                  className={`text-5xl  font-bold ${
                    available > 0 ? "text-black" : "text-gray-400 "
                  } `}
                >
                  {available}
                </span>
                {available === null ? "" : "left"}
              </p>
              {/* button for handling open modal when click on select reward */}
              <Button
                isHoverable={available > 0}
                onClick={() => handleOpen(id)}
                name="Select Reward"
                className={`mt-4 md:px-7 px-4 py-2 md:py-3   rounded-full ${
                  available === null || available > 0
                    ? "bg-emeraldLight text-white  hover:bg-emeraldDark"
                    : "bg-gray-300  text-white cursor-not-allowed"
                }   `}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
