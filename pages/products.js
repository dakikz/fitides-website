import Head from "next/head";
import DefaultLayout from "../components/DefaultLayout";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import { FContainer, FContainerFluid, FSection } from "../elements/elements";
import { colors } from "../config/genericStyles";
import { AboutHero } from "../config/images";
import LeftTextRightImage from "../components/LeftTextRightImage";
import RightTextLeftImage from "../components/RightTextLeftImage";
import Link from "next/link";

const products = () => {
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
            <LeftTextRightImage
              titleContent={t("common:products.lebanese")}
              paragraphContent1={t("common:products.lebaneseP1")}
              imageBg={AboutHero}
              uppercasez
              hasLink={"/products/lebanese"}
            />
          </FContainerFluid>

          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <RightTextLeftImage
              titleContent={t("common:products.classic")}
              paragraphContent1={t("common:products.classicP1")}
              imageBg={AboutHero}
              uppercasez
              hasLink={"/products/classic"}
            />
          </FContainerFluid>

          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <LeftTextRightImage
              titleContent={t("common:products.wholeWheat")}
              paragraphContent1={t("common:products.wholeWheatP1")}
              imageBg={AboutHero}
              uppercasez
              hasLink={"/products/wholewheat"}
            />
          </FContainerFluid>

          <FContainerFluid
            style={{ minHeight: "550px", backgroundColor: "#f9f6f4" }}
          >
            <RightTextLeftImage
              titleContent={t("common:products.greek")}
              paragraphContent1={t("common:products.greekP1")}
              imageBg={AboutHero}
              uppercasez
              hasLink={"/products/greek"}
            />
          </FContainerFluid>
        </main>
      </DefaultLayout>
    </div>
  );
};

export default products;
