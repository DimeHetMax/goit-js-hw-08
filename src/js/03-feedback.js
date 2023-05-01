import throttle from 'lodash.throttle';
const throttled = throttle(onForm, 500)

const form = document.querySelector(".feedback-form")
form.addEventListener("input", throttled)
form.addEventListener("submit", OnbtnSubmit)
// console.dir(form.elements.email.value = "23")

const feedbackForm = {
    name: "",
    message: "",
}
function onForm(event){
    event.preventDefault() 
    if(event.target.nodeName === "INPUT"){
        feedbackForm.name = event.target.value;
    } else if(event.target.nodeName === "TEXTAREA"){
        feedbackForm.message = event.target.value;
    }
    localStorage.setItem("feedback-form-state",JSON.stringify(feedbackForm));
}

function OnbtnSubmit(event){
    event.preventDefault()
    const {name: userEmail, message: userMessage} = JSON.parse( localStorage.getItem("feedback-form-state"));
    feedbackForm.name = userEmail;
    feedbackForm.message = userMessage;
    localStorage.removeItem("feedback-form-state");
    console.log(feedbackForm)
    event.currentTarget.reset()
}

