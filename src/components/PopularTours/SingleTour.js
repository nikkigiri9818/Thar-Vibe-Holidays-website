// import Link from "next/link";
// import React from "react";
// import { Image } from "react-bootstrap";

// const SingleTour = ({ tour = {}, userSelect = false }) => {
//   const { image, title, meta, rate, superb } = tour;

//   return (
//     <div>
//       <div
//         style={{ userSelect: userSelect ? "unset" : "none" }}
//         className="popular-tours__single"
//       >
//         <div className="popular-tours__img">
//           <Image
//             src={image.src}
//             alt=""
//           />
//           <div className="popular-tours__icon">
//             <Link href="/tour-details">
//               <a>
//                 <i className="fa fa-heart"></i>
//               </a>
//             </Link>
//           </div>
//         </div>
//         <div className="popular-tours__content">
//           <div className="popular-tours__stars">
//             <i className="fa fa-star"></i> {superb} Superb
//           </div>
//           <h3 className="popular-tours__title">
//             <Link href="/tour-details">{title}</Link>
//           </h3>
//           <p className="popular-tours__rate">
//             <span>${rate}</span> / Per Person
//           </p>
//           <ul className="popular-tours__meta list-unstyled">
//             {meta.map((item, index) => (
//               <li key={index}>
//                 <Link href="/tour-details">{item}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleTour;






import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, superb } = tour;

  return (
    <>
      <div
        className="popular-tours__single"
        style={{
          userSelect: userSelect ? "unset" : "none",
        }}
      >
        {/* Image */}
        <div className="popular-tours__img">
          <Image
            src={image?.src}
            alt={title || "Tour"}
            className="tour-card-image"
          />

          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {superb} Superb
          </div>

          <h3 className="popular-tours__title">
            <Link href="/tour-details">{title}</Link>
          </h3>

          <p className="popular-tours__rate">
            <span>${rate}</span> / Per Person
          </p>

          <ul className="popular-tours__meta list-unstyled">
            {meta?.map((item, index) => (
              <li key={index}>
                <Link href="/tour-details">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* MAIN CARD */
        .popular-tours__single {
          width: 100%;
          height: 490px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e6e1dc;
          border-radius: 8px;
        }

        /* IMAGE */
        .popular-tours__img {
          width: 100%;
          height: 220px;
          min-height: 220px;
          position: relative;
          overflow: hidden;
        }

        .tour-card-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* HEART */
        .popular-tours__icon {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 2;
        }

        /* CONTENT */
        .popular-tours__content {
          height: 270px;
          min-height: 270px;
          padding: 32px 40px 25px;
          display: flex;
          flex-direction: column;
        }

        /* RATING */
        .popular-tours__stars {
          margin-bottom: 10px;
          font-size: 13px;
        }

        /* TITLE */
        .popular-tours__title {
          margin: 0 0 12px;
          min-height: 52px;
          line-height: 1.45;
        }

        .popular-tours__title a {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* PRICE */
        .popular-tours__rate {
          margin-bottom: 22px;
          min-height: 25px;
        }

        /* META */
        .popular-tours__meta {
          margin: auto 0 0;
          width: 100%;
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 8px;
          padding: 0 10px;
          background: #faf6f1;
          border-radius: 8px;
        }

        .popular-tours__meta li {
          flex: 1;
          text-align: center;
          white-space: nowrap;
        }

        .popular-tours__meta li a {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* TABLET */
        @media (max-width: 991px) {
          .popular-tours__single {
            height: 480px;
          }

          .popular-tours__img,
          .tour-card-image {
            height: 210px;
            min-height: 210px;
          }

          .popular-tours__content {
            height: 270px;
            min-height: 270px;
            padding: 28px 30px 22px;
          }
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .popular-tours__single {
            height: auto;
            min-height: 470px;
          }

          .popular-tours__img,
          .tour-card-image {
            height: 220px;
            min-height: 220px;
          }

          .popular-tours__content {
            height: 250px;
            min-height: 250px;
            padding: 25px;
          }
        }
      `}</style>
    </>
  );
};

export default SingleTour;