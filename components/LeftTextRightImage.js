import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { colors } from "../config/genericStyles";
import {
  FButtonBrown,
  FContainer,
  Fh2Title,
  FImageOuter,
  FleftSide,
  FParagraph,
  FrightSide,
} from "../elements/elements";

const CTAsection = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const LeftTextRightImage = ({
  titleContent,
  paragraphContent1,
  paragraphContent2,
  paragraphContent3,
  imageBg,
  isButton,
}) => {
  return (
    <>
      <FleftSide>
        <FContainer
          justifycontent="flex-start"
          style={{
            maxWidth: "570px",
            width: "100%",
            marginRight: "0",
            paddingRight: "100px",
          }}
        >
          <Fh2Title color={colors.brown}>{titleContent}</Fh2Title>
          <FParagraph color={colors.brown} style={{ margin: "20px 0" }}>
            {paragraphContent1}
          </FParagraph>
          {paragraphContent2 && (
            <FParagraph color={colors.brown}>{paragraphContent2}</FParagraph>
          )}
          {paragraphContent3 && (
            <FParagraph color={colors.brown} style={{ margin: "20px 0" }}>
              {paragraphContent3}
            </FParagraph>
          )}
          {isButton && (
            <CTAsection>
              <FButtonBrown colorz={colors.brown} isButton={"Horeca"} />
              <FButtonBrown colorz={colors.gold} isButton={"Retail"} />
            </CTAsection>
          )}
        </FContainer>
      </FleftSide>
      <FrightSide>
        <FImageOuter
          imgWidth={"100%"}
          imgHeight={"100%"}
          imgHeightMob={"200px"}
          style={{
            maxWidth: "100%",
          }}
        >
          <Image
            priority
            objectFit="cover"
            src={imageBg}
            layout="fill"
            alt={imageBg}
          />
        </FImageOuter>
      </FrightSide>
    </>
  );
};

export default LeftTextRightImage;
