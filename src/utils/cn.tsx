import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cn;
