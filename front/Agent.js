let url = window.location.search;
let id = new URLSearchParams(url).get("id");

fetch(`http://localhost:3000/agents/${id}`)
  .then((response) => response.json())
  .then((data) => {
    let agentSolo = document.querySelector("#agent");
    agentSolo.innerHTML = `
    <small>${data.id}</small>
           <h1>${data.name}</h1>

					<a href="index.html"> Back </a>
          <a href="update.html?id=${data.id}">Update</a>
        <button onclick="deleteAgent()">Delete</button>
                `;
  });

const deleteAgent = async () => {
  let response = await fetch(`http://localhost:3000/agents/${id}`, {
    method: "DELETE",
  });
  window.location.href = "index.html";
};
