"use client";

import React from "react";
import Slider from "react-infinite-logo-slider";

export default function InfiniteSlider() {
  return (
    <Slider
      width="200px"
      duration={20}
      pauseOnHover={false}
      blurBorders={true}
      blurBoderColor={"#000"}
    >
      <Slider.Slide>
        <img src="/challenge.svg" alt="any" className="w-32" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/marketing.svg" alt="any2" className="w-32" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/laravelshopper.svg" alt="any3" className="w-40" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/zuhe.svg" alt="any3" className="w-32" />
      </Slider.Slide>
      {/* <Slider.Slide>
        <img src="/laravelCameroon.svg" alt="any3" className="w-20" />
      </Slider.Slide> */}
    </Slider>
  );
}
