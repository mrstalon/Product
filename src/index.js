function multiply(first, second) {
    // your solution
    function multiply(strNum1,strNum2){

        var a1 = strNum1.split("").reverse();
        var a2 = strNum2.toString().split("").reverse();
        var aResult = new Array;

        for ( var iterNum1 = 0; iterNum1 < a1.length; iterNum1++ ) {
            for ( var iterNum2 = 0; iterNum2 < a2.length; iterNum2++ ) {
                var idxIter = iterNum1 + iterNum2,
                    reminderOfProduct = 0,
                    notToPlus,
                    reminder = aResult[idxIter],
                 productResult = a1[iterNum1]*a2[iterNum2] ;

                if(idxIter >= aResult.length){
                    productResult+= 0;
                }else{
                    productResult += reminder;
                }

                console.log(productResult);

                if(productResult > 9){

                    var stringResult = productResult.toString();

                    reminderOfProduct = Number(stringResult[0]);
                    productResult = Number(stringResult[1]);

                    if(aResult[idxIter]===undefined){
                        aResult[idxIter] = 0;
                        aResult[idxIter] += productResult;
                    }else{
                        aResult[idxIter] += productResult;
                    }

                    console.log("remind - " +  reminderOfProduct);
                    console.log("product - " + productResult);

                    if(aResult[idxIter+1] === undefined){
                        console.log('нолик');
                        aResult[idxIter+1] = 0;
                        aResult[idxIter+1]+= reminderOfProduct;
                    }else{
                        console.log('плюсик');
                        if(idxIter+1 < aResult.length){
                            aResult[idxIter+1]+=reminderOfProduct + aResult[idxIter+1];
                        }
                    }
                    console.log(aResult);
                }

            }
        }
        return aResult.reverse().join("");
    }

    return multiply(first, second);
};


console.log(multiply('99', '99'));