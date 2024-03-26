export default function generatePass(){
    let password = ''
    let characters= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ0123456789!@#$%&*'
    let passwordLength = 8

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length) 
        )        
    }

    return password
}