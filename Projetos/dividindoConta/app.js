const restaurantBill = (bill) => {
    const tax = bill * 0.1;

    const total = bill + tax;

    // return $ + total / 5
    return `$${total/5}`
};

const output = restaurantBill(50);
console.log(output);

/*const boloReceita = (pessoas) {

   const xicaras = pessoas * 3

   return(xicaras)
}



const papel = boloReceita(3)
console.log(papel)



const twoPapel = boloReceita(2)
console.log(twoPapel)

const totalFarinha = papel + twoPapel
console.log(totalFarinha) */

// const paoDeQueijo = () => {
//     return console.log('pao de queijo')
// }



// const paoQueijo = () => console.log('pao de queijo')

