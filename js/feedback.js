var button = document.getElementById('submit');
button.onclick = function(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","/feedback.php?name=" + name + "&email=" + email + "&message=" + message,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		alert(xmlhttp.responseText);
		name = "";
		email = "";
		message = "";
		}
	  }
	  
}

