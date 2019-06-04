
let contactUsFormSubmitting = false;

function submitContactUsForm() {
    if (contactUsFormSubmitting) {
        return true;
    }
    contactUsFormSubmitting = true;

    let body = {
        name : document.getElementById('contact-us-form-name').value,
        email : document.getElementById('contact-us-form-email').value,
        message : document.getElementById('contact-us-form-message').value
    };

    setContactUsFormStatus('sending');
    post('https://ran8cs5ftc.execute-api.eu-west-2.amazonaws.com/default/techsmiths-contact-form',
        body,
        () => { // success
            setContactUsFormStatus('success');
            contactUsFormSubmitting = false;
        },
        () => { // error
            setContactUsFormStatus('error');
            contactUsFormSubmitting = false;
        }
    )
}

function post(url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.responseText);
            } else {
                error();
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

function setContactUsFormStatus(status) {
    document.getElementById('contact-us-form').classList.remove('sending', 'success', 'error');
    document.getElementById('contact-us-form').classList.add(status);
}
