// Función para validar el nombre completo
function validateFullName() {
    const fullNameInput = document.getElementById('full-name');
    const errorDiv = fullNameInput.nextElementSibling;
    const fullName = fullNameInput.value.trim();

    if (fullName.length < 6 || !fullName.includes(' ')) {
        errorDiv.textContent = 'El nombre completo debe tener más de 6 letras y al menos un espacio.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el email
function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorDiv = emailInput.nextElementSibling;
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Ingrese un email válido.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la contraseña
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorDiv = passwordInput.nextElementSibling;
    const password = passwordInput.value.trim();

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        errorDiv.textContent = 'La contraseña debe tener al menos 8 caracteres, formados por letras y números.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la edad
function validateAge() {
    const ageInput = document.getElementById('age');
    const errorDiv = ageInput.nextElementSibling;
    const age = parseInt(ageInput.value);

    if (isNaN(age) || age < 18) {
        errorDiv.textContent = 'La edad debe ser un número entero mayor o igual a 18.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el teléfono
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const errorDiv = phoneInput.nextElementSibling;
    const phone = phoneInput.value.trim();

    if (!/^\d{7,}$/.test(phone)) {
        errorDiv.textContent = 'El teléfono debe tener al menos 7 dígitos sin espacios, guiones ni paréntesis.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la dirección
function validateAddress() {
    const addressInput = document.getElementById('address');
    const errorDiv = addressInput.nextElementSibling;
    const address = addressInput.value.trim();

    if (address.length < 5 || !/^[a-zA-Z0-9\s]+$/.test(address)) {
        errorDiv.textContent = 'La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la ciudad
function validateCity() {
    const cityInput = document.getElementById('city');
    const errorDiv = cityInput.nextElementSibling;
    const city = cityInput.value.trim();

    if (city.length < 3) {
        errorDiv.textContent = 'La ciudad debe tener al menos 3 caracteres.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el código postal
function validatePostalCode() {
    const postalCodeInput = document.getElementById('postcode');
    const errorDiv = postalCodeInput.nextElementSibling;
    const postalCode = postalCodeInput.value.trim();

    if (postalCode.length < 3) {
        errorDiv.textContent = 'El código postal debe tener al menos 3 caracteres.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el DNI
function validateDNI() {
    const dniInput = document.getElementById('dni');
    const errorDiv = dniInput.nextElementSibling;
    const dni = dniInput.value.trim();
    const dniRegex = /^\d{7,8}$/;

    if (!dniRegex.test(dni)) {
        errorDiv.textContent = 'El DNI debe tener 7 u 8 dígitos.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar todos los campos del formulario
function validateForm(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Validar cada campo del formulario
    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidAge = validateAge();
    const isValidPhone = validatePhone();
    const isValidAddress = validateAddress();
    const isValidCity = validateCity();
    const isValidPostalCode = validatePostalCode();
    const isValidDNI = validateDNI();

    // Mostrar mensaje emergente con los datos del formulario si todos los campos son válidos
    if (
        isValidFullName &&
        isValidEmail &&
        isValidPassword &&
        isValidAge &&
        isValidPhone &&
        isValidAddress &&
        isValidCity &&
        isValidPostalCode &&
        isValidDNI
    ) {
        const formData = new FormData(event.target);

        let message = '';
        for (const [key, value] of formData.entries()) {
            message += `${key}: ${value}\n`;
        }

        alert("Registro exitoso"); // Mostrar alerta con los datos del formulario
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
}


// Agregar eventos de validación y envío del formulario
document.getElementById('full-name').addEventListener('blur', validateFullName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('age').addEventListener('blur', validateAge);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('address').addEventListener('blur', validateAddress);
document.getElementById('city').addEventListener('blur', validateCity);
document.getElementById('postcode').addEventListener('blur', validatePostalCode);
document.getElementById('dni').addEventListener('blur', validateDNI);
document.getElementById('form').addEventListener('submit', validateForm);

// Ocultar mensaje de error en el evento focus de cada campo
document.getElementById('full-name').addEventListener('focus', function() {
    document.getElementById('error-full-name').textContent = '';
});
document.getElementById('email').addEventListener('focus', function() {
    document.getElementById('error-email').textContent = '';
});
document.getElementById('password').addEventListener('focus', function() {
    document.getElementById('error-password').textContent = '';
});
document.getElementById('repeat-password').addEventListener('focus', function() {
    document.getElementById('error-repeat-password').textContent = '';
});
document.getElementById('age').addEventListener('focus', function() {
    document.getElementById('error-age').textContent = '';
});
document.getElementById('phone').addEventListener('focus', function() {
    document.getElementById('error-phone').textContent = '';
});
document.getElementById('address').addEventListener('focus', function() {
    document.getElementById('error-address').textContent = '';
});
document.getElementById('city').addEventListener('focus', function() {
    document.getElementById('error-city').textContent = '';
});
document.getElementById('postcode').addEventListener('focus', function() {
    document.getElementById('error-postcode').textContent = '';
});
document.getElementById('dni').addEventListener('focus', function() {
    document.getElementById('error-dni').textContent = '';
});


// Función para enviar los datos del formulario al servidor mediante GET
function sendDataToServer(formData) {
    const queryString = Object.entries(formData)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    const url = `https://jsonplaceholder.typicode.com/posts?${queryString}`;

    // Realizar la solicitud GET al servidor
    fetch(url)
        .then(response => {
            if (response.ok) {
                // Envío exitoso
                handleSuccess();
            } else {
                // Envío fallido
                handleFailure();
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            handleFailure();
        });
}

// Función para manejar el éxito del envío de datos
function handleSuccess() {
    // Guardar los datos en LocalStorage
    const formData = {
        fullName: document.getElementById('full-name').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value.trim(),
        repeatPassword: document.getElementById('repeat-password').value.trim(),
        age: parseInt(document.getElementById('age').value),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),
        city: document.getElementById('city').value.trim(),
        postalCode: document.getElementById('postcode').value.trim(),
        dni: document.getElementById('dni').value.trim()
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    // Mostrar el modal de éxito
    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'block';
}

// Función para manejar el fracaso del envío de datos
function handleFailure() {
    // Mostrar el modal de fracaso
    const failureModal = document.getElementById('failure-modal');
    failureModal.style.display = 'block';
}

// Función para cargar los valores predeterminados del formulario desde LocalStorage
function loadFormDataFromLocalStorage() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        document.getElementById('full-name').value = formData.fullName || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('password').value = formData.password || '';
        document.getElementById('repeat-password').value = formData.repeatPassword || '';
        document.getElementById('age').value = formData.age || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('address').value = formData.address || '';
        document.getElementById('city').value = formData.city || '';
        document.getElementById('postcode').value = formData.postalCode || '';
        document.getElementById('dni').value = formData.dni || '';
    }
}

// Función para ocultar el modal
function hideModal() {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}

// Agregar el evento de envío del formulario
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidAge = validateAge();
    const isValidPhone = validatePhone();
    const isValidAddress = validateAddress();
    const isValidCity = validateCity();
    const isValidPostalCode = validatePostalCode();
    const isValidDNI = validateDNI();

    if (
        isValidFullName &&
        isValidEmail &&
        isValidPassword &&
        isValidAge &&
        isValidPhone &&
        isValidAddress &&
        isValidCity &&
        isValidPostalCode &&
        isValidDNI
    ) {
        const formData = {
            fullName: document.getElementById('full-name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim(),
            repeatPassword: document.getElementById('repeat-password').value.trim(),
            age: parseInt(document.getElementById('age').value),
            phone: document.getElementById('phone').value.trim(),
            address: document.getElementById('address').value.trim(),
            city: document.getElementById('city').value.trim(),
            postalCode: document.getElementById('postcode').value.trim(),
            dni: document.getElementById('dni').value.trim()
        };

        sendDataToServer(formData);
    }
});

// Agregar el evento onload para cargar valores predeterminados desde LocalStorage
window.onload = loadFormDataFromLocalStorage;

// Agregar los eventos de cierre del modal
const closeButtons = document.getElementsByClassName('close');
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', hideModal);
}
