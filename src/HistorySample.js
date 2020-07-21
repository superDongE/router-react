import React, { useEffect } from "react";

function HistroySample({ history }) {
  const goBack = () => {
    history.goback();
  };

  const goHome = () => {
    history.push("/");
  };
  useEffect(() => {
    console.log(history);
    const unBlock = history.block("정말 떠나실건가요?");
    return () => {
      unBlock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈</button>
    </div>
  );
}

export default HistroySample;
