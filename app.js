function randomColorGen(){
    let hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    document.querySelector(".color-display").textContent = color;
    document.body.style.background = color;
}