"use client";

import NoDataCart from "@/components/planCart/NoDataCart";
import SavedPlanCart from "@/components/planCart/SavedPlanCart";
import TodaysPlanCart from "@/components/planCart/TodaysPlanCart";
import { ExerciseContext } from "@/context/ExerciseProvider";
import { ExerciseType } from "@/type/Type";
import { Suspense, useContext, useState } from "react";
import WorkoutLoading from "./workoutLoading";


const MyPlan = () => {
  // Context
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("Not Found");
  }
  // State
  const [plan, setPlan] = useState<"todaysPlan" | "savedPlan">("todaysPlan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "ratings">(
    "duration",
  );

  const { todaysPlan, setTodaysPlan, saved, setSaved } = context;

  // Handler Function
  const handleTodaysPlanState = () => {
    setPlan("todaysPlan");
  };

  const handleSavedPlanState = () => {
    setPlan("savedPlan");
  };

  const sortPlan = (plan: ExerciseType[]) => {
    const myPlan = [...plan];

    if (sortBy === "duration") {
      myPlan.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      myPlan.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else {
      myPlan.sort((a, b) => a.rating - b.rating);
    }

    return myPlan;
  };
  const sortTodaysPlan = sortPlan(todaysPlan);
  const sortSavedPlan = sortPlan(saved);
  return (
    <div className="mt-30 mb-10 container mx-auto font-inter">
      {/* My Plan Head */}
      <div className="mx-5 sm:mx-0">
        <h2 className="text-3xl font-bold font-oswald mb-2">MY PLAN</h2>
        <p className="text-sm text-[#8A92A0] mb-6 ">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* Counter */}
      <div className="p-6 pt-8 border-2 border-[#232732] rounded-2xl bg-[#13161D] mb-6 grid grid-cols-1 sm:grid-cols-3 mx-5 sm:mx-0">
        <div className="pl-8 sm:pl-0  py-5 sm:py-0 text-center sm:text-start border-b sm:border-b-0 sm:border-r border-[#232732] pr-6">
          <span className="block mb-4 text-sm text-[#8A92A0]">Exercises</span>
          <span className="block text-4xl font-bold font-oswald leading-10 text-[#CCFF00]">
            {plan === "todaysPlan" ? todaysPlan.length : saved.length}
          </span>
        </div>
        <div className="  py-5 sm:py-0 text-center sm:text-start border-b sm:border-b-0 sm:border-r border-[#232732] px-8">
          <span className="block mb-4 text-sm text-[#8A92A0]">Minutes</span>
          <span className="block text-4xl font-bold font-oswald leading-10">
            {plan === "todaysPlan"
              ? todaysPlan.reduce((acc, item) => acc + item.duration, 0)
              : saved.reduce((acc, item) => acc + item.duration, 0)}
          </span>
        </div>
        <div className=" py-5 sm:py-0 text-center sm:text-start px-8">
          <span className="block mb-4 text-sm text-[#8A92A0]">Calories</span>
          <span className="block text-4xl font-bold font-oswald leading-10">
            {plan === "todaysPlan"
              ? todaysPlan.reduce((acc, item) => acc + item.caloriesBurned, 0)
              : saved.reduce((acc, item) => acc + item.caloriesBurned, 0)}
          </span>
        </div>
      </div>

      {/* Show Data */}
      <div className="mx-5 sm:mx-0">
        <div className="flex flex-col justify-center sm:flex-row gap-6 sm:justify-between items-center">
          {/* Tabs */}
          <div className="tabs tabs-box rounded-2xl border border-[#232732] bg-[#151921] p-1 text-white">
            <input
              onClick={handleTodaysPlanState}
              type="radio"
              name="my_tabs_1"
              className="tab rounded-xl border border-transparent text-white checked:border checked:border-[#2B303D] checked:bg-[#1F242D] min-w-25"
              aria-label="Today’s Plan"
              defaultChecked
            />

            <input
              onClick={handleSavedPlanState}
              type="radio"
              name="my_tabs_1"
              className="tab rounded-xl border border-transparent text-white checked:border checked:border-[#2B303D] checked:bg-[#1F242D] min-w-25"
              aria-label="Saved"
            />
          </div>
          {/* Sort By  */}
          <div className="flex gap-3 items-center">
            <span className="min-w-15 text-[#8A92A0] text-sm">Sort By:</span>
            <select
              defaultValue={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "ratings")
              }
              className="select bg-[#13161D] border border-[#232732] rounded-2xl text-white"
            >
              {/* <option disabled={true}>Pick a color</option> */}
              <option value={"duration"}>Duration</option>
              <option value={"calories"}>Calories</option>
              <option value={"ratings"}>Ratings</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-5">
          <Suspense fallback={<WorkoutLoading></WorkoutLoading>}>
            {plan === "todaysPlan" ? (
              todaysPlan.length === 0 ? (
                <NoDataCart></NoDataCart>
              ) : (
                sortTodaysPlan.map((item) => (
                  <TodaysPlanCart
                    key={item.id}
                    exercise={item}
                    setTodaysPlan={setTodaysPlan}
                    todaysPlan={todaysPlan}
                  ></TodaysPlanCart>
                ))
              )
            ) : saved.length === 0 ? (
              <NoDataCart></NoDataCart>
            ) : (
              sortSavedPlan.map((item) => (
                <SavedPlanCart
                  key={item.id}
                  exercise={item}
                  saved={saved}
                  setSaved={setSaved}
                ></SavedPlanCart>
              ))
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
