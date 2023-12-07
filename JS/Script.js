function luasSegitiga() {
    let alas = document.getElementById("input-alas").value;
    let tinggi = document.getElementById("input-tinggi").value;
    let hasilLuas =  parseInt(alas) * parseInt(tinggi) * 0.5
    const keteranganLuas = "Luas Segitiga di atas adalah "

    document.getElementById("hasilLuas").innerHTML = keteranganLuas + hasilLuas ;
    }

function resetLuas() {
    document.getElementById("input-tinggi").value = "";
    document.getElementById("input-alas").value = "";
    document.getElementById("hasilLuas").innerHTML = ""
}

function kelilingsegitiga() {
    let sisi1 = document.getElementById("input-sisi1").value;
    let sisi2 = document.getElementById("input-sisi2").value;
    let sisi3 = document.getElementById("input-sisi3").value;
    const keteranganKeliling = "Keliling Segitiga di atas adalah "
    let hasilKeliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3)

    document.getElementById("hasilKeliling").innerHTML = keteranganKeliling + hasilKeliling ;
    
}

function resetKeliling() {
    document.getElementById("input-sisi1").value = "";
    document.getElementById("input-sisi2").value = "";
    document.getElementById("input-sisi3").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}
