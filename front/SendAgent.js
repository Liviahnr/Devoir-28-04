const sendAgent = async () => {
  let agent = document.querySelector("#input-agent-name").value;
  let agentAge = document.querySelector("#input-agent-age").value;
  let agentMetier = document.querySelector("#input-agent-metier").value;

  let response = await fetch("http://localhost:3000/agents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: agent,
      age: Number(agentAge),
      metier: agentMetier,
    }),
  });
  window.location.href = "index.html";
};
