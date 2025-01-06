export type PledgeData = {
    id:number;
    title: string;
    description: string;
    reward: string | null;
    pledgeAmount: string | null;
    available: number|null ;
}

export const pledges: PledgeData[] = [
    {
        id:0,
        title: "Pledge with no reward",
        description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        reward: null,
        pledgeAmount: null,
        available: null
    },
    {
        id:1,
        title: "Bamboo Stand",
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        reward: "Ergonomic Bamboo Stand",
        pledgeAmount: "$25",
        available: 101
    },
    {
        id:2,
        title: "Black Edition Stand",
        description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        reward: "Black Special Edition Stand",
        pledgeAmount: "$75",
        available: 64
    },
    {
        id:3,
        title: "Mahogany Special Edition",
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        reward: "Two Mahogany Special Edition Stands and Backer T-Shirt",
        pledgeAmount: "$200",
        available: 0
    }
]

