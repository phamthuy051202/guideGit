max = 2;
min = 0;
document.getElementById("button").onclick=() => {
    var random = Math.round(Math.random() * (max - min) + min);
    let thuy;
    switch(random){
        case 0:
            thuy="Thục";
            break;
        case 1:
            thuy="Thủy";
            break;
        case 2:
            thuy="Trường";
            break;
        }
    document.getElementsById("ab").innerHTML = thuy;
}

