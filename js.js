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

  const mc = new Hammer(container);

mc.on("swiperight", () => {
  let rastgele = Math.floor(Math.random() * renkler.length);
  container.style.backgroundColor = renkler[rastgele];
});

mc.on("swipeleft", () => {
  let rastgele = Math.floor(Math.random() * renkler.length);
  container.style.backgroundColor = renkler[rastgele];
});
  // kareler.addEventListener("touchstart", (event) => {
  //   let rastgele = Math.floor(Math.random() * renkler.length);
  //   kareler.style.backgroundColor = renkler[rastgele];
  //   event.preventDefault(); // Dokunma olayının varsayılan davranışını önler
  // });
}
