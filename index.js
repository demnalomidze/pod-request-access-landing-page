const email = document.getElementById("Email");
const button = document.getElementsByClassName("click-group")[0];
const bottomGroup = document.getElementsByClassName("bottom-group")[0]; // Get the bottom-group div

button.addEventListener("click", function () {
  const emailValue = email.value;

  // Check if the email contains "@" and "."
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    let existingErrorMessage = document.getElementById("dynamicErrorMessage");

    // If the error message does not exist, create and insert it
    if (!existingErrorMessage) {
      const errorMessageHTML = `<p id="dynamicErrorMessage" style="color:red; text-align:center;">Oops! There was a mistake</p>`;
      bottomGroup.insertAdjacentHTML("afterend", errorMessageHTML); // Insert after the bottom-group
    }
  } else {
    // Remove the error message if the email is valid
    let existingErrorMessage = document.getElementById("dynamicErrorMessage");
    if (existingErrorMessage) {
      existingErrorMessage.remove();
    }
    console.log("Email is valid: " + emailValue);
  }
});
