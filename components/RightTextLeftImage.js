import Image from "next/image";
import React from "react";
import { colors } from "../config/genericStyles";
import {
  FContainer,
  Fh2Title,
  FImageOuter,
  FleftSide,
  FParagraph,
  FrightSide,
} from "../elements/elements";

const RightTextLeftImage = ({
  titleContent,
  paragraphContent1,
  paragraphContent2,
  imageBg,
}) => {
  return (
    <>
      <FleftSide>
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
      </FleftSide>
      <FrightSide justifycontent="flex-start">
        <FContainer
          justifycontent="flex-start"
          style={{
            maxWidth: "570px",
            width: "100%",
            marginLeft: "0",
            paddingLeft: "100px",
          }}
        >
          <Fh2Title color={colors.brown}>{titleContent}</Fh2Title>
          <FParagraph color={colors.brown} style={{ margin: "20px 0" }}>
            {paragraphContent1}
          </FParagraph>
          <FParagraph color={colors.brown}>{paragraphContent2}</FParagraph>
        </FContainer>
      </FrightSide>
    </>
  );
};

export default RightTextLeftImage;
