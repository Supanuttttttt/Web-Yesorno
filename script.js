const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const question2 = document.querySelector(".question2");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "กดแล้วต้องไปนะครับ 55555";
    question2.innerHTML = "ขอบคุณนะครับ 🫶🏻";
    gif.src = "https://media1.tenor.com/m/oCBoAcpE9xAAAAAd/cool-fun.gif";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
