"use strict";
{
  function render(quiz) {
    const main = document.querySelector("main");

    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = quiz[0];

    const ul = document.createElement("ul");
    const li0 = document.createElement("li");
    li0.textContent = quiz[1];
    li0.addEventListener("click", () => {
      if (quiz[4] === 0) {
        li0.classList.add("correct");
      } else {
        li0.classList.add("wrong");
      }
    });
    const li1 = document.createElement("li");
    li1.textContent = quiz[2];
    li1.addEventListener("click", () => {
      if (quiz[4] === 1) {
        li1.classList.add("correct");
      } else {
        li1.classList.add("wrong");
      }
    });
    const li2 = document.createElement("li");
    li2.textContent = quiz[3];
    li2.addEventListener("click", () => {
      if (quiz[4] === 2) {
        li2.classList.add("correct");
      } else {
        li2.classList.add("wrong");
      }
    });

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);

    section.appendChild(h2);
    section.appendChild(ul);

    main.appendChild(section);
  }
  //問題文、選択肢、選択肢、選択肢、正解（０、１、２）
  const quizzes = [
    [
      "進撃の巨人で石を投げてくる巨人は次のうちどれ？",
      "女型の巨人",
      "戦鎚の巨人",
      "獣の巨人",
      2,
    ],
    ["エレンが入団した兵団は？", "駐屯兵団", "調査兵団", "憲兵団", 1],
    [
      "特殊な能力を持ち、知能が使える特別な巨人は何体いる？",
      "9体",
      "13体",
      "5体",
      0,
    ],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });
}
