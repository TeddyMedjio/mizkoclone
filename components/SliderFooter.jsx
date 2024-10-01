"use client";

import React from "react";
import Slider from "react-infinite-logo-slider";

export default function SliderFooter() {
  return (
    <Slider
      width="200px"
      duration={20}
      pauseOnHover={false}
      blurBorders={true}
      blurBoderColor={"#000"}
    >
      <Slider.Slide>
        <div className="flex items-center justify-around w-full">
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            disponible
          </p>{" "}
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            +++{" "}
          </p>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className="flex items-center justify-around w-full">
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            disponible
          </p>{" "}
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            +++{" "}
          </p>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className="flex items-center justify-around w-full">
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            disponible
          </p>{" "}
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            +++{" "}
          </p>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className="flex items-center justify-around w-full">
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            disponible
          </p>{" "}
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            +++{" "}
          </p>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className="flex items-center justify-around w-full">
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            disponible
          </p>{" "}
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            +++{" "}
          </p>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className="flex items-center justify-around w-full">
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            disponible
          </p>{" "}
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            +++{" "}
          </p>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className="flex items-center justify-around w-full">
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            disponible
          </p>{" "}
          <p className="text-grey text-sm uppercase font-medium tracking-[2px]">
            {" "}
            +++{" "}
          </p>
        </div>
      </Slider.Slide>
    </Slider>
  );
}
