import { ExerciseType } from "@/type/Type";
import Image from "next/image";
import ClockIcon from "@/public/assets/time.png";
import HealthIcon from "@/public/assets/health.png";
import StarIcon from "@/public/assets/star.png";

interface LibraryCartDataType {
  exercise : ExerciseType;
}

const LibraryCart = ({exercise}:LibraryCartDataType) => {
   return (
    <div className="w-full overflow-hidden rounded-xl border border-[#222630] hover:border-[#C2F800] bg-[#15161b] text-white shadow-lg font-inter">

      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 mt-2">

        {/* Muscle Groups */}
        <div className="mb-3 flex gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[12px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h2 className="text-[18px] font-bold uppercase tracking-wide font-oswald">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xs text-[#9CA3AF]">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#20242E]" />

        {/* Exercise Info */}
        <div className="flex items-center justify-between text-xs text-[#9CA3AF]">

          <span className="flex items-center gap-1">
            <Image src={ClockIcon} alt="Clock Icon" width={50} height={50} className="w-3.5 h-3.5"></Image> {exercise.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Image src={HealthIcon} alt="Health Icon" width={50} height={50} className="w-3.5 h-3.5"></Image> {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Image src={StarIcon} alt="Star Icon" width={50} height={50} className="w-3.5 h-3.5"></Image> {exercise.rating}
          </span>

        </div>
      </div>
    </div>
  );
};

export default LibraryCart;