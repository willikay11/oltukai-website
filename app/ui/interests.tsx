"use client";
import {useRef, useState} from "react";
import clsx from "clsx";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  variableWidth: true
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
];
export default function Interests() {
  let sliderRef = useRef(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  return (
    <div className="bg-white py-16 w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-3 col-span-10 overflow-hidden">
          <div className="inline-flex w-full mb-3 justify-between pr-4">
            <p className="text-3xl font-bold text-gray-800">Discover</p>
            <div className="inline-flex">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  sliderRef.slickPrev();
                }}
                className="flex items-center justify-center w-8 h-8 rounded-full border-[1px] border-primary mr-2"
              >
                <ArrowLeft01Icon size={22} />
              </button>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  sliderRef.slickNext();
                  if (!scrolled) setScrolled(true);
                }}
                className="flex items-center justify-center w-8 h-8 rounded-full border-[1px] border-primary"
              >
                <ArrowRight01Icon size={22} />
              </button>
            </div>
          </div>
        </div>
        <div className={clsx('overflow-hidden col-start-0 col-span-12')}>
          <div className="slider-container">
            <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
            >
              {interests.map((interest) => (
                  <div
                      key={interest.title}
                      style={{ width: 220 }}
                      className="!flex items-center justify-center w-[220px] h-[80px] relative"
                  >
                    <Image
                        src={interest.image}
                        alt={interest.title}
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                          backgroundPosition: "center",
                          zIndex: -1,
                        }}
                    />
                    <span className="text-white text-16 font-medium">
                  {interest.title}
                </span>
                  </div>
              ))}
            </Slider>
          </div>
          {/*<div ref={sliderRef} className="flex items-center overflow-hidden scroll-smooth">*/}
          {/*  {interests.map((interest) => (*/}
          {/*      <div*/}
          {/*          key={interest.title}*/}
          {/*          style={{ width: 220 }}*/}
          {/*          className="flex items-center justify-center w-[220px] h-[80px] relative"*/}
          {/*      >*/}
          {/*        <Image*/}
          {/*            src={interest.image}*/}
          {/*            alt={interest.title}*/}
          {/*            fill*/}
          {/*            sizes="100vw"*/}
          {/*            style={{*/}
          {/*              objectFit: "cover",*/}
          {/*              backgroundPosition: "center",*/}
          {/*              zIndex: -1,*/}
          {/*            }}*/}
          {/*        />*/}
          {/*        <span className="text-16 font-medium">*/}
          {/*          {interest.title}*/}
          {/*        </span>*/}
          {/*      </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
