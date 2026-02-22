
fetch("http://localhost:5000/api/home")
.then(res => res.json())
.then(data => {
    if(data){
        document.getElementById("missionText").innerText = data.mission;
        document.getElementById("historyText").innerText = data.history;
        document.getElementById("aboutText").innerText = data.about;
        document.getElementById("certificationText").innerText = data.certification;
    }
});


// ==================== Load Certificates ====================
async function loadCertificates() {
    try {
      const res = await fetch("/api/home");
      const data = await res.json();
  
      if(data.certificationText){
        document.getElementById("certText").innerText = data.certificationText;
      }
      if(data.certificationImage){
        document.getElementById("certImage").src = data.certificationImage;
      }
    } catch(err) {
      console.error("Failed to load certificates", err);
      document.getElementById("certText").innerText = "No certificate available.";
      document.getElementById("certImage").src = "";
    }
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    loadCertificates();
  });

  fetch("/chatbot.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("chatbot-placeholder").innerHTML = html;
    const script = document.createElement("script");
    script.src = "/js/chatbot.js";
    document.body.appendChild(script);
  });


// Floating WhatsApp icon update
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const res = await fetch("/api/contact");
    const data = await res.json();

    if (data.whatsapp) {
      const floatingBtn = document.getElementById("floating-whatsapp");
      const whatsappNumber = data.whatsapp.replace(/\D/g, '');
      floatingBtn.href = `https://wa.me/${whatsappNumber}`;
    }
  } catch (err) {
    console.error("WhatsApp load error:", err);
  }
});