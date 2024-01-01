import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const PopularCourses = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://tender-duck-pantsuit.cyclic.app/api/subject")
      .then((response) => {
        setRows(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".owl-prev-course-1",
          nextEl: ".owl-next-course-1",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            // spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
          },
        }}
      >
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>loading....</p>
          </div>
        ) : (
          <div>
            {rows.map((item, i) => (
              <SwiperSlide>
                <div className="course-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/page-course-details">
                          <img src={item.imgurl} title="Edulrns" />
                        </Link>
                      </figure>
                      <div className="value">Advanced</div>
                    </div>
                    <div className="content-box">
                      <ul className="course-info">
                        <li>
                          <i className="fa fa-book" /> 30 Lessons
                        </li>
                        <li>
                          <i className="fa fa-users" /> 50+ Students
                        </li>
                      </ul>
                      <h5 className="title">
                        <Link href="/page-course-details">{item.subject}</Link>
                      </h5>
                      <div className="other-info">
                        <div className="rating-box">
                          <span className="text">(4.9 /8 Rating)</span>
                          <div className="rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                        </div>
                        <div className="duration">
                          <i className="fa fa-clock" /> 3 Weeks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>

      <div class="owl-nav">
        <div class="owl-prev owl-prev-course-1">
          <span class="fa fa-long-arrow-alt-left"></span>
        </div>
        <div class="owl-next owl-next-course-1">
          <span class="fa fa-long-arrow-alt-right"></span>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
