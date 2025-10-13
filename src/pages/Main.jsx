import React from "react";
import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import CategoryButtons from "../components/main/CategoryButtons";
import ThumnailList from "../components/main/ThumnailList";

export default function Main() {
  return (
    <>
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
      <ThumnailList />
    </>
  );
}
