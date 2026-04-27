document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;

  let vCard = `BEGIN:VCARD
VERSION:3.0
FN:${nombre}
TEL:${telefono}
EMAIL:${email}
END:VCARD`;

  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
    text: vCard,
    width: 200,
    height: 200
  });

  document.getElementById("resultCard").classList.add("active");
});