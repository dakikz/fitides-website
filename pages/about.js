import Head from "next/head";
import DefaultLayout from "../components/DefaultLayout";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import { FContainer, FContainerFluid, FSection } from "../elements/elements";
import { colors } from "../config/genericStyles";
import {
  AboutHero,
  ContractPen,
  FitidesSign,
  HandsBaking,
  Handshake,
  PappousBaking,
} from "../config/images";
import LeftTextRightImage from "../components/LeftTextRightImage";
import RightTextLeftImage from "../components/RightTextLeftImage";

export default function About() {
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
            bgImage={AboutHero}
            bgPosition="center"
            bgSize="contain"
            sectionMinHeight="600px"
            sectionMinHeightMob="300px"
          >
            <FContainer></FContainer>
          </FSection>

          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <RightTextLeftImage
              titleContent={t("common:aboutPage.story")}
              paragraphContent1={t("common:aboutPage.storyP1")}
              paragraphContent2={t("common:aboutPage.storyP2")}
              imageBg={PappousBaking}
            />
          </FContainerFluid>

          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <LeftTextRightImage
              titleContent={t("common:aboutPage.profile")}
              paragraphContent1={t("common:aboutPage.profileP1")}
              paragraphContent2={t("common:aboutPage.profileP2")}
              imageBg={FitidesSign}
            />
          </FContainerFluid>

          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <RightTextLeftImage
              titleContent={t("common:aboutPage.team")}
              paragraphContent1={t("common:aboutPage.teamP1")}
              imageBg={PappousBaking}
            />
          </FContainerFluid>

          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <LeftTextRightImage
              titleContent={t("common:aboutPage.clients")}
              paragraphContent1={t("common:aboutPage.clientsP1")}
              imageBg={Handshake}
            />
          </FContainerFluid>
          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <RightTextLeftImage
              titleContent={t("common:aboutPage.certifications")}
              paragraphContent1={t("common:aboutPage.certificationsP1")}
              paragraphContent2={t("common:aboutPage.certificationsP2")}
              imageBg={ContractPen}
            />
          </FContainerFluid>
        </main>
      </DefaultLayout>
    </div>
  );
}
