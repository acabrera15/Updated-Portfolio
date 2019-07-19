$("#contactSubmit").on("click", function() {
  if ($("#firstNameInput").val() === "") {
    $("#firstNameInput").removeClass("is-valid");
    $("#firstNameInput").addClass("is-invalid");
  } else {
    $("#firstNameInput").removeClass("is-invalid");
    $("#firstNameInput").addClass("is-valid");
  }

  if ($("#lastNameInput").val() === "") {
    $("#lastNameInput").removeClass("is-valid");
    $("#lastNameInput").addClass("is-invalid");
  } else {
    $("#lastNameInput").removeClass("is-invalid");
    $("#lastNameInput").addClass("is-valid");
  }

  if ($("#emailInput").val() === "") {
    $("#emailInput").removeClass("is-valid");
    $("#emailInput").addClass("is-invalid");
  } else {
    $("#emailInput").removeClass("is-invalid");
    $("#emailInput").addClass("is-valid");
  }

  if ($("#messageInput").val() === "") {
    $("#messageInput").removeClass("is-valid");
    $("#messageInput").addClass("is-invalid");
  } else {
    $("#messageInput").removeClass("is-invalid");
    $("#messageInput").addClass("is-valid");
  }
});
