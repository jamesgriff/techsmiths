

function cvFileUploadChanged() {
    let cv = document.getElementById('cv');
    let cv_filename = document.getElementById('cv_filename');

    if (cv && cv.files && cv.files[0] && cv.files[0].name) {
        cv_filename.innerText = cv.files[0].name;
    }
    else {
        cv_filename.innerText = 'No file chosen';
    }
}



function submitApplicationForm(event) {
    event.preventDefault();

    document.querySelectorAll('.error-message').forEach((el) => el.classList.remove('error-message-visible'));

    let isFormValid = true;

    isFormValid &= isTextFieldValid('per_forename');
    isFormValid &= isTextFieldValid('per_surname');
    isFormValid &= isTextFieldValid('per_primaryEmail');
    isFormValid &= isTextFieldValid('per_primaryTelephone');
    isFormValid &= isTextFieldValid('per_coveringLetter');

    isFormValid &= isRadioFieldValid('add_workPermit');
    
    isFormValid &= isFileUploadFieldValid('cv_fileUpload');


    if (!isFormValid) {
        setSubmitButtonStatus('error');
        document.getElementById('application_form_validation_error').classList.add('error-message-visible');
        return;
    }

    var formData = new FormData(document.getElementById('application_form'));
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('loadend', xhrLoadEnd);
    xhr.open('POST', 'http://stage.zoo.lan/ima/self-service/apply/submit', true);
    xhr.send(formData);



    function xhrLoadEnd(event) {
        if (event.target.status === 200) {
            setSubmitButtonStatus('success');
            document.getElementById('application_form_sent').classList.add('error-message-visible');
        }
        else {
            setSubmitButtonStatus('error');
            document.getElementById('application_form_failed_to_send').classList.add('error-message-visible');
        }
    }


    function isTextFieldValid(fieldName) {
        let fieldElement = document.getElementById(fieldName);
        fieldElement.classList.remove('application-form-field-error');

        let fieldValue = fieldElement.value;
        
        if (!!fieldValue) {
            return true;
        }
        else {
            fieldElement.classList.add('application-form-field-error');
            return false;
        }
    }

    function isRadioFieldValid(fieldName) {
        let radios = document.querySelectorAll('input[name="' + fieldName + '"]');
        radios.forEach((radio) => radio.classList.remove('application-form-field-error'));

        let selectedRadio = getSelectedRadio(radios);
        if (selectedRadio === undefined) {
            anyErrors = true;
            radios.forEach((radio) => radio.classList.add('application-form-field-error'));
            return false;
        }
        else {
            return true;
        }
    }
    function getSelectedRadio(radiosList) {
        for (let i = 0; i < radiosList.length; i++) {
            if (radiosList[i].checked) {
                return radiosList[i];
            }
        }
        return undefined;
    }

    function isFileUploadFieldValid(fieldName) {
        let fileUpload = document.getElementById(fieldName);
        return fileUpload.files && fileUpload.files.length > 0;
    }


}

function setSubmitButtonStatus(status) {
    document.getElementById('submit-button').classList.remove('sending', 'success', 'error');
    document.getElementById('submit-button').classList.add(status);
}