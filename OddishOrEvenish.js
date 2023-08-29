function oddishOrEvenish(num){
    let numSplit = num.toString().split("");
    console.log(numSplit.reduce((a,b) => a + Number(b), 0) % 2 ? "Oddish" : "Evenish") 
}

oddishOrEvenish(121)
oddishOrEvenish(41)