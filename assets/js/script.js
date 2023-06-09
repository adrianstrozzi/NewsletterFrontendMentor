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
    emailInput.style.borderColor = "red"
    emailInput.style.borderStyle = "solid"
    emailInput.style.background = "#f6c3c4"
    emailInput.style.opacity = "0.6"
    emailInput.style.color = "red"
    emailInput.style.fontWeight = "700"
  }
}

dismissModalBtn.onclick = function () {
  if (successModal.style.display !== "none") {
    successModal.style.display = "none"
    mainContainer.style.display = "flex"
    emailInput.value = ""
    emailInput.style.borderColor = ""
    emailInput.style.borderStyle = ""
    emailInput.style.background = ""
    emailInput.style.opacity = ""
    emailInput.style.color = ""
    emailInput.style.fontWeight = ""
    emailError.innerHTML = ""
  } else {
    successModal.style.display = "none"
  }
}

