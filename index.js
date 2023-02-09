const warna = document.querySelector(".warna");

// Hijau

document.querySelector("#green").onclick = () => {
  warna.classList.toggle("hijau");
};

const green = document.querySelector("#green");

document.addEventListener("click", function (e) {
  if (!green.contains(e.target)) {
    warna.classList.remove("hijau");
  }
});

// Biru

document.querySelector("#blue").onclick = () => {
  warna.classList.toggle("biru");
};

const blue = document.querySelector("#blue");

document.addEventListener("click", function (e) {
  if (!blue.contains(e.target)) {
    warna.classList.remove("biru");
  }
});

// Hijau

document.querySelector("#yellow").onclick = () => {
  warna.classList.toggle("kuning");
};

const white = document.querySelector("#yellow");

document.addEventListener("click", function (e) {
  if (!white.contains(e.target)) {
    warna.classList.remove("kuning");
  }
});
