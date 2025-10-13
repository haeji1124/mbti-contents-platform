import React, { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";

export default function IntroRenderer({ currentTest }) {
  const [mbtiScore, setMbtiScore] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  const [mode, setMod] = useState("intro");
  if (mode === "intro") {
    return <Intro info={currentTest?.info} setMode={setMod} />;
  } else if (mode === "quiz") {
    return (
      <Quiz
        questions={currentTest?.questions}
        mbtiScore={mbtiScore}
        setMbtiScore={setMbtiScore}
        setMode={setMod}
      />
    );
  } else if (mode === "loading") {
    return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;
  } else {
    return <div>잘못된 페이지입니다!</div>;
  }
}
