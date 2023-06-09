let mainContainer = document.getElementById("mainContainer")
let successModal = document.getElementById("successModal")
let suscribeBtn = document.getElementById("suscribeBtn")
let dismissModalBtn = document.getElementById("dismissModalBtn")
let emailInput = document.getElementById("emailInput")
let storedEmail = document.getElementById("storedEmail")

suscribeButton.onclick = function () {
  if (mainContainer.style.display !== "none") {
    mainContainer.style.display = "none"
    successModal.style.display = "flex"
    storedEmail.innerHTML = emailInput.value + ". "
  } else {
    mainContainer.style.display !== "flex"
  }
}

dismissModalBtn.onclick = function () {
  if (successModal.style.display !== "none") {
    successModal.style.display = "none"
    mainContainer.style.display = "flex"
    emailInput.value = ""
  } else {
    successModal.style.display = "none"
  }
}

