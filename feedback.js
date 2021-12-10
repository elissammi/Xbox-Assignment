window.onload = xboxpage;

function xboxpage() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) {
            if(document.getElementById('submit')) 
			{
                if (confirm("Are sure that you would like to submit this message?") == 1){
                    alert("Your message has been successfully submitted.")  
                }
                else
                {
                    alert("Please fill up the form and submit again to us. Thank You !")
                }
            
            } 
        }
    }

}