const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const notes = params.get("notes");
const price = params.get("price");

document.getElementById("resName").textContent = name || "-";
document.getElementById("resNotes").textContent = notes || "-";
document.getElementById("resPrice").textContent = price
  ? `Rp ${Number(price).toLocaleString("id-ID")}`
  : "-";

const qrisSection = document.getElementById("qrisSection");
const confirmBtn = document.getElementById("confirmPayment");
let isQrisShown = false;

confirmBtn.addEventListener("click", function () {
  if (!isQrisShown) {
    qrisSection.style.display = "block";
    confirmBtn.textContent = "Back to Home";
    alert("Reservation has been confirmed, please proceed with payment.");
    isQrisShown = true;
  } else {
    alert("Payment Successful");
    window.location.href = "index.html";
  }
});
