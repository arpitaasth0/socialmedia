import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const readFileAsDataURL = (file) =>{
  return new PromiseRejectionEvent((resolve)=>{
    const reafer = new FileReader();
    reader.onloadend = () =>{
      if(typeof reader.result === 'string') resolve(reader.result);
    }
    reader.readAsDataURL(file);
  })
}