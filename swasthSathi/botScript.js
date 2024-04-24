document.addEventListener("DOMContentLoaded", function () {
  // Get references to chatbot icon and popup
  var chatbotIcon = document.getElementById("chatbot-icon");
  var chatbotPopup = document.getElementById("chatbot-popup");

  // Toggle chatbot popup visibility when icon is clicked
  chatbotIcon.addEventListener("click", function () {
    if (chatbotPopup.style.display === "block") {
      chatbotPopup.style.display = "none";
    } else {
      chatbotPopup.style.display = "block";
    }
  });
});
