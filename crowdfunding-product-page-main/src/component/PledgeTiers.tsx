import { pledges } from "../lib/data";
import { PledgeCard } from "./PledgeCard";

  export const PledgeTiers = () => {
    return (
      <div>
        {pledges.map((tier, index) => (
          <PledgeCard key={index} {...tier} />
        ))}
      </div>
    );
  };
  