let mainContainer = document.getElementById("mainContainer")
let successModal = document.getElementById("successModal")
let suscribeBtn = document.getElementById("suscribeBtn")
let dismissModalBtn = document.getElementById("dismissModalBtn")
let emailInput = document.getElementById("emailInput")
let storedEmail = document.getElementById("storedEmail")
let emailError = document.getElementById("emailError")

suscribeButton.onclick = function () {
  if (mainContainer.style.display !== "none", emailInput.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
    mainContainer.style.display = "none"
    successModal.style.display = "flex"
    storedEmail.innerHTML = emailInput.value + ". "
  } else {
    mainContainer.style.display !== "flex"
    emailError.innerHTML = "Valid email required"
    emailInput.style.border = "rgb(251, 69, 69)"
    emailInput.style.background = "rgb(251, 69, 69)"
    emailInput.style.opacity = "0.3"
    emailInput.style.color = "rgb(183, 17, 17)"
    emailInput.style.fontWeight = "bolder"
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

