import LibraryDetailsButtons from "@/components/libraryDetailsButtons/LibraryDetailsButtons";
import { ExerciseType } from "@/type/Type";
import Image from "next/image";

const LibraryDetails = async ({
  params,
}: {
  params: Promise<{ exerciseId: string }>;
}) => {
  const { exerciseId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${exerciseId}`,
  );
  const exercise: ExerciseType = await res.json();

  return (
    <div className="mt-32 text-white min-h-90 container mx-auto font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-5 sm:px-0">
        {/* Image box  */}
        <div className="w-full relative h-full min-h-100">
          <Image
            src={exercise && exercise.image}
            alt={exercise && exercise.name}
            fill
            className="object-cover rounded-2xl h-full"
          ></Image>
        </div>
        {/* content box  */}
        <div>
          {/* heading */}
          <h1 className="font-oswald font-bold text-4xl uppercase leading-10 tracking-[-0.9px]">
            {exercise && exercise.name}
          </h1>
          {/* description */}
          <p className="text-[#9CA3AF] mt-4 mb-5">
            {exercise && exercise.description}
          </p>

          {/* muscleGroups */}
          <div className="flex gap-2.5 mb-7">
            {exercise &&
              exercise.muscleGroups.map((item, idx) => (
                <span
                  className="bg-[#CCFF00] py-1 px-3.5 rounded-full text-[#0F1115] text-sm font-semibold"
                  key={idx}
                >
                  {item}
                </span>
              ))}
          </div>

          {/* Table */}
          <div className="mb-8">
            {exercise && (
              <ul className="border border-[#232834] bg-[#151922] rounded-2xl">
                <li className="flex justify-between py-3.5 px-6 border-b border-[#232834] ">
                  <span className="text-sm font-bold text-[#9CA3AF] tracking-[.6px]">EQUIPMENT</span>
                  <span className="text-sm text-[#E5E7EB] font-medium">{exercise.equipment}</span>
                </li>
                <li className="flex justify-between py-3.5 px-6 border-b border-[#232834] ">
                  <span className="text-sm font-bold text-[#9CA3AF] tracking-[.6px]">DIFFICULTY</span>
                  <span className="text-sm text-[#E5E7EB] font-medium">{exercise.difficulty}</span>
                </li>
                <li className="flex justify-between py-3.5 px-6 border-b border-[#232834] ">
                  <span className="text-sm font-bold text-[#9CA3AF] tracking-[.6px]">SETS</span>
                  <span className="text-sm text-[#E5E7EB] font-medium">{exercise.sets}</span>
                </li>
                <li className="flex justify-between py-3.5 px-6 border-b border-[#232834] ">
                  <span className="text-sm font-bold text-[#9CA3AF] tracking-[.6px]">REPS</span>
                  <span className="text-sm text-[#E5E7EB] font-medium">{exercise.reps}</span>
                </li>
                <li className="flex justify-between py-3.5 px-6 border-b border-[#232834] ">
                  <span className="text-sm font-bold text-[#9CA3AF] tracking-[.6px]">DURATION</span>
                  <span className="text-sm text-[#E5E7EB] font-medium">{exercise.duration}</span>
                </li>
                <li className="flex justify-between py-3.5 px-6 border-b border-[#232834] ">
                  <span className="text-sm font-bold text-[#9CA3AF] tracking-[.6px]">CALORIES</span>
                  <span className="text-sm text-[#E5E7EB] font-medium">{exercise.caloriesBurned}</span>
                </li>
                <li className="flex justify-between py-3.5 px-6  ">
                  <span className="text-sm font-bold text-[#9CA3AF] tracking-[.6px]">RATING</span>
                  <span className="text-sm text-[#E5E7EB] font-medium">{exercise.rating}</span>
                </li>
              </ul>
            )}
          </div>

          {/* Instruction */}
          <div>
            <h3 className="text-base font-black leading-6 tracking-[.8px] mb-4">INSTRUCTIONS</h3>
            <ol>
              {
                exercise && exercise.instructions.map((item,idx)=><li className="mb-3 text-[#D1D5DB] text-sm" key={idx} >{idx + 1}. {item}</li>)
              }
            </ol>
          </div>

          {/* Buttons  */}
          <LibraryDetailsButtons exercise = {exercise}></LibraryDetailsButtons>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetails;
