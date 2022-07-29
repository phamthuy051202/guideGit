document.querySelector("#changeTitle").onclick = () => {
    const title = prompt("Nhập title mới");
    document.querySelector("#container > h1").innerHTML = title;
}