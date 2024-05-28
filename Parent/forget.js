var InfoArray = [{ "user_name": "Mostafa", "password": "mostafa123" }];

function updatePass() {
  var mail = document.getElementById("email").value;
  var pass = document.getElementById("new").value;
  var conf = document.getElementById("con").value;

  InfoArray.forEach(function(element) {
    if (element.user_name === mail) {
      if (pass === conf) {
        element.password = pass;
        window.location.assign('Login.html');
      }
    }
  });
}