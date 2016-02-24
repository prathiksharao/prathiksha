function validation()
{
 var name = document.contact form.name;
 var email = document.contact form.email;
 var mobno = document.contact form.mobno;
 var add = document.contact form.add;
 var country = document.contact form.selection;
 
 if(uname(name))
 {	
	if(uemail(email))
	{	
		if(umobno(mobno))
		{
			if(uadd(add))
			{
			}
		}
	}
 }
 return false;
 }
 
 
 function uname(name)
 {
     var letters = /^[A-Za-z]+$/;  
    if(name.value.match(letters))  
    {  
    return true;  
    }  
    else  
    {  
    alert('your name must have alphabet characters only');  
    name.focus();  
    return false;  
    }
 }
 
  function uemail(email)
  {
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(email.value.match(format))  
    {  
    return true;  
    }  
    else  
    {  
    alert("You have entered an invalid email address!");  
    email.focus();  
    return false;  
    }  
  }
  
  function umobno(mobno)  
   {   
    var numbers = /^[0-9]+$/;  
    if(mobno.value.match(numbers))  
    {  
    return true;  
    }  
    else  
    {  
    alert('Mobile numbers must have numeric characters only');  
    mobno.focus();  
    return false;  
    }  
   }  
  
  
 function uadd(add)  
   {   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(add.value.match(letters))  
    {  
    return true;  
    }  
    else  
    {  
    alert('Address must have alphanumeric characters only');  
    add.focus();  
    return false;  
    }  
   }  

 