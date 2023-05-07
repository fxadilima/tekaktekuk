
showHelp = (topik) => {
    if (topik === "logo") {
        alert("Seharusnya menu ini diberi gambar yang menjadi logo Tekak Tekuk, bukan teks.");
    }
    else {
        const txt = "Tidak ada help untuk topik \'" + topik + "\' untuk saat ini.";
        alert(txt);
    }
}

function w3_open() {
    document.getElementById("pageMenu").style.width = "100%";
    document.getElementById("pageMenu").style.display = "block";
}
  
function w3_close() {
    document.getElementById("pageMenu").style.display = "none";
}

showArticle = async (page) => {
    const txt = await fetch(page).then(x => x.text()).then((y) => {
        /*
        const html = marked.parse(y, {
            gfm: true
        });
        */
        return y;
    });
    document.getElementById("anyaman").innerHTML = txt;
    w3_close();
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("indicator");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
}

