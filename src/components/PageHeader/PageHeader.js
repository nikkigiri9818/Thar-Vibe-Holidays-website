import bg from "@/images/backgrounds/raj3.jpg";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const PageHeader = ({ title = "", page = "", outerPage = "" }) => {
  return (
    <section className="page-header">
      <div className="page-header__top">
        <div
          className="page-header-bg"
          style={{ backgroundImage: ` url(${bg.src})` ,backgroundPosition:"center"}}
        ></div>
        <div className="page-header-bg-overly"></div>
        <Container>
          {/* <div className="page-header__top-inner">
            <a href="/"><strong>Home</strong> <span style={{color:"#e8604c"}}>>></span></a>
            
            <h2>{title || page}</h2>
          </div> */}

          <div className="page-header__top-inner">
  <Link href="/" passHref>
    <a>
      <strong>Home</strong>{" "}
      <span style={{ color: "#e8604c" }}>&gt;&gt;</span>
    </a>
  </Link>

  <h2>{title || page}</h2>
</div>
        </Container>
      </div>
     
    </section>
  );
};

export default PageHeader;
