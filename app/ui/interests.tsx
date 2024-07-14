"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  hugeiconsLicense,
} from "@hugeicons/react-pro";

hugeiconsLicense(
  "890e3333f427f30eb0b744e4d32392a6RT00NzkxODg2MzcwMDAwLFM9cHJvLFY9MSxQPUd1bXJvYWQsU1Q9QjVBMzQ1NzMsRVQ9MDIxMUY0RkM=",
);

const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

const interests = [
  {
    image: "/hiking.svg",
    title: "Hiking",
  },
  {
    image: "/running.svg",
    title: "Running",
  },
  {
    image: "/offroad-driving.svg",
    title: "Off Road Driving",
  },
  {
    image: "/gym.svg",
    title: "Gym",
  },
  {
    image: "/night-life.svg",
    title: "Night Life",
  },
  {
    image: "/hiking.svg",
    title: "Camping",
  },
  {
    image: "/running.svg",
    title: "Biking",
  },
  {
    image: "/offroad-driving.svg",
    title: "Walking",
  },
  {
    image: "/gym.svg",
    title: "Fishing",
  },
  {
    image: "/night-life.svg",
    title: "Sunset",
  },
  {
    image: "/running.svg",
    title: "Biking",
  },
  {
    image: "/offroad-driving.svg",
    title: "Walking",
  },
  {
    image: "/gym.svg",
    title: "Fishing",
  },
  {
    image: "/night-life.svg",
    title: "Sunset",
  },
];
export default function Interests() {
  let scrollBy = 500;
  const ref = useRef<any>();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showPrevBtn, setShowPrevBtn] = useState<boolean>(false);
  const [showNextBtn, setShowNextBtn] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollBy = ref?.current?.offsetWidth - 100;

      window.addEventListener("resize", () => {
        if (ref?.current?.scrollWidth === ref?.current?.offsetWidth) {
          setShowNextBtn(false);
        }

        if (ref?.current?.scrollWidth > ref?.current?.offsetWidth) {
          setShowNextBtn(true);
        }
      });

      ref?.current?.addEventListener("scroll", () => {
        if (
          ref.current?.offsetWidth + ref.current?.scrollLeft >=
          ref?.current?.scrollWidth - 5
        ) {
          setShowNextBtn(false);
        }

        if (ref.current?.scrollLeft > 0) {
          setShowPrevBtn(true);
        }

        if (ref.current?.scrollLeft === 0) {
          setShowPrevBtn(false);
          setShowNextBtn(true);
          setScrolled(false);
        }
      });
    }
  });

  return (
    <div className="bg-white py-16 w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-3 col-span-10">
          <div className="inline-flex w-full mb-3 justify-between pr-4">
            <p className="text-3xl font-bold text-gray-800">Discover</p>
            <div className="inline-flex">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  ref.current?.scrollTo({
                    left: ref.current?.scrollLeft - scrollBy,
                  });
                }}
                className={clsx(
                  "flex items-center justify-center w-8 h-8 rounded-full border-[1px] mr-2",
                  {
                    "border-primary": showPrevBtn,
                    "border-gray-200": !showPrevBtn,
                  },
                )}
              >
                <ArrowLeft01Icon
                  size={22}
                  className={clsx("", {
                    "text-primary": showPrevBtn,
                    "text-gray-200": !showPrevBtn,
                  })}
                />
              </button>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  // setScrolled(true);
                  ref.current?.scrollTo({
                    left: ref.current?.scrollLeft + scrollBy,
                  });
                }}
                className={clsx(
                  "flex items-center justify-center w-8 h-8 rounded-full border-[1px] mr-2",
                  {
                    "border-primary": showNextBtn,
                    "border-gray-200": !showNextBtn,
                  },
                )}
              >
                <ArrowRight01Icon
                  size={22}
                  className={clsx("", {
                    "text-primary": showNextBtn,
                    "text-gray-200": !showNextBtn,
                  })}
                />
              </button>
            </div>
          </div>
        </div>
        <div ref={ref} className={clsx('col-span-12 overflow-hidden scroll-smooth')}>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-start-1 col-span-2" />
            <div className="col-start-3 col-span-10">
              <div className="inline-flex items-center">
                {interests.map((interest, index) => (
                    <div
                        key={interest.title}
                        style={{ width: 220, height: 80 }}
                        className="flex flex-col items-center justify-center mr-2 relative"
                    >
                      <Image
                          src={interest.image}
                          alt={interest.title}
                          fill
                          sizes="100vw"
                          style={{
                            objectFit: "cover",
                            backgroundPosition: "center",
                          }}
                      />
                      <p className="text-white text-16 z-10">{interest.title}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
