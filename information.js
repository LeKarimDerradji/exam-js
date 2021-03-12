const information = (nameStr, lastnameStr, age) => {
    let majDans = 0
    let majDepuis = 0
    for (let i = age; i < 18; i++) {
        majDans++;
    }
    for (let j = age; j > 18 ; j--) {
        majDepuis++
    }
    console.log(`
    prenom: ${nameStr}
    nom: ${lastnameStr}
    age: ${age}
    ${age > 18 ? ' vous êtes majeur depuis ' + majDepuis + ' ans ' : ' vous serez majeur dans ' + majDans + ' ans'}`)
}

information('Karim', 'Derradji', 27)
information('Karim', 'Derradji', 11)