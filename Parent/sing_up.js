function validateForm() {
    var parentName = document.getElementById('PN').value;
    var parentNumber = document.getElementById('PNN').value;
    var studentName = document.getElementById('SN').value;
    var studentNumber = document.getElementById('SNN').value;
    var Adres = document.getElementById('addres').value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var idd = document.getElementById('Id').value;
    var user =[]
  
  
    
      var obj = {parentName,parentNumber,studentName,studentNumber,Adres,email,password,idd};
      user.push(obj);
      console.log(user);
      alert("SigUp Successfully");
  }