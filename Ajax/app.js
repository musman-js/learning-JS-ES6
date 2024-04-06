let button = document.getElementById("button");

button.addEventListener("click", () => {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
        if (xml.readyState == 4 && xml.status == 200) {
            document.getElementById("text").innerHTML = xml.responseText;
        }
        else {
            document.getElementById("text").innerHTML ="File not Found";
        }
}

    xml.open('GET', "text.txt", true);
xml.send();
});
