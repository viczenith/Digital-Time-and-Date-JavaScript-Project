const elBtn = document.querySelector(".btn");

elBtn.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - elBtn.offsetLeft);
    const y = (event.pageY - elBtn.offsetTop);

    elBtn.style.setProperty("--xPos", x + "px");
    elBtn.style.setProperty("--yPos", y + "px");
});