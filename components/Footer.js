import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { colors } from "../config/genericStyles";
import { LogoBrown } from "../config/images";
import { FContainer, FImageOuter } from "../elements/elements";

const FooterOuter = styled.div`
  background-color: ${colors.red};
  padding-top: 50px;
  padding-bottom: 50px;
  & p {
    color: ${colors.white};
    width: 100%;
    text-align: center;
    font-weight: 500;
  }
`;

const Footer = () => {
  return (
    <FooterOuter>
      <FContainer
        style={{
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <a>
            <FImageOuter
              imgWidth={"130px"}
              imgHeight={"60px"}
              whichCursor={"pointer"}
            >
              <Image
                priority
                objectFit="contain"
                src={LogoBrown}
                layout="fill"
                alt="Fitides Logo Gold"
              />
            </FImageOuter>
          </a>
        </Link>
      </FContainer>
      <FContainer justifycontent={"center"}>
        <p style={{ margin: "15px 0" }}>info@fitidesbakery.com.cy</p>
        <p>T. +357 25564267 / M. +357 99652333 / F. +357 25563931</p>
        <p style={{ textTransform: "uppercase" }}>
          3 Rodionos K. Riga CY-4101, INDUSTRIAL AREA AGIOS ATHANASIOS, LIMASSOL
        </p>
        <p>P.O.BOX 55231-3820 LIMASSOL</p>
        <div style={{ marginTop: "20px", display: "flex", gap: "5px" }}>
          <Link
            href={{
              pathname: "https://www.instagram.com/fitides__pittabread/",
            }}
          >
            <a target="_blank">
              <FaInstagram color={colors.white} size={"25px"} />
            </a>
          </Link>
          <Link
            href={{
              pathname: "https://www.facebook.com/fitides",
            }}
          >
            <a target="_blank">
              <FaFacebookF color={colors.white} size={"25px"} />
            </a>
          </Link>
        </div>
        <p style={{ marginTop: "25px" }}>
          @{new Date().getFullYear()}. All Rights Reserved
        </p>
      </FContainer>
    </FooterOuter>
  );
};

export default Footer;
