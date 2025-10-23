// Tombol scroll ke atas
const scrollBtn = document.getElementById("scrollTopBtn");
scrollBtn.addEventListener("click", () => window.scrollTo(0, 0));

document.getElementById("bookBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const notes = document.getElementById("notes").value.trim();
  const price = document.getElementById("select1").value; // ambil value harga

  if (!name || !notes || !price) {
    alert("Please fill all required fields.");
    return;
  }

  // kirim data ke payment.html
  const query = `?name=${encodeURIComponent(name)}&notes=${encodeURIComponent(notes)}&price=${encodeURIComponent(price)}`;
  window.location.href = "payment.html" + query;
});

