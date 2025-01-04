
  
 export const ProductDescription = () => {
    return (
      <div className="bg-white">
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
      </div>
    );
  };
  
interface TypePledgeTiers{
    title:string;
    pledgeAmount:number;
    description:string;
    left:number
}
 export const PledgeTiers = () => {
    const tiers :TypePledgeTiers[]= [
      {
        title: "Bamboo Stand",
        pledgeAmount: 25,
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        left: 101,
      },
      {
        title: "Black Edition Stand",
        pledgeAmount: 75,
        description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: 64,
      },
      {
        title: "Mahogany Special Edition",
        pledgeAmount: 200,
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: 2,
      },
    ];
  
    return (
      <div>
        {tiers.map((tier, index) => (
          <PledgeCard key={index} {...tier} />
        ))}
      </div>
    );
  };
  
  const PledgeCard = ({ title, pledgeAmount, description, left }:TypePledgeTiers) => {
    return (
      <div className="border rounded-lg p-6 my-4 bg-white">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-emeraldLight font-semibold">
          Pledge ${pledgeAmount} or more
        </p>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-600">
          <span className="font-bold text-black">{left}</span> left
        </p>
        <button className="mt-4 bg-emeraldLight text-white px-6 py-2 rounded-full hover:bg-emeraldDark">
          Select Reward
        </button>
      </div>
    );
  };