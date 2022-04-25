function send_mail() {
	var name = document.getElementById("name").value
	var mail = document.getElementById("email").value
	var phone = document.getElementById("phone").value
	var subject = document.getElementById("subject").value
	var message = document.getElementById("message").value

	var mail = "febiwldr09@gmail.com"

    var mail_send = `mailto:${mail}?subject=${subject}&body=Hallo, Nama Saya ${name}, ${subject}, pesan saya ${message}, dan ini nomor HP Saya ${phone}`
    window.location.href= mail_send;

    var name = document.getElementById("name").value  =""
	var mail = document.getElementById("email").value =""
	var phone = document.getElementById("phone").value =""
	var subject = document.getElementById("subject").value =""
	var message = document.getElementById("message").value =""
}