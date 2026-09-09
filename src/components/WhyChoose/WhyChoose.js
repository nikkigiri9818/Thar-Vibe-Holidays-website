import whyChoose from "@/data/whyChoose";
import React, { Fragment } from "react";

const { bg, bg2, toggleText, tagline, title, description, lists } = whyChoose;

const WhyChoose = () => {
  return (
    <>
      <section className="why-choose">
        <div className="why-choose__container">

          {/* LEFT IMAGE */}
          <div className="why-choose__left">
            <div
              className="why-choose__left-bg"
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
             
              }}
            />

            <div className="why-choose__toggle">
              <p>
                {toggleText.split("\n").map((t, i) => (
                  <Fragment key={i}>
                    <span>{t}</span>
                    <br />
                  </Fragment>
                ))}
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="why-choose__right">

            <div
              className="why-choose__right-map"
              style={{
                backgroundImage: `url(${bg2.src})`,
              }}
            />

            <div className="why-choose__right-content">

              {/* TITLE */}
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  {tagline}
                </span>

                <h2 className="section-title__title">
                  {title}
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p className="why-choose__right-text">
                {description}
              </p>

              {/* BENEFITS - INSIDE RIGHT CONTAINER */}
              <div className="why-choose__list">

                {lists.map((list) => (
                  <div
                    className="why-choose__item"
                    key={list.id}
                  >

                    <div className="why-choose__item-icon">
                      {typeof list.icon === "string" ? (
                        <span className={list.icon}></span>
                      ) : (
                        <list.icon size={30} />
                      )}
                    </div>

                    <div className="why-choose__item-content">

                      <h4>{list.title}</h4>

                      <p>{list.description}</p>

                      {/* <a href="/about">
                        Read More
                      </a> */}

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* =================================
           MAIN
        ================================= */

        .why-choose {
          width: 100%;
          overflow: hidden;
        }

        .why-choose__container {
          width: 100%;
          display: flex;
          align-items: stretch;
        }

        /* =================================
           LEFT IMAGE
        ================================= */

        .why-choose__left {
          width: 50%;
          min-height: 650px;
          position: relative;
          overflow: hidden;
        }

        .why-choose__left-bg {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* BADGE */

        .why-choose__toggle {
          position: absolute;

          top: 40px;
          right: 60px;

          width: 115px;
          height: 115px;

          border-radius: 50%;

          background: #ef624d;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          z-index: 2;
        }

        .why-choose__toggle p {
          margin: 0;
          color: #fff;

          font-size: 14px;
          line-height: 1.3;
        }

        /* =================================
           RIGHT CONTAINER
        ================================= */

        .why-choose__right {
          width: 50%;
          min-height: 650px;

          position: relative;
          overflow: hidden;

          background: #303041;
          color: #fff;
        }

        /* MAP */

        .why-choose__right-map {
          position: absolute;

          right: 0;
          bottom: 0;

          width: 45%;
          height: 45%;

          background-size: contain;
          background-position: bottom right;
          background-repeat: no-repeat;

          opacity: 0.25;

          pointer-events: none;
        }

        /* CONTENT */

        .why-choose__right-content {
          position: relative;

          z-index: 2;

          height: 100%;

          padding: 40px 55px;
          box-sizing: border-box;
        }

        /* TITLE */

        .why-choose__right-content
          :global(.section-title__tagline) {
          color: #ef624d;
        }

        .why-choose__right-content
          :global(.section-title__title) {
          color: #fff;

          margin-bottom: 18px;
        }

        /* DESCRIPTION */

        .why-choose__right-text {
          max-width: 650px;

          margin: 0 0 35px;

          color: #aaa;

          font-size: 13px;
          line-height: 1.7;
        }

        /* =================================
           THREE ITEMS - ONE ROW
        ================================= */

        .why-choose__list {
          width: 100%;

          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 25px;

          align-items: stretch;
        }

        /* ITEM */

        .why-choose__item {
          min-width: 0;

          display: flex;
          flex-direction: column;

          align-items: flex-start;

          padding: 10px 5px;
        }

        /* ICON */

        .why-choose__item-icon {
          width: 42px;
          height: 42px;

          margin-bottom: 15px;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          color: #f28700;

          font-size: 28px;
        }

        /* CONTENT */

        .why-choose__item-content {
          width: 100%;
        }

        .why-choose__item-content h4 {
          margin: 0 0 12px;

          color: #fff;

          font-size: 15px;
          font-weight: 600;

          line-height: 1.3;
        }

        .why-choose__item-content p {
          margin: 0 0 18px;

          color: #aaa;

          font-size: 12px;
          line-height: 1.7;
        }

        /* READ MORE */

        .why-choose__item-content a {
          display: inline-block;

          padding: 7px 14px;

          border: 1px solid #ef624d;
          border-radius: 20px;

          color: #ef624d;

          font-size: 11px;
          text-decoration: none;

          transition: 0.3s;
        }

        .why-choose__item-content a:hover {
          background: #ef624d;
          color: #fff;
        }

        /* =================================
           TABLET
        ================================= */

        @media (max-width: 1100px) {

          .why-choose__right-content {
            padding: 35px 35px;
          }

          .why-choose__list {
            gap: 15px;
          }

          .why-choose__item-content p {
            font-size: 11px;
          }

        }

        /* =================================
           MOBILE
        ================================= */

        @media (max-width: 767px) {

          .why-choose__container {
            flex-direction: column;
          }

          .why-choose__left,
          .why-choose__right {
            width: 100%;
          }

          .why-choose__left {
            min-height: 400px;
          }

          .why-choose__right {
            min-height: auto;
          }

          .why-choose__right-content {
            height: auto;
            padding: 40px 25px;
          }

          /* Cards stack on mobile */

          .why-choose__list {
            grid-template-columns: 1fr;
            gap: 25px;
          }

        }
      `}</style>
    </>
  );
};

export default WhyChoose;