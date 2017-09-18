module.exports = function multiply(first, second) {
    // your solution

        let firstParsedNumber = first.split("").reverse(),
            secondParsedNumber = second.toString().split("").reverse(),
            ResultOfMultiply = [];

        for (let firstNumIteration = 0; firstNumIteration < firstParsedNumber.length; firstNumIteration++) {
            for (let secondNumIteration = 0; secondNumIteration < secondParsedNumber.length; secondNumIteration++) {
                let arrayPos = firstNumIteration + secondNumIteration;

                ResultOfMultiply[arrayPos] = firstParsedNumber[firstNumIteration] * secondParsedNumber[secondNumIteration] + (ResultOfMultiply[arrayPos] === undefined ? 0 : ResultOfMultiply[arrayPos]);

                if (ResultOfMultiply[arrayPos] > 9) {
                    ResultOfMultiply[arrayPos + 1] = Math.floor(ResultOfMultiply[arrayPos] / 10)  + (ResultOfMultiply[arrayPos + 1] === undefined ? 0 : ResultOfMultiply[arrayPos + 1] );
                    console.log("before : " + ResultOfMultiply[arrayPos]);
                    ResultOfMultiply[arrayPos] -= Math.floor(ResultOfMultiply[arrayPos] / 10) * 10;
                    console.log("after : " + ResultOfMultiply[arrayPos]);
                }
            }
        }

        return ResultOfMultiply.reverse().join("");

};
