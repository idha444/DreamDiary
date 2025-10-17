// Save dream
const saveBtn = document.getElementById("saveBtn");
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const dreamText = document.getElementById("dreamInput").value.trim();
    if (dreamText) {
      const dreams = JSON.parse(localStorage.getItem("dreams")) || [];
      dreams.push({
        id: Date.now(),
        text: dreamText,
        date: new Date().toLocaleString()
      });
      localStorage.setItem("dreams", JSON.stringify(dreams));
      alert("🌙 Dream saved!");
      document.getElementById("dreamInput").value = "";
    } else {
      alert("Please write something first!");
    }
  });
}

// Show dreams
const dreamList = document.getElementById("dreamList");
if (dreamList) {
  const dreams = JSON.parse(localStorage.getItem("dreams")) || [];
  if (dreams.length === 0) {
    dreamList.innerHTML = "<p>No dreams saved yet 😴</p>";
  } else {
    dreams.forEach(dream => {
      const div = document.createElement("div");
      div.className = "dream";
      div.innerHTML = `
        <strong>${dream.date}</strong>
        <button class="delete-btn" onclick="deleteDream(${dream.id})">Delete</button>
        <p>${dream.text}</p>
      `;
      dreamList.appendChild(div);
    });
  }
}

// Delete dream function
function deleteDream(id) {
  let dreams = JSON.parse(localStorage.getItem("dreams")) || [];
  dreams = dreams.filter(dream => dream.id !== id);
  localStorage.setItem("dreams", JSON.stringify(dreams));
  alert("Dream deleted 💤");
  location.reload();
}
