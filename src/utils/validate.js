export const checkValidData = ( email, password, phone, name, location) => {

    const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(name);

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    const isPhoneValid = /^(\+91)?[6-9]\d{9}$/.test(phone);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)

    const isLocationValid = /^[a-zA-Z0-9\s,.'-]{3,}$/.test(location);

    if (!isNameValid) return "Name is incorrect"
    if (!isEmailValid) return "Email is incorrect"
    if (!isPhoneValid) return "Phone number is incorrect"
    if (!isPasswordValid) return "Password is incorrect"
    if(!isLocationValid) return "Location is incorrect" 
    
    return null
};