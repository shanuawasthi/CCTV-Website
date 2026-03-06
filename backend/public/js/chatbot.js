



// ------------------ Toggle Chat Window ------------------
let greeted = false;

function toggleChat() {
  const chatWindow = document.getElementById("chat-window");

  if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
    chatWindow.style.display = "flex";
    document.getElementById("chat-input").focus();

    // Auto Greeting (only first time)
    if (!greeted) {
      appendMessage(
        "<b>Bot:</b> Hello 👋 Welcome to our CCTV services! How can I help you today?",
        "bot"
      );
      greeted = true;
    }

  } else {
    chatWindow.style.display = "none";
  }
}

// ------------------ DOM Elements ------------------
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatMessages = document.getElementById("chat-messages");

// ------------------ Predefined Q&A ------------------
let qa = {
  "services": "We offer CCTV installation, maintenance, and surveillance solutions.",
  "contact": "You can reach us via our Contact page or WhatsApp.",
  "warranty": "Yes, we provide a 1-year warranty on all products.",
  "cameras": "We offer dome cameras, bullet cameras, PTZ cameras, and wireless cameras.",
  "install": "Yes, we provide professional installation services for homes and businesses.",
  "working hours": "Our office is open Monday to Saturday, 9 AM to 6 PM."
};

// ------------------ Load Q&A from Server ------------------
async function loadQA() {
  try {
    const res = await fetch("http://localhost:5000/api/chatbot");
    const serverQA = await res.json();
   
    // Convert server keys to lowercase
let formattedQA = {};

for (let key in serverQA) {
  formattedQA[key.toLowerCase().trim()] = serverQA[key];
}

// Merge with predefined
qa = { ...qa, ...formattedQA };

console.log("QA DATA:", qa);
    console.log("QA DATA:", qa); 
  } catch (err) {
    console.error("Failed to load chatbot Q&A from server", err);
  }
}

// ------------------ Append Message ------------------
function appendMessage(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}




function getBestMatch(userInput) {
  userInput = userInput.toLowerCase().trim();

  for (let key in qa) {
      if (userInput === key.toLowerCase().trim()) {
          return qa[key];
      }
  }

  for (let key in qa) {
      if (userInput.includes(key.toLowerCase().trim())) {
          return qa[key];
      }
  }

  return null;
}
// ------------------ Send Message ------------------
function sendMessage() {
  // const userQ = chatInput.value.trim();
  const userQ = chatInput.value.trim().toLowerCase();
  if (!userQ) return;

  appendMessage(`<b>You:</b> ${userQ}`, "user");

  const match = getBestMatch(userQ);

  const answer =
    match ||
    `We are unable to answer your question at the moment. Please <a href="contact.html#whatsapp">contact our team via WhatsApp</a> for further assistance.`;

  appendMessage(`<b>Bot:</b> ${answer}`, "bot");

  chatInput.value = "";
}

// ------------------ Event Listeners ------------------
chatSend.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

// ------------------ Initialize ------------------
document.addEventListener("DOMContentLoaded", loadQA);