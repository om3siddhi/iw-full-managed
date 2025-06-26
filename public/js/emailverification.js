const showEditBtn = document.getElementById("showEdit");
const showVerifyBtn = document.getElementById("showVerify");
const editDiv = document.getElementById("edit");
const verifyDiv = document.getElementById("verify");

// Initialize state
editDiv.classList.remove("active");
verifyDiv.classList.add("active");
showVerifyBtn.classList.add("active");
showEditBtn.classList.remove("active");

// Toggle logic
showEditBtn.addEventListener("click", () => {
  editDiv.classList.add("active");
  verifyDiv.classList.remove("active");
  showEditBtn.classList.add("active");
  showVerifyBtn.classList.remove("active");
});

showVerifyBtn.addEventListener("click", () => {
  editDiv.classList.remove("active");
  verifyDiv.classList.add("active");
  showVerifyBtn.classList.add("active");
  showEditBtn.classList.remove("active");
});
