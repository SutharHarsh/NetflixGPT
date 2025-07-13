const checkDataValide = (email, password) => {
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    // const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);

    // if (!isNameValid) return "Name is not Valid";
    if (!isEmailValid) return "Email is not Valid!";
    if (!isPasswordValid) return "Password is not Valid";

    return null;
}

export default checkDataValide;