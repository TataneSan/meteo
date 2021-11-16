function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "a.abhilil2@gmail.com",
        Password : "AE8BEFE9ACD3CDB788C0DCAAD1B68CC4A332",
        To : "a.abhilil2@gmail.com",
        From : "a.abhilil2@gmail.com",
        Subject : subject,
        Body : body + "Email envoyé par + " + toemail +" avec le nom "
    }).then(
    );
}
let toemail;
let subject;
let body;
let name;
document.getElementById("form_").addEventListener("submit", function (event) {
    console.log(document.getElementById("form_name").value.length);
    if((document.getElementById("form_name").value.length == 0) || (document.getElementById("form_soluce").value.length == 0) || (document.getElementById("form_subject").value.length == 0) || (document.getElementById("form_email").value.length == 0)){
        toast({
            title : 'Attention' ,
            description : 'Merci de remplir tous les champs' ,
            type : 'warning' ,
            timeout : 5000
        });
        event.preventDefault();

    }
    else {
        toemail = document.getElementById("form_email").value;
        subject = document.getElementById("form_subject").value;
        body = document.getElementById("form_soluce").value;
        name = body = document.getElementById("form_name").value;
        toast({
            title : 'Email Envoyé' ,
            description : 'Merci ' + name + " nous avons bien reçu votre message.",
            type : 'success' ,
            timeout : 5000
        });
        sendEmail();
        toemail = document.getElementById("form_email").value = null;
        subject = document.getElementById("form_subject").value= null;
        body = document.getElementById("form_soluce").value= null;
        name = body = document.getElementById("form_name").value = null;
        event.preventDefault();
    }
});
