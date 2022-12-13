const copybtn = document.querySelector("#copy");
copybtn.addEventListener("click", () => {
  const pass = document.getElementById("passwordDisplay");
  console.log(pass);
  if (pass.textContent == "<pwd>") {
    navigator.clipboard.writeText("42");
  } else {
    navigator.clipboard.writeText(pass.textContent);
  }
});
