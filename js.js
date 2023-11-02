const container = document.getElementById("container");
const adet = 2520;
const renkler = [
  "#FF5733",
  "#3498DB",
  "#F1C40F",
  "#27AE60",
  "#8E44AD",
  "#E74C3C",
  "#F39C12",
  "#2E4053",
  "#D35400",
  "#1ABC9C ",
];

for (i = 0; i < adet; i++) {
  const kareler = document.createElement("div");
  kareler.classList = "kare";
  container.appendChild(kareler);

  kareler.addEventListener("mousemove", () => {
    let rastgele = Math.floor(Math.random() * renkler.length);
    kareler.style.backgroundColor = renkler[rastgele];
  });
  
let kaydirmaBaslangicX = null;

container.addEventListener("touchstart", (event) => {
  kaydirmaBaslangicX = event.touches[0].clientX;
});

container.addEventListener("touchmove", (event) => {
  if (!kaydirmaBaslangicX) {
    return;
  }
  
  const kaydirmaBitisX = event.touches[0].clientX;
  const kaydirmaMesafesi = kaydirmaBitisX - kaydirmaBaslangicX;

  if (kaydirmaMesafesi > 0) {
    // Sağa kaydırma
    let rastgele = Math.floor(Math.random() * renkler.length);
    container.style.backgroundColor = renkler[rastgele];
  } else if (kaydirmaMesafesi < 0) {
    // Sola kaydırma
    let rastgele = Math.floor(Math.random() * renkler.length);
    container.style.backgroundColor = renkler[rastgele];
  }

  kaydirmaBaslangicX = null;
});

container.addEventListener("touchend", () => {
  kaydirmaBaslangicX = null;
});
}
