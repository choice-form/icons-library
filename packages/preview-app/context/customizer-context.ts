import { createContext, useContext } from "react";

interface CustomizerProps {
  color: string;
  setColor: (color: string) => void;
  strokeWidth: number;
  setStrokeWidth: (width: number) => void;
  size: number;
  setSize: (size: number) => void;
}

export const CustomizerContext = createContext<CustomizerProps | null>(null);

export const useCustomizer = () => {
  const ctx = useContext(CustomizerContext);
  if (!ctx) {
    throw new Error("CustomizerContext not found");
  }
  return ctx;
};
