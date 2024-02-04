/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}



document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      Nombre: document.getElementById("first-name").value,
      Apellido: document.getElementById("surname").value,
      Email: document.getElementById("email").value,
      Telefono: document.getElementById("telephone").value,
      Mensaje: document.getElementById("message").value,
    };

    $.ajax({
        url: "https://formsubmit.co/ajax/7ad246b863079fb8880f9775992f7aef",
        method: "POST",
        data: formData,
        dataType: "json",
      })
      .done(function () {
        console.log("Formulario enviado con exito")
        console.log(formData);
      })
      .fail(function (error) {
        console.error("Error submitting form:" + error);
      });
  })
});

$(document).ready(function () {
  // Function to handle form submission
  $('#contactForm').submit(function (e) {
      e.preventDefault(); // Prevent the default form submission

      // Your form submission logic here, for example, using AJAX

      // Assuming the form submission is successful, add the attributes to the submit button
      addModalAttributesToSubmitButton();
  });

  // Function to add modal attributes to the submit button
  function addModalAttributesToSubmitButton() {
      // Select the submit button
      var submitButton = $('#submit');

      // Add the required attributes
      submitButton.attr('data-bs-toggle', 'modal');
      submitButton.attr('data-bs-target', '#exampleModal');

      // Trigger a click event on the submit button to open the modal
      submitButton.click();
  }
});