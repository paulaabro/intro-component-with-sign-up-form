function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}

function processInput(input) {
  if (isValidInput(input)) {
    if (input.div.classList.contains("fail")) {
      input.div.classList.remove("fail");
    }
    input.div.classList.add("success");
    return true;
  }

  if (input.div.classList.contains("success")) {
    input.div.classList.remove("success");
  }
  input.div.classList.add("fail");
  return false;
}

function isValidInput(input) {
  if (input.input.value === "") {
    input.err.textContent = `${input.name} cannot be empty`;
    return false;
  }

  if (input.name === "Email" && !isValidEmail(input.input.value)) {
    input.err.textContent = "Looks like this is not an email";
    return false;
  }

  input.err.textContent = "";
  return true;
}

function handleForm() {
  const validation = inputs.map(processInput);
  if (!validation.includes(false)) {
    alert("Success!");
    cleanInputs();
  }
}

function cleanInputs() {
  inputs.forEach((input) => {
    input.input.value = "";
    if (input.div.classList.contains("fail")) {
      input.div.classList.remove("fail");
    }
    
    if (input.div.classList.contains("success")) {
      input.div.classList.remove("success");
    }
  });
}

const firstName = {div: document.querySelector(".first-name"), name: "First Name", isEmail: false};
firstName.input = firstName.div.querySelector("input");
firstName.err = firstName.div.querySelector(".err");

const lastName = {div: document.querySelector(".last-name"), name: "Last Name", isEmail: false};
lastName.input = lastName.div.querySelector("input");
lastName.err = lastName.div.querySelector(".err");

const email = {div: document.querySelector(".email"), name: "Email", isEmail: true};
email.input = email.div.querySelector("input");
email.err = email.div.querySelector(".err");

const password = {div: document.querySelector(".password"), name: "Password", isEmail: false};
password.input = password.div.querySelector("input");
password.err = password.div.querySelector(".err");

const inputs = [firstName, lastName, email, password];
const button = document.querySelector("button");
button.addEventListener("click", handleForm);
