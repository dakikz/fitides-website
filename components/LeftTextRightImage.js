import Image from "next/image";
import React from "react";
import { colors } from "../config/genericStyles";
import { HpTrucks } from "../config/images";
import {
  FContainer,
  Fh2Title,
  FImageOuter,
  FleftSide,
  FParagraph,
  FrightSide,
} from "../elements/elements";

const LeftTextRightImage = ({
  titleContent,
  paragraphContent1,
  paragraphContent2,
  imageBg,
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
          <FParagraph color={colors.brown}>{paragraphContent2}</FParagraph>
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
