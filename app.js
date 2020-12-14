var baslik = document.querySelector('.baslik');
var hr = document.querySelector('.hr');
var btn = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var input = document.getElementById("input");
var control = document.querySelector('.control');
var goster = document.querySelector('.sayi');
var mesaj = document.querySelector('.msg');
var mesajSucess = document.querySelector('.msgSucess');
var tekrarOyna = document.querySelector('.btn3');
tekrarOyna.style.display = "none";
//tekrar başlangıç
function tekrarOynama(){
    location.reload();
}
tekrarOyna.addEventListener('click', tekrarOynama);
//alert(window.location.hash);
var randomSayi = Math.floor(Math.random() * 101);
goster.innerHTML = "Bilgisayarın Tuttuğu Sayı: " + randomSayi;
control.addEventListener('click', function(){
    if (input.value < randomSayi){
        mesaj.style.display = "block";
        mesaj.innerHTML = "Sayını Büyült";
        mesajSucess.innerHTML = "";
        input.value = "";
    }
    if (input.value > randomSayi){
        mesaj.style.display = "block";
        mesaj.innerHTML = "Sayını Küçült";
        mesajSucess.innerHTML = "";
        input.value = "";
    }
    if (input.value == randomSayi){
        mesajSucess.style.display = "block";
        mesajSucess.innerHTML = "Bravo Bildin";
        mesaj.innerHTML = "";
        input.style.color = "orange";
        input.style.display = "none";
        this.style.display = "none";
        tekrarOyna.style.display = "block";
        btn.style.display = "none";
    }
});

btn2.style.display = "none";
btn.addEventListener('click', () => {
    document.querySelector('.panel').style.display = "none";
    btn.style.display = "none";
    btn2.style.display = "block";
});
btn2.addEventListener('click', function(){
    document.querySelector('.panel').style.display = "block";
    this.style.display = "none";
    btn.style.display = "block";
});
if (btn.style.display == "none"){
    btn2.style.display = "block";
}
if (btn.style.display == "block"){
    btn2.style.display = "none";
}