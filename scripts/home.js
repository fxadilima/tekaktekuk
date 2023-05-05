
showHelp = (topik) => {
    if (topik === "logo") {
        alert("Seharusnya menu ini diberi gambar yang menjadi logo Tekak Tekuk, bukan teks.");
    }
    else {
        const txt = "Tidak ada help untuk topik \'" + topik + "\' untuk saat ini.";
        alert(txt);
    }
}

