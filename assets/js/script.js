let mainContainer = document.getElementById("mainContainer")
let successModal = document.getElementById("successModal")
let suscribeBtn = document.getElementById("suscribeBtn")
let dismissModalBtn = document.getElementById("dismissModalBtn")

suscribeButton.onclick = function () {
  if (mainContainer.style.display !== "none") {
    mainContainer.style.display = "none"
    successModal.style.display = "flex"
  } else {
    mainContainer.style.display !== "flex"
  }
}

dismissModalBtn.onclick = function () {
  if (successModal.style.display !== "none") {
    successModal.style.display = "none"
    mainContainer.style.display = "flex"
  } else {
    successModal.style.display = "none"
  }
}
