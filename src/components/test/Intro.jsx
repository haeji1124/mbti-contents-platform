import React from "react";
import IntroButtonGroup from "./IntroButtonGroup";

export default function Intro({ info, setMode }) {
  return (
    <>
      <h1>{info?.mainTitle}</h1>
      <h3>{info?.subTitle}</h3>
      <img
        onClick={() => setMode("quiz")}
        src={info?.mainImage}
        alt={info?.mainTitle}
        style={{ width: "100%", cursor: "pointer" }}
      />
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
