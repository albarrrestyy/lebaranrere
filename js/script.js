function showSlideshow() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.slideshow-container').classList.remove('hidden');
    showSlides();
}

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0"; // Sembunyikan semua slide dengan efek halus
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.opacity = "1"; // Tampilkan slide yang aktif
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}

// Jalankan slideshow saat halaman dibuka
document.addEventListener("DOMContentLoaded", showSlides);
