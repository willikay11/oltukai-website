import { Mail02Icon } from "@hugeicons/react-pro";
import Image from "next/image";
import {EmailRegistration} from "@/app/ui/components/emailRegistration";

export default function Footer() {
  return (
   <div className="relative">
     <div className="grid grid-cols-12 gap-4 pt-8 md:pt-16">
       <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 2xl:col-start-4 2xl:col-span-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="flex flex-col justify-center">
             <p className="text-13 md:text-16 font-normal text-gray-700 mb-2">
               Get notified when we launch.
             </p>
             <div className="inline-flex mb-3 2xl:w-96">
               <EmailRegistration border />
             </div>
             <p className="text-13 md:text-16 font-normal text-gray-700 mb-3">
               Oltukai is coming soon to all platforms.
             </p>
             <div className="inline-flex mb-4 md:mb-24">
               <Image
                   src="/app-store-logo.png"
                   alt="App Store"
                   width={100}
                   height={70}
                   style={{ width: "100px", height: "35px" }}
                   className="mr-4"
               />
               <Image
                   src="/google-play.png"
                   alt="Google Play"
                   width={100}
                   height={90}
                   style={{ width: "110px", height: "35px" }}
               />
             </div>
             <div className="inline-flex items-center">
              <span className="text-xs md:text-16 text-gray-700 font-normal">
                +254 716 909 815
              </span>
               <div className="mx-2 w-[1px] h-[6px] bg-primary" />
               <span className="text-xs md:text-16 text-gray-700 font-normal">
                oltukai.go@outlook.com
              </span>
               <div className="mx-2 w-[1px] h-[6px] bg-primary" />
               <span className="text-xs md:text-16 text-gray-700 font-normal">
                &#169; 2024
              </span>
             </div>
           </div>
           <div className="flex flex-col mt-4 md:mt-0">
             <Image
                 src="/mobile.svg"
                 alt="Mobile App"
                 width={545}
                 height={445}
             />
           </div>
         </div>
       </div>
     </div>
     <div className="absolute top-0 bottom-0 left-0 right-0 -z-[10]">
         <div className="h-full grid grid-cols-12 md:grid-cols-6 2xl:grid-cols-12 2xl:col-start-3 divide-x divide-dashed divide-gray-200">
             <div className="2xl:col-start-3" />
             <div className="2xl:col-span-2 col-span-3 md:col-span-1" />
             <div className="2xl:col-span-2 col-span-3 md:col-span-1" />
             <div className="2xl:col-span-2 col-span-3 md:col-span-1" />
             <div className="2xl:col-span-2" />
         </div>
     </div>
   </div>
  );
}
