
async function sendMessage() {
  const input = document.getElementById("user-input").value;
  if (!input) return;
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<div><strong>Anda:</strong> ${input}</div>`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "sk-ijklmnopuvwx1234ijklmnopuvwx1234ijklmnop"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }]
    })
  });
  const data = await response.json();
  const botReply = data.choices[0].message.content;
  chatbox.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
  document.getElementById("user-input").value = "";
}
