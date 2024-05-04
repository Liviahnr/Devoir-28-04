let url = window.location.search;
let id = new URLSearchParams(url).get("id");

const updateAgent = async () => {
  let name = document.querySelector('input[name="agent"]').value;
  let metier = document.querySelector('input[name="metier"]').value;
  let age = document.querySelector('input[name="age"]').value;

  let response = await fetch(`http://localhost:3000/agents/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, metier, age }),
  });

  window.location.href = "index.html";
};
