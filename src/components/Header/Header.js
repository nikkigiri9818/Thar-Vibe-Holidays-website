import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Container, Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { icons, navItems, social, logo, logo2 } = headerData;

const Header = ({ pageTitle }) => {
   const scrollTop = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header
      className={`main-header${
        pageTitle === "Home Two" ? " main-header-two" : ""
      } clearfix`}
    >
      <div className="main-header__top">
        <Container>
          <div className="main-header__top-inner clearfix">



            <div className="main-header__top-left">
              <ul className="list-unstyled main-header__top-address">
                {icons.map(({ id, icon, content, subHref }) => (
                  <li key={id}>
                    <div className="icon">
                      <span className={icon} ></span>
                    </div>
                    <div className="text">
                      <a href={`${subHref}:${content}`}>{content}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>




            <div className="main-header__top-right">
              <div className="main-header__top-right-inner">
                <div className="main-header__top-right-social">
                  {social.map(({ icon, link }, index) => (
                    <a href={link} key={index}>
                      <i className={`fab ${icon}`}></i>
                    </a>
                  ))}
                </div>
                <div className="main-header__top-right-btn-box">
                  <a href="#" className="thm-btn main-header__top-right-btn">
                    Become a local guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>






      <nav
        className={
          scrollTop
            ? `stricky-header stricked-menu main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } stricky-fixed slideInDown animated clearfix`
            : `main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } slideIn animated clearfix`
        }
      >
        <div
          className={
            scrollTop
              ? "sticky-header__content main-menu-wrapper clearfix"
              : "main-menu-wrapper clearfix"
          }
        >
          <Container className="clearfix">
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left clearfix">
                <div className="main-menu-wrapper__logo" style={{ "margin-right": "90px" }}>
                  <Link href="/">
                    <a>
                      <Image
                        src={pageTitle === "Home Two" ? logo2.src : logo.src}
                        width={180}
                        height={60}
                        style={{ objectFit: "contain" }}
                        alt="Thar Vibe Holiday"
                      />
                    </a>
                  </Link>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <span
                    onClick={() => toggleMenu()}
                    className="mobile-nav__toggler"
                  >
                    <i className="fa fa-bars"></i>
                  </span>
                  <ul className="main-menu__list">
                    {navItems.map((navItem) => (
                      <NavItem key={navItem.id} navItem={navItem} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="main-menu-wrapper__right" style={{ marginRight: "20px" }}>
                <span
                  onClick={toggleSearch}
                  style={{ cursor: "pointer" }}
                  className="main-menu__search search-toggler icon-magnifying-glass"
                ></span>
                {/* <a href="#" className="main-menu__user icon-avatar"></a> */}



<a
  href="tel:+91 7413986979"

  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#e8604c",
    color: "#fff",
    flexShrink: 0,
    transition: "all 0.35s ease",
    boxShadow: "0 4px 12px rgba(123, 63, 29, 0.3)",
    marginLeft: "20px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#B5651D";
    e.currentTarget.style.transform = "scale(1.1) rotate(10deg)";
    e.currentTarget.style.boxShadow = "0 6px 18px rgba(123, 63, 29, 0.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#e8604c";
    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(123, 63, 29, 0.3)";
  }}
>
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
</a>




        
              </div>


              
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Header;
