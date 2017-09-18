function multiply(first, second) {
    // your solution
    function multiply(strNum1,strNum2){

        let a1 = strNum1.split("").reverse(),
         a2 = strNum2.toString().split("").reverse(),
         aResult = new Array;

        for ( let iterNum1 = 0; iterNum1 < a1.length; iterNum1++ ) {
            for ( let iterNum2 = 0; iterNum2 < a2.length; iterNum2++ ) {
                let arrayPos = iterNum2 + iterNum1,
                    product,
                    reminder;

                aResult[arrayPos] = a1[iterNum1]*a2[iterNum2] + (aResult[arrayPos] === undefined ? 0 : aResult[arrayPos]);

                if(aResult[arrayPos]>9){
                    let stringProduct = aResult[arrayPos].toString();
                    product = stringProduct[1];
                    reminder = stringProduct[0];

                    aResult[arrayPos] = product;
                    aResult[arrayPos+1] = reminder;
                }


            }
        }
        return aResult.reverse().join("");
    }

    return multiply(first, second);
};


console.log(multiply('99', '99'));