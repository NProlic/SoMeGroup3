type="text/javascript">
        // PASSWORD PROTECTION SCRIPT        
        function TheLogin() {
        var password = 'eaaa';
        var navn = 'eaaa';    
        if (this.document.login.pass.value == password && this.document.login.name.value == navn) {
            window.alert("Congratulations, you're in");
            top.location.href="somestrategi.html";
        }
        else {
            if (this.document.login.pass.value != password && this.document.login.name.value != navn)
                window.alert("Not a valid code.");
            // not recommended but possible it is, below:
            else if (this.document.login.pass.value != password)
                window.alert("Name is ok, but wrong password.");
            else if (this.document.login.name.value != navn)
                window.alert("You have the password all right, however the username is wrong.");              
          }
        }