import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import IntroRenderer from "../components/test/IntroRenderer";
import { TESTS } from "../data/TESTS";
import { useState, useEffect } from "react";
import MetatagRenderer from "../components/metatagRenderer/IntroMetatagRenderer";

export default function Test() {
  const { testParam } = useParams();
  const navigate = useNavigate();
  const [currentTest, setCurrentTest] = useState(null);

  useEffect(() => {
    const theTest = TESTS?.find((test) => test?.info?.mainUrl === testParam);
    if (!theTest) {
      alert("해당 테스트는 존재하지 않습니다!");
      return navigate("/");
    }
    setCurrentTest(theTest);
  }, [testParam, navigate]);

  // currentTest가 로드될 때까지 대기
  if (!currentTest) {
    return null; // 또는 <div>Loading...</div>
  }

  return (
    <>
      <MetatagRenderer currentTest={currentTest} />
      <IntroRenderer currentTest={currentTest} />
    </>
  );
}
