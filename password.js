console.log('Welcome to the Password Validator Tool')

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// reader.question('Please enter your password.', function(input){
//     let pass = input.slice(' ');

//     if (pass.length >= 10){
//         console.log('Success!')
//     }else{
//         console.log('Failed.')
//     }
//     reader.close()
// })


reader.question('Please enter your password.', function(input){
    let pass = input.slice(' ');
    let vowel = ['a','e','i','o','u','A','E','I','O','U']
    let count = 0

    if (pass.length >= 10){
        for (i=0; i < pass.length; i++){
            if(vowel.includes(pass[i])){
                count++; 
            } 
        } if (count >= 1) {
            console.log ('Success')
        } else {
            console.log ('Failure')
        }
    } else { console.log ('Failure')
    }
    reader.close()
})