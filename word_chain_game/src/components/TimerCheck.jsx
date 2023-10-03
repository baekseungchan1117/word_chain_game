import React, {useState, useEffect} from "react";

const TimerCheck = () => {
    const [count, setCount] = useState(100)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count => count - 1);
        }, 1000)

        if(count === 0){
            clearInterval(id);
            alert("게임 종료")
        }

        return() => clearInterval(id);

    },[count])


  return (
    <>
      <div className="timeZone">{count}</div>
      <div className="point">
        <span>점수 : </span>
        <span className="point__num">10점</span>
      </div>
    </>
  );
};

export default TimerCheck;
