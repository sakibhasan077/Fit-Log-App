"use client";
import Image from "next/image";
import CalendarIcon from "@/public/assets/calendarIcon.png";
import SaveIcon from "@/public/assets/saveIcon.png";
import { ExerciseType } from "@/type/Type";
import { useContext, useState } from "react";
import { ExerciseContext } from "@/context/ExerciseProvider";
import { toast } from "react-toastify";

interface ExerciseDataType {
  exercise: ExerciseType;
}
const LibraryDetailsButtons = ({ exercise }: ExerciseDataType) => {
  // Context
  const context = useContext(ExerciseContext);
  if(!context){
    throw new Error ("Not Found")
  }
  const {todaysPlan,setTodaysPlan,saved,setSaved} = context;

  // State
  const [todayPlanStatus,setTodayPlanStatus] = useState(false)
  const [savedPlanStatus,setSavedPlanStatus] = useState(false)

  // Handler Function
  const handleTodaysPlanBtn = () => {
    const uniqueData = todaysPlan.find(item=> item.id === exercise.id);
    if(!uniqueData){
      setTodaysPlan([...todaysPlan,exercise]);
      setTodayPlanStatus(true);
      toast.success("Added to Today's Plan")
    }else{
      toast.error("Already in your plan")
    }
  };
  const handleSavedBtn = () => {
    const uniqueData = saved.find(item=> item.id === exercise.id);
    if(!uniqueData){
      setSaved([...saved, exercise]);
      setSavedPlanStatus(true);
      toast.success("Added to Saved Plan")
    }else{
      toast.error("Already in your plan")
    }

  };

  // Rendering
  return (
    <div className="mt-6 flex gap-4">
      <button
        onClick={handleTodaysPlanBtn}
        className={`flex gap-2 items-center py-3 px-6 rounded-xl bg-[#CCFF00] text-sm text-[#0F1115] font-semibold ${todayPlanStatus ? "cursor-no-drop bg-[#ccff00c4]": "cursor-pointer"}`}
      >
        <Image
          src={CalendarIcon}
          alt="Calendar Icon"
          width={50}
          height={50}
          className="w-4 h-4"
        ></Image>{" "}
        Add to today's plan
      </button>
      <button
        onClick={handleSavedBtn}
        className={`flex gap-2 items-center py-3 px-6 rounded-xl border border-[#374151] text-sm font-semibold ${savedPlanStatus ? "cursor-no-drop bg-[rgba(255,255,255,0.1)]": "cursor-pointer"}`}
      >
        <Image
          src={SaveIcon}
          alt="Save Icon"
          width={50}
          height={50}
          className="w-4 h-4"
        ></Image>{" "}
        Save for later
      </button>
    </div>
  );
};

export default LibraryDetailsButtons;
