const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const localStorageDataChecker = form => { 
    const formDataFromLs = JSON.parse(localStorage.getItem(localStorageKey));
    if (formDataFromLs) {
        for (const key in formDataFromLs) {
            if (formDataFromLs.hasOwnProperty(key)) {
                form.elements[key].value = formDataFromLs[key];
                formData[key] = formDataFromLs[key];
        }
    }
    }
};

localStorageDataChecker(form);

form.addEventListener('input', event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    formData[fieldName] = fieldValue;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.elements.email.value || !form.elements.message.value) {
        alert("Fill please all fields");
        return;
}
    console.log(formData);

    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    event.target.reset();
 });