import React from "react";
import IntroButtonGroup from "./IntroButtonGroup";
import { eventSenderGA } from "../../tools/tools";
import KakaoAdfit from "../KaKaoAdfit";
import CoupangDynamicBanner from "../CoupangDynamicBanner";
import AdsenseUnit from "../AdsenseUnit";

export default function Intro({ info, setMode }) {
  const onImageClick = () => {
    eventSenderGA("Paging", "Test Start Button", "Intro");
    setMode("quiz");
  };
  return (
    <>
      <h1>{info?.mainTitle}</h1>
      <h3>{info?.subTitle}</h3>
      <img
        onClick={onImageClick}
        src={info?.mainImage}
        alt={info?.mainTitle}
        style={{ width: "100%", cursor: "pointer" }}
      />
      <AdsenseUnit slot={"5731011854"} />
      <KakaoAdfit />
      <CoupangDynamicBanner unit={"introBanner"} />
      <p>
        <span style={{ fontWeight: "bold", color: "brown" }}>
          {info?.mainTitle}
        </span>
        로 여러분의 성향을 테스트해보세요!
      </p>
      <IntroButtonGroup />
    </>
  );
}
