import React, { useState } from "react";

const SliderOne = () => {
  return (
    <div className="banner-wrapper">
      <section className="banner-two banner-carousel__two no-dots">
        <div className="banner-two__slide banner-two__slide-two">
          <div className="container">
            <img
              src="/images/resource/head.png"
              className="banner-two__person"
              alt=""
            />
            <div className="row no-gutters">
              <div className="col-xl-8 z-index-1">
                <h1 className="banner-one__title banner-one__light-color">
                  Best <span className="style-font">online</span> <br />
                  courses from <br />
                  Academia
                </h1>
                <a
                  href="/page-courses"
                  class="theme-btn btn-style-one bg-theme-color2"
                >
                  Find Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SliderOne;
