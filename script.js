'use strict'

// Form Fields 
const fullName = document.querySelector('.full_name')
const username = document.querySelector('.username')
const country = document.querySelector('.country')
const countryCode = document.querySelector('.country-code')
const phone = document.querySelector('.phone')
const email = document.querySelector('.email')
const gender = document.querySelector('.gender')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')
const form = document.querySelector('.form')

let error = (input) => {
    input.style.border = "2px solid crimson"
    input.previousElementSibling.style.color = "crimson"
}

let success = (input) => {
    input.style.border = "2px solid seagreen"
    input.previousElementSibling.style.color = "seagreen"
}

let checkInput = (input, number = '') => {

    input.addEventListener('keyup', () => {
        input.value.trim()
        if(input.value.length <= number || input.value === '') {
            error(input)
        }

        if(input.value.length > number) {
            success(input)
        }

        if(input.name === 'phone') {
            input.previousElementSibling.style.color = ""
            if(input.style.border === '2px solid crimson') {
                input.previousElementSibling.previousElementSibling.style.color = "red"
            } else if (input.style.border === '2px solid seagreen') {
                input.previousElementSibling.previousElementSibling.style.color = "seagreen"
            } else {
                input.previousElementSibling.previousElementSibling.style.color = ""
            }
        }
    })

}

checkInput(fullName, 3)
checkInput(username, 5)
checkInput(password, 9)
checkInput(phone, 9)


function setDialingCode() {
    country.addEventListener('change', () => {

        if(country.value === 'Nigeria') {
            countryCode.value = '+234'
            countryCode.readOnly = true
            countryCode.style.border = '2px solid green'
            success(country)
        }

        if(country.value === 'Ghana') {
            countryCode.value = '+233'
            countryCode.readOnly = true
            countryCode.style.border = '2px solid green'
            success(country)
        }

        if(country.value === '') {
            countryCode.value = ''
            error(country)
            return false
        }

    })
    
}
setDialingCode()

let genderValidation = () => {
    gender.addEventListener('change', () => {
        if(gender.value === 'male') {
            success(gender)
        }

        if(gender.value === 'female') {
            success(gender)
        }

        if(gender.value === '') {
            error(gender)
        }

        if(gender.value === 'others') {
            success(gender)
        }
    })
}
genderValidation()


let phoneValidation = () => {
    let img = document.createElement('img')
    phone.addEventListener('keyup', () => {
        if(isNaN(phone.value)){
            phone.style.border = '2px solid red'
        } 
            
        // MTN Numbers
        if(phone.value.startsWith('3', 2) || phone.value.startsWith('6', 2) || phone.value.startsWith('0', 2)) {
            img.src = 'img/mtn-logo.png'
            phone.parentElement.append(img)     
        }

        //Glo Numbers
        if(phone.value.startsWith('5', 2) || phone.value.startsWith('7', 2) || phone.value.startsWith('1', 2) && phone.value.startsWith('1', 1)) {
            img.src = 'img/glo-logo.png'
            phone.parentElement.append(img)
            
        }

        // Airtel Numbers
        if(phone.value.startsWith('2', 2) || phone.value.startsWith('8', 2) || phone.value.startsWith('2', 2) && phone.value.startsWith('1', 1)) {
            img.src = 'img/airtel-logo.png'
            phone.parentElement.append(img)
            
        }

        // 9 Mobile Numbers
        if(phone.value.startsWith('9', 2) || phone.value.startsWith('8', 2) && phone.value.startsWith('1', 1) || phone.value.startsWith('7', 2) && phone.value.startsWith('1', 1)) {
            img.src = 'img/9mobile-logo.png'
            phone.parentElement.append(img)
            
        }
    })
}

phoneValidation()




// Email Validation
let emailValidation = (input) => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    input.addEventListener('keyup', () => {
        input.value.trim()

        if(pattern.test(input.value)) {
            success(input)  
        } else {
            error(input)
        }

    })
      
}
emailValidation(email)


// Confirm Password Validation
let passwordCheck = (pw, pw2) => {
    pw2.addEventListener('keyup', () => {
        if(pw2.value !== pw.value) {
            error(pw2)
        } else {
            success(pw2)
        }
    })
    
}

passwordCheck(password, confirmPassword)
