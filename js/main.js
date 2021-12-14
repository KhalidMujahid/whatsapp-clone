const container = document.querySelector(".container");
const homepage = document.querySelector(".homepage");

setTimeout(() => {
    homepage.style.display = "none";
},4000);

setTimeout(() => {
    container.style.display = "block";
},4000);