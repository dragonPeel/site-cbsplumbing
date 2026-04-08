const form = document.getElementById("quote-form");

if (form) {
  const success = document.getElementById("form-success");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.style.display = "none";
        success.classList.add("show");
      } else {
        alert("Something went wrong. Please call instead.");
      }
    } catch (error) {
      alert("Network error. Please call instead.");
    }
  });
}