import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButton from "./CountButton";
import ButtonContainer from "./ButtonContainer";
import { useState, useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  // no reason to use state for this logic since we can derive it from the existing state info
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        // prevents it from going over the demo count with spacebar
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(count + 1);
      }
    };
    // add the spacebar functionality of adding
    window.addEventListener("keydown", handleKeydown);

    return () => {
      // remove the old eventlistener before new use
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
