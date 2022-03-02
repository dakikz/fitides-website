import React from "react";
import styled from "styled-components";

// Section component
const Section = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  color: ${({ textcolor }) => textcolor};
  background-color: ${({ bgcolor }) => bgcolor};
  background-image: ${({ bgimage }) =>
    bgimage ? "url(" + bgimage + ")" : "none"};
  background-size: ${({ bgsize }) => bgsize};
  background-position: ${({ bgposition }) => bgposition};
  background-repeat: ${({ bgrepeat }) => bgrepeat};
  background: ${({ bg }) => bg};
  height: ${({ sectionheight }) =>
    sectionheight
      ? "calc(" + sectionheight + " - " + heights.navbarHeight + ")"
      : "unset"};
  min-height: ${({ sectionminheight }) => sectionminheight};
  border-radius: ${({ bradius }) => bradius};
  overflow: ${({ overflow }) => (overflow ? overflow : "unset")};
  @media (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 0 !important;
  }
`;
export const FSection = ({
  style,
  children,
  textColor,
  bgColor,
  bgImage,
  bgSize = "cover",
  bgPosition = "center",
  bgRepeat = "no-repeat",
  sectionHeight,
  sectionMinHeight,
  bRadius,
  overflow,
  bg = "",
  className,
}) => {
  return (
    <Section
      className={className}
      style={style}
      textcolor={textColor}
      bgcolor={bgColor}
      bgimage={bgImage}
      bgsize={bgSize}
      bgposition={bgPosition}
      bgrepeat={bgRepeat}
      sectionheight={sectionHeight}
      sectionminheight={sectionMinHeight}
      bradius={bRadius}
      overflow={overflow}
      bg={bg}
    >
      {children}
    </Section>
  );
};

// Container component
const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: ${({ flexdirection }) => flexdirection};
  text-align: ${({ textalign }) => textalign};
  flex-wrap: wrap;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const FContainer = ({ children, style, flexdirection, textalign }) => {
  return (
    <Container
      style={style}
      flexdirection={flexdirection}
      textalign={textalign}
    >
      {children}
    </Container>
  );
};

// ContainerFluid component
const ContainerFluid = styled.div`
  max-width: 100%;
  width: 100%;
`;
export const FContainerFluid = ({ children, style }) => {
  return <ContainerFluid style={style}>{children}</ContainerFluid>;
};

// Left and Right side container
const LeftSideSection = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  justify-content: center;
  @media (min-width: 992px) {
    flex: 1;
  }
  @media (max-width: 991px) {
    align-items: center;
    text-align: center;
  }
`;
export const FleftSide = ({ children, style }) => {
  return <LeftSideSection style={style}>{children}</LeftSideSection>;
};

const RightSideSection = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  @media (min-width: 992px) {
    flex: 1;
  }
`;
export const FrightSide = ({ children, style }) => {
  return <RightSideSection style={style}>{children}</RightSideSection>;
};

// Image outer container
const ImageOuter = styled.div`
  display: block;
  position: relative;
  width: ${({ imgwidth }) => imgwidth};
  height: ${({ imgheight }) => imgheight};
  cursor: ${({ whichcursor }) => whichcursor};
  @media (max-width: 991px) {
    height: ${({ imgHeightMob }) => imgHeightMob};
  }
`;
export const FImageOuter = ({
  children,
  imgWidth,
  imgHeight,
  imgHeightMob,
  whichCursor = "default",
  style,
  className,
}) => {
  return (
    <ImageOuter
      imgwidth={imgWidth}
      imgheight={imgHeight}
      imgHeightMob={imgHeightMob}
      whichcursor={whichCursor}
      style={style}
      className={className}
    >
      {children}
    </ImageOuter>
  );
};
