function submitData(){
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]');
    let interestDOM = document.querySelectorAll('input[name=interest]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');


    let interest = [];
    for (let i = 0; i < interestDOM.length; i++) {
        interest += interestDOM[i].value + ',';
    }

    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        interest: interest,
        descriptionDOM: descriptionDOM.value,
    
    }
    console.log("submitData",userData);
}
