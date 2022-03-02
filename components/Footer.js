import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { colors } from "../config/genericStyles";
import { LogoBrown } from "../config/images";
import { FContainer, FImageOuter } from "../elements/elements";

const FooterOuter = styled.div`
  background-color: ${colors.gold};
  padding-top: 50px;
  padding-bottom: 50px;
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
    </FooterOuter>
  );
};

export default Footer;
