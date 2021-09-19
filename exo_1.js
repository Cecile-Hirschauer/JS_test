const moduloFiveThree = (list_n) => {
    for (n of list_n) {
        if (n % (3 * 5) === 0) {
            console.log('GarçonFille')
        } else if (n % 3 == 0) {
            console.log('Garçon')
        } else if (n % 5 === 0) {
            console.log('Fille') 
        } else {
            console.log(n)
        }
    }
}

// moduloFiveThree([8, 6, 15, 3, 9, 30])