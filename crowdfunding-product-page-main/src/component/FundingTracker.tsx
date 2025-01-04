export default function FundingTracker() {
  return (
    <section className=" w-[44rem] space-y-10 relative bottom-20 flex flex-col  bg-white  px-16  p-10  rounded-lg">
      <div className="flex-row flex">
        <div className="border-gray-300 border-r px-10">
          <h2 className="text-4xl font-bold">$37,580</h2>
          <p className="text-gray-400">of $100,000 backed</p>
        </div>
        <div className="border-gray-300 border-r px-10">
          <h2 className="text-4xl font-bold">5,007</h2>
          <p className="text-gray-400">total backers</p>
        </div>
        <div className=" px-10 ">
          <h2 className="text-4xl font-bold">56</h2>
          <p className="text-gray-400 ">days left</p>
        </div>
      </div>
      <div>
        <div className="bg-gray-300 w-full relative h-4 rounded-lg">
          <div className="absolute inset-0 bg-emeraldLight w-1/2 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
