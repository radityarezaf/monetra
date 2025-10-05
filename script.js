const scrollBtn = document.getElementById("scrollTopBtn");
scrollBtn.addEventListener("click", () => window.scrollTo(0, 0));

document.getElementById("bookBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value.trim();
  const time = document.getElementById("time").value.trim();
  const people = document.getElementById("select1").value;

  if (!name || !email || !date || !time || !people || !phone) {
    alert("Please fill all required fields.");
    return;
  }

  const pricePerPerson = 100000;
  const total = pricePerPerson * people;

  const query = `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(
    email
  )}&date=${encodeURIComponent(
    date
  )}&people=${people}&phone=${encodeURIComponent(phone)}&total=${total}`;

  window.location.href = "payment.html" + query;
});
