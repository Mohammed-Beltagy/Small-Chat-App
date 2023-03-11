// Send Message
const chat = document.getElementById("chat");
document.getElementById("send-msg").onclick = function () {
  const msg = document.getElementById("type-msg").value;
  if (msg.length > 0) {
    const msgBox = document.createElement("div");
    msgBox.className = "msg right-msg text";
    msgBox.innerText = msg;
    chat.append(msgBox);
    chat.scrollTo(
      0,
      parseFloat(getComputedStyle(chat).getPropertyValue("height"))
    );
    document.getElementById("type-msg").value = "";
  }
};
