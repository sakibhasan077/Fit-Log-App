import { ExerciseType } from "@/type/Type";
import LibraryCart from "./LibraryCart";

const Library = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: ExerciseType[] = await res.json();
  return (
    <div className="font-inter mt-16 container mx-auto">
      {/* Library Head */}
      <div className="mb-8">
        <h1 className="text-[32px] font-oswald mb-1 font-bold">THE LIBRARY</h1>
        <p className="leading-5 text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      {/* Library Body */}
      <div>
        <div className="grid grid-cols-3 gap-6">
          {data.map((cartData) => (
            <LibraryCart key={cartData.id} exercise={cartData}></LibraryCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
