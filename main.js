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
    const li2 = document.createElement("li");
    li2.textContent = quiz[3];

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);

    section.appendChild(h2);
    section.appendChild(ul);

    main.appendChild(section);
  }
  //問題文、選択肢、選択肢、選択肢、正解（０、１、２）
  const quiz = ["1の正解は？", "選択肢 A", "選択肢 B", "選択肢 C", 0];

  render(quiz);
}
