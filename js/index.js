// capturo a todas las clases al mimo tiempo
const question = document.getElementsByClassName("question");
const arrow = document.getElementsByClassName("arrow");
// capturo a los id de otra forma, individual para probar
const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const paragraph3 = document.getElementById("paragraph3");
const paragraph4 = document.getElementById("paragraph4");
const paragraph5 = document.getElementById("paragraph5");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", questionNum);
}

function questionNum(e) {
  console.log(event.target.id);
  question[0].style.fontWeight = "400";
  question[1].style.fontWeight = "400";
  question[2].style.fontWeight = "400";
  question[3].style.fontWeight = "400";
  question[4].style.fontWeight = "400";
  arrow[0].style.rotate = "0deg";
  arrow[1].style.rotate = "0deg";
  arrow[2].style.rotate = "0deg";
  arrow[3].style.rotate = "0deg";
  arrow[4].style.rotate = "0deg";
  paragraph1.style.display = "none";
  paragraph2.style.display = "none";
  paragraph3.style.display = "none";
  paragraph4.style.display = "none";
  paragraph5.style.display = "none";
  switch (event.target.id) {
    case "question1":
      paragraph1.style.display = "block";
      question[0].style.fontWeight = "bold";
      arrow[0].style.rotate = "180deg";

      break;
    case "question2":
      paragraph2.style.display = "block";
      question[1].style.fontWeight = "bold";
      arrow[1].style.rotate = "180deg";

      break;
    case "question3":
      paragraph3.style.display = "block";
      question[2].style.fontWeight = "bold";
      arrow[2].style.rotate = "180deg";

      break;
    case "question4":
      paragraph4.style.display = "block";
      question[3].style.fontWeight = "bold";
      arrow[3].style.rotate = "180deg";

      break;
    case "question5":
      paragraph5.style.display = "block";
      question[4].style.fontWeight = "bold";
      arrow[4].style.rotate = "180deg";

      break;
    default:
      return;
  }
}
