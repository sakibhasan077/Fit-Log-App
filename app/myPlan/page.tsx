
const MyPlan = () => {
  return (
    <div className="mt-30 mb-10 container mx-auto font-inter">
      {/* My Plan Head */}
      <div>
        <h2 className="text-3xl font-bold font-oswald mb-2">MY PLAN</h2>
        <p className="text-sm text-[#8A92A0] mb-6 ">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* Counter */}
      <div className="p-6 pt-8 border-2 border-[#232732] rounded-2xl bg-[#13161D] mb-6 grid grid-cols-3">
        <div className="border-r border-[#232732] pr-6">
          <span className="block mb-4 text-sm text-[#8A92A0]">Exercises</span>
          <span className="block text-4xl font-bold font-oswald leading-10 text-[#CCFF00]">
            2
          </span>
        </div>
        <div className="border-r border-[#232732] px-8">
          <span className="block mb-4 text-sm text-[#8A92A0]">Minutes</span>
          <span className="block text-4xl font-bold font-oswald leading-10">
            23
          </span>
        </div>
        <div className=" px-8">
          <span className="block mb-4 text-sm text-[#8A92A0]">Calories</span>
          <span className="block text-4xl font-bold font-oswald leading-10">
            190
          </span>
        </div>
      </div>

      {/* Show Data */}
      <div>
        <div className="flex justify-between items-center">
          {/* Tabs */}
          <div className="tabs tabs-box rounded-2xl border border-[#232732] bg-[#151921] p-1 text-white">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-xl border border-transparent text-white checked:border checked:border-[#2B303D] checked:bg-[#1F242D] min-w-25"
              aria-label="Today’s Plan"
              defaultChecked
            />

            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-xl border border-transparent text-white checked:border checked:border-[#2B303D] checked:bg-[#1F242D] min-w-25"
              aria-label="Saved"
            />
          </div>
          {/* Sort By  */}
          <div className="flex gap-3 items-center">
          <span className="min-w-15 text-[#8A92A0] text-sm">Sort By</span>
            <select
              defaultValue="Pick a color"
              className="select bg-[#13161D] border border-[#232732] rounded-2xl text-white"
            >
              {/* <option disabled={true}>Pick a color</option> */}
              <option className="">Duration</option>
              <option className="">Calories</option>
              <option className="">Ratings</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
