function qazaSalah(){
    let yourage = document.getElementById('qazaSalah').value;
    if (yourage >12)
    {
        let qazaage = yourage - 12;
        let qazasalah = qazaage*120000 /40;
    document.getElementById('heading').innerText=qazasalah;
    } else
    {
    document.getElementById('heading').innerText = "0";
    }
    }
