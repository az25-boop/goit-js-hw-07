document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    console.log(formData);

    this.reset();
  });
