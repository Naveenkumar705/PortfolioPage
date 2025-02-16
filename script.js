// const menuIcon = document.querySelector('#menu-icon');
// const navLinks = document.querySelector('.nav-links');

// menuIcon.onclick = () => {
//     navLinks.classList.toggle('active');
// }

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn-group .btn:last-child").addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("5PXmy6q7eZMkeKI3G"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Send email using EmailJS
        emailjs.send("service_ouwkj5i", "template_lyqybo8", {
            user_name: name,
            user_email: email,
            user_phone: phone,
            message: message
        }).then(function (response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message. Try again later.");
            console.log("Error:", error);
        });
    });
});
