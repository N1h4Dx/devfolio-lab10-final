/* =========================
   LAB 11 — REAL-TIME VALIDATION (FIXED)
========================= */

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function onlyLetters(str) {
  return /^[A-Za-zÀ-ž\s]+$/.test(str);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("extendedForm");
  if (!form) return;

  const name = document.getElementById("userName");
  const surname = document.getElementById("userSurname");
  const email = document.getElementById("userEmail");
  const phone = document.getElementById("userPhone");
  const address = document.getElementById("userAddress");

  const errName = document.getElementById("err-userName");
  const errSurname = document.getElementById("err-userSurname");
  const errEmail = document.getElementById("err-userEmail");
  const errPhone = document.getElementById("err-userPhone");
  const errAddress = document.getElementById("err-userAddress");

  const submitBtn = document.getElementById("submitBtn");

  function setError(input, errEl, msg) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errEl.textContent = msg;
  }

  function setValid(input, errEl) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errEl.textContent = "";
  }

  function validate() {
    let ok = true;

    if (!onlyLetters(name.value)) {
      setError(name, errName, "Only letters allowed");
      ok = false;
    } else setValid(name, errName);

    if (!onlyLetters(surname.value)) {
      setError(surname, errSurname, "Only letters allowed");
      ok = false;
    } else setValid(surname, errSurname);

    if (!isEmailValid(email.value)) {
      setError(email, errEmail, "Invalid email format");
      ok = false;
    } else setValid(email, errEmail);

    if (phone.value.length < 5) {
      setError(phone, errPhone, "Invalid phone");
      ok = false;
    } else setValid(phone, errPhone);

    if (address.value.length < 5) {
      setError(address, errAddress, "Address too short");
      ok = false;
    } else setValid(address, errAddress);

    submitBtn.disabled = !ok;
    return ok;
  }

  // 🔹 REAL-TIME VALIDATION
  [name, surname, email, phone, address].forEach(input => {
    input.addEventListener("input", validate);
  });

  // 🔹 SUBMIT HANDLER
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  });
});
