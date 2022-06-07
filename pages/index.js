import Head from "next/head";
import DefaultLayout from "../components/DefaultLayout";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import { FContainer, FContainerFluid, FSection } from "../elements/elements";
import { colors } from "../config/genericStyles";
import {
  HpCocktailPitta,
  HpGreekPitta,
  HpHeroOpacity,
  HpLogoEngraved,
  HpNewspaper,
  HpTrucks,
} from "../config/images";
import LeftTextRightImage from "../components/LeftTextRightImage";
import RightTextLeftImage from "../components/RightTextLeftImage";

export default function Home() {
  let { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitides Bakery | Pitta Bread</title>
        <meta name="description" content="Fitides bakeries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <main className={styles.main}>
          <FSection
            bgColor={colors.black}
            bgImage={HpHeroOpacity}
            bgPosition="center"
            bgSize="contain"
            sectionMinHeight="600px"
          >
            <FContainer></FContainer>
          </FSection>
          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <LeftTextRightImage
              titleContent={t("common:homepage.marketNeeds")}
              paragraphContent1={t("common:homepage.marketNeedsP1")}
              paragraphContent2={t("common:homepage.marketNeedsP2")}
              imageBg={HpTrucks}
            />
          </FContainerFluid>
          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <RightTextLeftImage
              titleContent={t("common:homepage.solutionIs")}
              paragraphContent1={t("common:homepage.solutionIsP1")}
              paragraphContent2={t("common:homepage.solutionIsP2")}
              imageBg={HpGreekPitta}
            />
          </FContainerFluid>
          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <LeftTextRightImage
              titleContent={t("common:homepage.ourApproach")}
              paragraphContent1={t("common:homepage.ourApproachP1")}
              paragraphContent2={t("common:homepage.ourApproachP2")}
              imageBg={HpLogoEngraved}
              isButton
            />
          </FContainerFluid>
          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <RightTextLeftImage
              titleContent={t("common:homepage.solutionIs")}
              paragraphContent1={t("common:homepage.solutionIsP1")}
              paragraphContent2={t("common:homepage.solutionIsP2")}
              imageBg={HpCocktailPitta}
            />
          </FContainerFluid>
          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <LeftTextRightImage
              titleContent={t("common:homepage.whyDifferent")}
              paragraphContent1={t("common:homepage.whyDifferentP1")}
              paragraphContent2={t("common:homepage.whyDifferentP2")}
              imageBg={HpNewspaper}
            />
          </FContainerFluid>
        </main>
      </DefaultLayout>
    </div>
  );
}
