// Personal detyails page to company details page
function pageOne() {
    let fullName = document.forms.formOne.fullName.value;
    let gender = document.forms.formOne.gender.value;
    let country = document.forms.formOne.country.value;
    let state = document.forms.formOne.state.value;
    let mobile = document.forms.formOne.mobile.value;

    if (fullName && gender && mobile && state && country) {
        document.getElementById("form1").classList.add('deactivate-form');
        document.getElementById("form1").classList.remove('active-form');
        document.getElementById("form2").classList.add('active-form');
        document.getElementById("form2").classList.remove('deactivate-form');
        document.getElementById("step2").classList.add('active');
    } else {
        document.getElementById("error-msg").classList.add('active-form');
        return
    }
}

// Company details  page to OTP page
function pageTwo() {
    let companyName = document.forms.formTwo.companyName.value;
    let emailId = document.forms.formTwo.emailId.value;
    let jobTitle = document.forms.formTwo.jobTitle.value;
    let workExp = document.forms.formTwo.workExp.value;

    if (companyName && emailId && jobTitle && workExp) {
        document.getElementById("form2").classList.remove('active-form');
        document.getElementById("form2").classList.add('deactivate-form');
        document.getElementById("form1").classList.add('deactivate-form');
        document.getElementById("form3").classList.add('active-form');
        document.getElementById("form3").classList.remove('deactivate-form');
        document.getElementById("step3").classList.add('active');
    } else {
        document.getElementById("error-msg-2").classList.add('active-form');
        return
    }
}

// OTP verification function
function verify() {
    let otp1 = document.forms.formThree.otp1.value;
    let otp2 = document.forms.formThree.otp2.value;
    let otp3 = document.forms.formThree.otp3.value;
    let otp4 = document.forms.formThree.otp4.value;
    let otp5 = document.forms.formThree.otp5.value;
    let otp6 = document.forms.formThree.otp6.value;

    if (otp1 && otp2 && otp3 && otp4 && otp5 && otp6) {
        console.log("OTP success");
    } else {
        document.getElementById("error-msg-3").classList.add('active-form');
        return
    }
}

// Back button from company details page
function pageOneBack() {
    document.getElementById("error-msg").classList.add('deactivate-form');
    document.getElementById("form1").classList.remove('deactivate-form');
    document.getElementById("form1").classList.add('active-form');
    document.getElementById("form2").classList.add('deactivate-form');
    document.getElementById("form2").classList.remove('active-form');
    document.getElementById("step2").classList.remove('active');
}

// Back button from otp page
function pageTwoBack() {
    document.getElementById("form2").classList.add('active-form');
    document.getElementById("form2").classList.remove('deactivate-form');
    document.getElementById("form1").classList.add('deactivate-form');
    document.getElementById("form3").classList.remove('active-form');
    document.getElementById("form3").classList.add('deactivate-form');
    document.getElementById("step3").classList.remove('active');
}



