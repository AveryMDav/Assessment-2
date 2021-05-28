console.log('Welcome to the Password Validator Tool')

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question('Please enter your password.', function(input){
    let pass = input.slice(' ');

    if (pass.length >= 10){
        console.log('Success!')
    }else{
        console.log('Failed.')
    }
    reader.close()
})
