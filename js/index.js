// capturo a todas las clases al mimo tiempo
const question = document.getElementsByClassName("question");
// capturo a los id de otra forma, individual para probar
const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const paragraph3 = document.getElementById("paragraph3");
const paragraph4 = document.getElementById("paragraph4");
const paragraph5 = document.getElementById("paragraph5");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", questionNum);
}

function questionNum(event) {
  console.log(event.target.id);
  //event.preventDefault();
  switch (event.target.id) {
    case "question1":
      paragraph1.style.display = "block";
      paragraph2.style.display = "none";
      paragraph3.style.display = "none";
      paragraph4.style.display = "none";
      paragraph5.style.display = "none";
      break;
    case "question2":
      paragraph1.style.display = "none";
      paragraph2.style.display = "block";
      paragraph3.style.display = "none";
      paragraph4.style.display = "none";
      paragraph5.style.display = "none";
      break;
    case "question3":
      paragraph1.style.display = "none";
      paragraph2.style.display = "none";
      paragraph3.style.display = "block";
      paragraph4.style.display = "none";
      paragraph5.style.display = "none";
      break;
    case "question4":
      paragraph1.style.display = "none";
      paragraph2.style.display = "none";
      paragraph3.style.display = "none";
      paragraph4.style.display = "block";
      paragraph5.style.display = "none";
      break;
    case "question5":
      paragraph1.style.display = "none";
      paragraph2.style.display = "none";
      paragraph3.style.display = "none";
      paragraph4.style.display = "none";
      paragraph5.style.display = "block";
      break;
  }
}
