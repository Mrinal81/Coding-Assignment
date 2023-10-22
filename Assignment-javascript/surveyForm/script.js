const form = document.getElementById("form");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopup = document.getElementById("close-popup");
const btn = document.getElementById("submit");
const reset = document.getElementById("reset");
const countryDrop = document.getElementById("country");


let countries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    var data = await res.json()
    // console.log(data);

    data.forEach(country => {
        const options = document.createElement("option");
        options.value = country.name.common;
        options.textContent = country.name.common;
        countryDrop.appendChild(options);
    });
}


function showPopup() {
    const isValid = form.checkValidity();

    if (!isValid) {
        event.preventDefault();
        alert("Please fill in all required fields.");
    }
    else {
        event.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const country = document.getElementById("country").value;
        const selectedGender = [];
        const checkboxes = document.querySelectorAll('input[name="gender"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedGender.push(checkbox.value);
            }
        });
        const gender = selectedGender.join(", ")
        // console.log(gender);

        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const popupHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        popupContent.innerHTML = popupHTML;
        popup.style.display = "block";
    }
};

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    form.reset();
});

btn.addEventListener("click", function (event) {
    event.preventDefault();
    showPopup();
});
reset.addEventListener("click", function () {
    form.reset();
})
countries();
