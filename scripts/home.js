
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

