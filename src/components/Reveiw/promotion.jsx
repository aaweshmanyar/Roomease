import React from "react";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import "./promotion.css";
import testimonialimg from '../../assets/Images/testimonial.jpg'
const Promotions = () => {
  return (
    <>
      <div className="page-wrap mb-5 ">
        {/* Section to hold post sliders */}
        <p className="text-black  text-4xl text-center mt-8">Let’s hear it from our customer</p>
        <section className="post-sliders">
          {/* Heading for the section */}
          {/* <h2 className="section-heading text-black">Promotions</h2> */}
          {/* Main post slider container */}
          <div className="post-slider bg-gradient-to-r from-green to-white rounded-md ">
            {/* Header card (title and sponsor information) */}
            <div
              className="post-slider-header header-card bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${testimonialimg})` }} 
            >
              {/* <h2 className="header-card-title bg-black text-green mb-[130px] ">
                Promotion Plan
              </h2>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
                14 + 1 Trial
              </p>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
                4725 THB 315 THB / Class
              </p>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
                Drop-in 599 THB 2 months Starts on purchase date
              </p>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
              See Review {'\u21AA'}
              </p> */}
            </div>
            {/* Grid layout for mini cards (articles) */}
            <div className="mini-card-grid ">
              {/* First mini card */}
              {/* bg-gradient-to-r from-green-300 to-green-300 */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Review</strong> jan 6, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced CSS Flexbox</h3> */}

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quos ullam quo eaque alias tempora quam, ipsam beatae quas molestias velit facere, autem odit dolorum non aspernatur quis aliquid dolorem.                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a
                    className="author-name "
                    href="#"
                    style={{ color: "black" }}
                  >
                    Narinder Singh
                  </a>
                </div>
              </article>

              {/* Second mini card */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Review</strong> on Jul 10, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced CSS Flexbox</h3> */}

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat aut consequatur porro officia quaerat dignissimos, suscipit corrupti dolore beatae quidem voluptatem temporibus non, illo a voluptates cum sequi. Amet?                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a
                    className="author-name "
                    href="#"
                    style={{ color: "black" }}
                  >
                    Des P
                  </a>
                </div>
              </article>

             

              {/* Fifth mini card */}
              <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Dec 5, 2023
                </time>

                {/* <h3 className="mini-card-title">
                  Responsive Web Design Basics
                </h3> */}

                <div className="mini-card-description">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque debitis natus perferendis, expedita, ad totam et, ipsum maxime ducimus voluptate aut veritatis. Exercitationem aliquam atque dolorem consequuntur modi harum.                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/18"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Pattarawadee Palakul
                  </a>
                </div>
              </article>

              {/* Sixth mini card */}
              <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Feb 22, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced Selectors in CSS</h3> */}

                <div className="mini-card-description">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem temporibus, soluta sunt dolor veniam sint laudantium a distinctio laborum quas sed velit numquam modi aperiam, sequi fugiat totam fuga beatae.                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Sermsook Patmastana
                  </a>
                </div>
              </article> <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Feb 22, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced Selectors in CSS</h3> */}

                <div className="mini-card-description">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore commodi itaque iusto harum consectetur quam recusandae sed excepturi nihil dicta minus at, delectus saepe reprehenderit architecto doloremque mollitia in. Ad.                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Sermsook Patmastana
                  </a>
                </div>
              </article> <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Feb 22, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced Selectors in CSS</h3> */}

                <div className="mini-card-description">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos ducimus unde cum fugit perferendis vero sunt doloremque eveniet, repellat ea atque, impedit beatae fuga consequatur quod sed praesentium iure?                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Sermsook Patmastana
                  </a>
                </div>
              </article>
            </div>{" "}
            {/* End of mini-card grid */}
          </div>{" "}
          {/* End of post-slider */}
        </section>{" "}
        {/* End of post-sliders section */}
      </div>{" "}
      {/* End of page-wrap */}
    </>
  );
};

export default Promotions;
