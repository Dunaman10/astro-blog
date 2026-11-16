console.log("Halo");

const button = document.querySelectorAll(".tombol");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Yeayy! Anda Berhasil");
  });
});
