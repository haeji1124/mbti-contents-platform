import React from "react";
import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import CategoryButtons from "../components/main/CategoryButtons";
import ThumnailList from "../components/main/ThumnailList";
import MainMetatagRenderer from "../components/metatagRenderer/MainMetatagRenderer";

export default function Main() {
  return (
    <>
      <MainMetatagRenderer />
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
      <ThumnailList />
    </>
  );
}
