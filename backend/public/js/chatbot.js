// // ------------------ Toggle Chat Window ------------------
// function toggleChat() {
//   const chatWindow = document.getElementById("chat-window");
//   chatWindow.style.display = chatWindow.style.display === "none" ? "flex" : "none";

//   // Focus input when opening
//   if(chatWindow.style.display === "flex"){
//     document.getElementById("chat-input").focus();
//   }
// }

// // ------------------ DOM Elements ------------------
// const chatInput = document.getElementById("chat-input");
// const chatSend = document.getElementById("chat-send");
// const chatMessages = document.getElementById("chat-messages");

// // ------------------ Predefined Q&A ------------------
// // Tumhare CCTV website ke liye basic questions
// let qa = {
//   "what services do you offer?": "We offer CCTV installation, maintenance, and surveillance solutions.",
//   "how can i contact you?": "You can reach us via our Contact page or WhatsApp.",
//   "where are you located?": "Our office is located in Jabalpur, India.",
//   "do you provide warranty?": "Yes, we provide a 1-year warranty on all products.",
//   "what types of cameras do you sell?": "We offer dome cameras, bullet cameras, PTZ cameras, and wireless cameras.",
//   "can you install CCTV at my home?": "Yes, we provide professional installation services for homes and businesses.",
//   "what is your working hours?": "Our office is open Monday to Saturday, 9 AM to 6 PM."
// };

// // ------------------ Load Q&A from Server ------------------
// async function loadQA() {
//   try {
//     const res = await fetch("/api/chatbot");
//     const serverQA = await res.json(); // expects { question: answer, ... }
//     // Merge server Q&A with predefined Q&A, server Q&A overrides if duplicate
//     qa = { ...qa, ...serverQA };
//   } catch(err) {
//     console.error("Failed to load chatbot Q&A from server", err);
//     // fallback: use only predefined QA
//   }
// }

// // ------------------ Append Message ------------------
// function appendMessage(text, type) {
//   const div = document.createElement("div");
//   div.className = `message ${type}`;
//   div.innerHTML = text;
//   chatMessages.appendChild(div);
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// // ------------------ Send Message ------------------
// function sendMessage() {
//   const userQ = chatInput.value.trim();
//   if(!userQ) return;

//   // Show user message
//   appendMessage(`<b>You:</b> ${userQ}`, "user");

//   // Lookup predefined answer (case-insensitive)
//   // let answer = qa[userQ.toLowerCase()] || 
//   //   `We are unable to answer your question at the moment. Please <a href="#whatsapp" onclick="document.getElementById('whatsapp').scrollIntoView({behavior:'smooth'}); chatInput.value='';">contact our team via WhatsApp</a> for further assistance.`;
//   let answer = qa[userQ.toLowerCase()] || 
//   `We are unable to answer your question at the moment. Please <a href="contact.html#whatsapp">contact our team via WhatsApp</a> for further assistance.`;

//   // Show bot message
//   appendMessage(`<b>Bot:</b> ${answer}`, "bot");

//   // Clear input
//   chatInput.value = "";
// }

// // ------------------ Event Listeners ------------------
// // Send via Send button
// chatSend.addEventListener("click", sendMessage);

// // Send via Enter key
// chatInput.addEventListener("keypress", function(e){
//   if(e.key === "Enter") sendMessage();
// });

// // ------------------ Initialize ------------------
// document.addEventListener("DOMContentLoaded", loadQA);

// // ------------------ Toggle Chat Window ------------------
// function toggleChat() {
//   const chatWindow = document.getElementById("chat-window");
//   chatWindow.style.display = chatWindow.style.display === "none" ? "flex" : "none";
//   if(chatWindow.style.display === "flex") document.getElementById("chat-input").focus();
// }

// // ------------------ DOM Elements ------------------
// const chatInput = document.getElementById("chat-input");
// const chatSend = document.getElementById("chat-send");
// const chatMessages = document.getElementById("chat-messages");

// let qa = {}; // Admin-defined Q&A

// // ------------------ Load Q&A ------------------
// async function loadQA() {
//   try {
//     const res = await fetch("/api/chatbot");
//     qa = await res.json();
//   } catch(err) {
//     console.error("Failed to load chatbot Q&A", err);
//   }
// }

// // ------------------ Append Message ------------------
// function appendMessage(text, type) {
//   const div = document.createElement("div");
//   div.className = `message ${type}`;
//   div.innerHTML = text;
//   chatMessages.appendChild(div);
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// // ------------------ Send Message ------------------
// function sendMessage() {
//   const userQ = chatInput.value.trim();
//   if(!userQ) return;

//   appendMessage(`<b>You:</b> ${userQ}`, "user");

//   const answer = qa[userQ.toLowerCase()] || 
//     `We are unable to answer your question at the moment. Please <a href="contact.html#whatsapp">contact our team via WhatsApp</a> for assistance.`;

//   appendMessage(`<b>Bot:</b> ${answer}`, "bot");

//   chatInput.value = "";
// }

// // ------------------ Event Listeners ------------------
// chatSend.addEventListener("click", sendMessage);
// chatInput.addEventListener("keypress", e => { if(e.key==="Enter") sendMessage(); });

// // ------------------ Initialize ------------------
// document.addEventListener("DOMContentLoaded", loadQA);



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

// ------------------ Smart Matching Function ------------------
// function getBestMatch(userInput) {
//   userInput = userInput.toLowerCase();

//   // 1️⃣ Exact match
//   if (qa[userInput]) return qa[userInput];

//   // 2️⃣ Partial match
//   for (let key in qa) {
//     if (userInput.includes(key)) {
//       return qa[key];
//     }
//   }

//   return null;
// }


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