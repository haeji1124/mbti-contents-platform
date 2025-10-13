import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./quiz.module.css";
import { Progress } from "antd";
import { arrayShuffler } from "../../tools/tools";

export default function Quiz({ questions, mbtiScore, setMbtiScore, setMode }) {
  const [questionNum, setQuestionNum] = useState(0);
  const onOptionClick = (type) => {
    mbtiScore[type] += 1;
    setMbtiScore({ ...mbtiScore });
    setQuestionNum((prev) => prev + 1);
    //     방법 1 (직접 처리, onClickOption에서 마지막 질문 처리)의 장점:

    // 더 직관적: 클릭 → 점수 업데이트 → 다음 질문 또는 로딩
    // 성능상 약간 유리: useEffect 실행 없음
    // 코드가 더 단순: useEffect 불필요

    // 방법 1의 단점:

    // 책임 분리 측면에서 아쉬움: 클릭 핸들러에서 너무 많은 일을 처리

    // 방법 2 (useEffect)의 장점:

    // 책임 분리: 클릭은 상태만 변경, 상태 변화에 따른 처리는 useEffect가 담당
    // 확장성: 나중에 questionNum 변화에 따른 다른 로직 추가가 쉬움
    // React 패턴: 상태 변화 → 부수 효과(side effect) 처리하는 일반적인 React 패턴
  };

  useEffect(() => {
    if (questionNum === questions.length) {
      setMode("loading");
    }
    console.log(questionNum);
  }, [questionNum, questions.length, setMode]);
  //   규칙명: react-hooks/exhaustive-deps
  // 이 규칙은 useEffect, useMemo, useCallback 등의 의존성 배열에 사용되는 모든 값들을 포함하도록 강제합니다.
  // 구체적인 요구사항:

  // 함수 내부에서 사용되는 모든 변수/함수는 의존성 배열에 포함해야 함
  // props에서 받은 함수들도 포함해야 함
  // state setter 함수들도 포함해야 함 (비록 실제로는 변경되지 않지만)
  return (
    <>
      <h3 className={styles.questionText}>
        {questions[questionNum]?.question}
      </h3>
      {questions[questionNum]?.answers &&
        arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
          <button
            className={styles.optionButton}
            onClick={() => onOptionClick(option.type)}
            key={option.content}
          >
            {option.content}
          </button>
        ))}

      <Progress
        percent={(questionNum / questions.length) * 100}
        showInfo={false}
      />
      <h5>
        {questionNum} / {questions.length}
      </h5>
    </>
  );
}
