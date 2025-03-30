function showSlideshow() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.slideshow-container').classList.remove('hidden');
    showSlides();
}

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Sembunyikan semua slide
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Kembali ke slide pertama jika sudah habis
    slides[slideIndex - 1].style.display = "block"; // Tampilkan slide yang aktif
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}
