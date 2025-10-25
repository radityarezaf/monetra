const scrollBtn = document.getElementById("scrollTopBtn");
scrollBtn.addEventListener("click", () => window.scrollTo(0, 0));

document.getElementById("bookBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const notes = document.getElementById("notes").value.trim();
  const date = document.getElementById("date").value.trim();

  if (!name || !notes || !date) {
    alert("Please fill all the required fields!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5002/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        notes,
        date,
      }),
    });

    if (response.ok) {
      window.location.href = `payment.html?name=${encodeURIComponent(
        name
      )}&notes=${encodeURIComponent(notes)}&date=${encodeURIComponent(date)}`;
    } else {
      alert("Failed to book your reservation");
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to server");
  }
});

document.addEventListener("DOMContentLoaded", ()=>{
  const authBtn = document.getElementById("authBtn");
  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("userEmail");

if(token &&authBtn){

  authBtn.outerHTML = `
    <div class="dropdown">
      <button class="btn btn-warning dropdown-toggle type="button" id="profileMenu" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-user text-dark"></i>
      </button>

    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileMenu">
      <li><a class="dropdown-item" href="#" id="logoutBtn">Logout</a></li>
    </ul>
    </div>  
  `;

  setTimeout(()=>{
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn){
      logoutBtn.addEventListener("click",()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        alert("You have succesfully logout from your account!!");
        window.location.reload();
      });
    }
  },100);
}
});