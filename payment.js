const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const email = params.get("email");
const date = params.get("date");
const time = params.get("time");
const people = params.get("people");
const phone = params.get("phone");
const total = params.get("total");

document.getElementById("resName").textContent = name || "-";
document.getElementById("resEmail").textContent = email || "-";
document.getElementById("resPhone").textContent = phone || "-";
document.getElementById("resDate").textContent = date || "-";
document.getElementById("resTime").textContent = time || "-";
document.getElementById("resPeople").textContent = people || "-";
document.getElementById("resTotal").textContent = `Rp ${Number(
  total
).toLocaleString("id-ID")}`;

const qrisSection = document.getElementById("qrisSection");
const confirmBtn = document.getElementById("confirmPayment");
let isQrisShown = false;

document
  .getElementById("confirmPayment")
  .addEventListener("click", function () {
    if (!isQrisShown) {
      qrisSection.style.display = "block";
      confirmBtn.textContent = "Back to Home";
      alert("Reservation has been confirmed, please proceed the payment");
      isQrisShown = true;
    } else {
      alert("Payment Sucessful");
      window.location.href = "index.html";
    }
  });
