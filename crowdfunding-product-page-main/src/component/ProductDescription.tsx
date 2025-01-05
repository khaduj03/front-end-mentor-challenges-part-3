import { PledgeTiers } from "./PledgeTiers";

export const ProductDescription = () => {
    return (
      <div className="bg-white w-[44rem] p-10 bottom-20 relative rounded-lg">
        <h2 className="text-3xl font-extrabold text-start py-4">About this project</h2>
        <p className="text-start text-gray-500 py-2">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p className="text-start text-gray-500 py-2">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <PledgeTiers />
      </div>

    );
  };
  