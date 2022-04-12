import React from "react";
import styled from "styled-components";
import { colors } from "../config/genericStyles";

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
  justify-content: ${({ justifycontent }) => justifycontent};
  align-items: ${({ alignitems }) => alignitems};
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const FContainer = ({
  children,
  style,
  flexdirection,
  textalign,
  justifycontent,
  alignitems,
}) => {
  return (
    <Container
      style={style}
      flexdirection={flexdirection}
      textalign={textalign}
      justifycontent={justifycontent}
      alignitems={alignitems}
    >
      {children}
    </Container>
  );
};

// ContainerFluid component
const ContainerFluid = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const FContainerFluid = ({ children, style }) => {
  return <ContainerFluid style={style}>{children}</ContainerFluid>;
};

// TYPOGRAPHY
// H1 & H2
const H1Title = styled.h1`
  font-size: ${({ fontsize }) => fontsize};
  line-height: ${({ lineheight }) => lineheight};
  color: ${({ color }) => color};
  font-weight: ${({ fontweight }) => fontweight};
  @media (max-width: 991px) {
    font-size: ${({ fontsizeMob }) => fontsizeMob};
    line-height: ${({ lineheightMob }) => lineheightMob};
  }
`;
export const Fh1Title = ({
  children,
  color = colors.black,
  fontsize = "50px",
  lineheight = "55px",
  fontsizeMob = "25px",
  lineheightMob = "28px",
  fontweight = "600",
  style,
  className,
}) => {
  return (
    <H1Title
      color={color}
      fontsize={fontsize}
      fontsizeMob={fontsizeMob}
      lineheight={lineheight}
      lineheightMob={lineheightMob}
      fontweight={fontweight}
      style={style}
      className={className}
    >
      {children}
    </H1Title>
  );
};

const H2Title = styled.h2`
  font-size: ${({ fontsize }) => fontsize};
  line-height: ${({ lineheight }) => lineheight};
  color: ${({ color }) => color};
  font-weight: ${({ fontweight }) => fontweight};
  text-align: ${({ textalign }) => textalign};
  width: ${({ width }) => width};
  @media (max-width: 991px) {
    font-size: ${({ fontsizeMob }) => fontsizeMob};
    line-height: ${({ lineheightMob }) => lineheightMob};
    text-align: ${({ textalignmob }) => textalignmob};
  }
`;

export const Fh2Title = ({
  children,
  color = colors.black,
  fontsize = "45px",
  fontsizeMob = "22px",
  lineheightMob = "24px",
  lineheight = "54px",
  fontweight = "400",
  textalign = "left",
  textalignmob = "center",
  width,
  style,
  className,
}) => {
  return (
    <H2Title
      color={color}
      fontsize={fontsize}
      fontsizeMob={fontsizeMob}
      lineheightMob={lineheightMob}
      lineheight={lineheight}
      style={style}
      fontweight={fontweight}
      className={className}
      textalign={textalign}
      textalignmob={textalignmob}
      width={width}
    >
      {children}
    </H2Title>
  );
};
// Paragraph component
const Paragraph = styled.div`
  text-align: ${({ textalign }) => textalign};
  width: 100%;
  color: ${({ color }) => color};
  font-weight: 400;
  line-height: 25px;
`;
export const FParagraph = ({ children, style, textalign, color }) => {
  return (
    <Paragraph style={style} textalign={textalign} color={color}>
      {children}
    </Paragraph>
  );
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
  justify-content: ${({ justifycontent }) => justifycontent};
  @media (min-width: 992px) {
    flex: 1;
  }
`;
export const FrightSide = ({ children, style, justifycontent }) => {
  return (
    <RightSideSection style={style} justifycontent={justifycontent}>
      {children}
    </RightSideSection>
  );
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
