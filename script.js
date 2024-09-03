const copyMailToClipboard = () => {
    navigator.clipboard.writeText("joanaprates2@gmail.com"); 

    alert("Mail copied to the clipboard.")
}

const mail = document.getElementById("mailbutton"); 

mail.addEventListener("click", copyMailToClipboard); 