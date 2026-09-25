"use client"
import { ExerciseType } from "@/type/Type";
import { createContext, ReactNode, useState } from "react";

interface ExerciseProviderProps {
  todaysPlan: ExerciseType[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<ExerciseType[]>>;
  saved: ExerciseType[];
  setSaved: React.Dispatch<React.SetStateAction<ExerciseType[]>>;
}

export const ExerciseContext = createContext<ExerciseProviderProps|undefined>(undefined)

const ExerciseProvider = ({children}:{children:ReactNode}) => {
  const [todaysPlan, setTodaysPlan] = useState<ExerciseType[]>([])
  const [saved, setSaved] = useState<ExerciseType[]>([])
  return <ExerciseContext.Provider value={{todaysPlan,setTodaysPlan,saved,setSaved}}>
    {children}
  </ExerciseContext.Provider>
};

export default ExerciseProvider;