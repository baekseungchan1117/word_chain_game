import React, { useState, useEffect } from "react";

const TextBox = () => {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);

  const keywords = ["한글", "글자", "무지개"];
  const [keyword, setKeyword] = useState(keywords[0]);

  useEffect(() => {
    const randomKeyword = Math.floor(Math.random() * keywords.length);
    setKeyword(keywords[randomKeyword]);
  }, []);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && text.length >=2 ) {
        const lastChar = keyword[keyword.length -1];
        const firstChar = text[0]

        if (lastChar !== firstChar) {
            alert('다시 확인해주세요.')
            return;
          }
      fetch(`http://localhost:8000/search?q=${encodeURIComponent(text)}`)
        .then((res) => res.json()) 
        .then((data) => {
          console.log(data);
          const total = parseInt(data.userWordData.total, 10); 

          if (total > 0) {
            const newScore = score + 10;
            setScore(newScore);
            
            // 아래의 코드를 수정하여 URL2에서 가져온 데이터를 활용하도록 수정
            if (data.computerWordData && data.computerWordData.item) {
              // URL2에서 가져온 데이터를 키워드로 설정
              setKeyword(data.computerWordData.item[0].word);
            } else {
              setKeyword(text);
            }
            setText(''); 
          } else {
            console.log("Invalid word");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } 
  };

  return (
    <>
      <div className="keyWord">{keyword}</div>
      <div className="score">Score: {score}</div>
      <input
        type="text"
        autoComplete="off"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={text}
      />
    </>
  );
};

export default TextBox;
