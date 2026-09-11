import aboutPage from "@/data/aboutPage";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { image, tagline, title, text1, text2, progress } = aboutPage;

const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          {/* LEFT IMAGE */}
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="aboutimage"
                />
              </div>
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  {tagline}
                </span>

                <h2 className="section-title__title">
                  {title}
                </h2>
              </div>

              <p className="about-page__text-1">
                {text1}
              </p>

              <p className="about-page__text-2">
                {text2}
              </p>

              {/* FEATURES */}
              <div className="about-features">
                {progress.map(
                  ({ id, icon: IconComponent, title }) => (
                    <div
                      key={id}
                      className="about-feature-item"
                    >
                      <span className="about-feature-icon">
                        <IconComponent />
                      </span>

                      <span className="about-feature-title">
                        {title}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        /* =========================================
           FEATURES - DESKTOP
        ========================================= */

        .about-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px 20px;
          margin-top: 25px;
          width: 100%;
        }

        .about-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .about-feature-icon {
          font-size: 20px;
          color: #e8604c;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 28px;
        }

        .about-feature-title {
          font-size: 14px;
          color: #2b2b2b;
          font-weight: 500;

          line-height: 1.6;

          min-width: 0;

          overflow-wrap: break-word;
          word-break: normal;
        }

        /* =========================================
           TABLET / MOBILE
           768px AND BELOW
        ========================================= */

        @media (max-width: 768px) {
          .about-features {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 25px 20px;
            width: 100%;
          }

          .about-feature-item {
            min-width: 0;
            width: 100%;
          }

          .about-feature-title {
            font-size: 14px;
            line-height: 1.5;
          }
        }

        /* =========================================
           MOBILE
           480px AND BELOW
        ========================================= */

        @media (max-width: 480px) {
          .about-features {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px 12px;
          }

          .about-feature-item {
            gap: 8px;
          }

          .about-feature-icon {
            width: 26px;
            font-size: 19px;
          }

          .about-feature-title {
            font-size: 13px;
            line-height: 1.5;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
           360px AND BELOW
        ========================================= */

        @media (max-width: 360px) {
          .about-features {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .about-feature-title {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPage;