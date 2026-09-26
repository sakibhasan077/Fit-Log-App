import { ExerciseType } from "@/type/Type";
import Image from "next/image";
import Clock from "@/public/assets/planClock.png";
import Health from "@/public/assets/planHealth.png";
import Star from "@/public/assets/planStar.png";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

interface CartDataType {
  exercise: ExerciseType;
  setSaved:React.Dispatch<React.SetStateAction<ExerciseType[]>>
  saved:ExerciseType[];
}

const SavedPlanCart = ({ exercise,setSaved,saved }: CartDataType) => {
  const handleButton = (getId:number) =>{
    const modifiedData = saved.filter(item => item.id !== getId);
    setSaved(modifiedData)
    toast.success("Removed from Saved")
  }
  return (
    <div className="grid grid-cols-2 justify-between items-center gap-4 rounded-2xl border border-gray-800 bg-[#15171e] p-4 font-inter">
      {/* Left Content and Image */}
      <div className="flex items-center gap-4">
        {/* Image */}
        <div className="relative h-20 w-36  overflow-hidden rounded-xl">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Exercise Information */}
        <div className="min-w-0 flex-1">
          {/* Name */}
          <h3 className="truncate mb-0.5 text-base font-oswald leading-6 tracking-[.4px] font-bold uppercase text-white">
            {exercise.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-xs font-semibold text-[#8A92A0]">{exercise.equipment}</p>

          {/* Stats */}
          <div className="mt-2 flex items-center gap-4 text-xs text-gray-300">
            <span className="flex items-center gap-1 text-[#D1D5DB]">
              <span>
                <Image src={Clock} width={50} height={50} alt="Clock Image" className="w-3.5 h-3.5"></Image>
              </span>
              {exercise.duration} min
            </span>

            <span className="flex items-center gap-1 text-[#D1D5DB]">
              <span><Image src={Health} width={50} height={50} alt="Clock Image" className="w-3.5 h-3.5"></Image></span>
              {exercise.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 text-[#D1D5DB]">
              <span><Image src={Star} width={50} height={50} alt="Clock Image" className="w-3.5 h-3.5"></Image></span>
              {exercise.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="flex justify-end gap-3">
        <Link href={`/${exercise.id}`}>
        <button
          className="rounded-full border border-[#374151] px-5 py-2.5 text-xs text-white transition hover:bg-gray-800"
        >
          View Details
        </button> </Link>

        <button
          onClick={()=>handleButton(exercise.id)}
          className="px-2 text-lg text-gray-500 transition hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SavedPlanCart;
