import Image from "next/image";
import Link from "next/link";
import { hugeiconsLicense } from "@hugeicons/react-pro";
import {EmailRegistration} from "@/app/ui/components/emailRegistration";

hugeiconsLicense(
  "890e3333f427f30eb0b744e4d32392a6RT00NzkxODg2MzcwMDAwLFM9cHJvLFY9MSxQPUd1bXJvYWQsU1Q9QjVBMzQ1NzMsRVQ9MDIxMUY0RkM=",
);

export default function HeroSection () {
  return (
    <div className="relative">
      <Image
        src="/background.svg"
        alt="background-image"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
      <div className="h-screen grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 2xl:col-start-4 2xl:col-span-6">
          <div className="flex flex-col md:flex-row md:inline-flex md:items-center justify-between h-24 w-full">
            <Link href="/">
              <Image
                  className="md:hidden mt-2"
                  src="/logo.svg"
                  alt="Oltukai logo"
                  width={95}
                  height={35}
              />
              <Image
                className="hidden md:block"
                src="/logo.svg"
                alt="Oltukai logo"
                width={200}
                height={150}
              />
            </Link>

            <div className="flex flex-col mt-8 md:mt-0 md:flex-row md:inline-flex md:items-center">
              <span className="text-xs text-white mr-4">Coming Soon</span>
              <div className="mt-2 md:mt-0">
                <div className="inline-flex md:hidden">
                  <Image
                      src="/app-store-logo.png"
                      alt="App Store"
                      width={100}
                      height={35}
                      style={{ width: "100px", height: "35px" }}
                      className="mr-4"
                  />
                  <Image
                      src="/google-play.png"
                      alt="Google Play"
                      width={100}
                      height={35}
                      style={{ width: "100px", height: "35px" }}
                  />
                </div>
                <div className="hidden md:inline-flex">
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
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col justify-center">
            <p className="text-3xl mb-2 md:text-7xl text-white font-semibold mb-0 md:mb-6">
              Discover Places,
            </p>
            <p className="text-3xl mb-2 md:text-7xl text-white font-semibold mb-0 md:mb-6">
              Organise Experiences,
            </p>
            <p className="text-3xl mb-2 md:text-7xl text-white font-semibold md:mb-6">
              and Join Communities.
            </p>
            <p className="text-13 md:text-16 text-white w-full md:w-2/4 mb-4 md:mb-12">
              Oltukai gives you access to unlimited activities such as hiking,
              camping, bike riding, Drives, Sunset watching etc. Access hiking
              places, parks, mountains and all the fun places you love. You can
              also join different communities based on your interests.
            </p>

            <p className="text-xs md:text-16 text-white mb-4">
              Get notified when we launch.
            </p>
            <div className="w-full md:w-96">
              <EmailRegistration border={false} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-[1]">
        <div className="h-full grid grid-cols-12 md:grid-cols-6 2xl:grid-cols-12 divide-x divide-dashed divide-gray-400">
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
