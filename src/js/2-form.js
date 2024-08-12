const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const localStorageDataChecker = form => { 
    const formDataFromLs = JSON.parse(localStorage.getItem(localStorageKey));
    for (const key in formDataFromLs) {
        if (formDataFromLs.hasOwnProperty(key)) {
            form.elements[key].value = formDataFromLs[key];
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
    if (!form.elements.email.value || !form.elements.message.value) {
        alert("Fill please all fields");}
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    event.target.reset();
 });