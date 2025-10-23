document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();

if(!name || !email || !password){
    alert("Please fill in all the required fields!");
    return;
}

try{
    const response = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({name,email,password}),
    });

    const data = await response.json();

   if (response.ok) {
      alert("✅ " + data.message);
      // 🔹 Redirect ke halaman login
      window.location.href = "login.html";
    } else {
      alert("❌ " + data.message);
    }
} catch (error){
    console.error("error during registration:", error);
    alert("Server error. Please try again later.");
}
});
