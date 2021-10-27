//Normal Function 1st way
function printNameFirstWay(){
    console.log("Mostafa");
}

printNameFirstWay();

//Normal Function 2nd way
var printNameSecondWay = function(){
    console.log("Mostafa");
}

printNameSecondWay();

//Arrow Function Without Param
const printNameUsingArrowWithoutParam = () => {
    console.log("Mostafa");
}

printNameUsingArrowWithoutParam();


//Arrow Function With Multi Param
const printNameUsingArrowWithMultiParam = (name, age) => {
    console.log("Mostafa");
}

printNameUsingArrowWithMultiParam("Mostafa", 31);

//Arrow Function Without Single Param 1st way
const printNameUsingArrowSingleParamFirstWay = (name) => {
    console.log(name);
}

printNameUsingArrowSingleParamFirstWay("Mostafa");

//Arrow Function Without Single Param 2nd way
const printNameUsingArrowSingleParamSecondWay = name => {
    console.log(name);
}

printNameUsingArrowSingleParamSecondWay("Mostafa");

//Arrow Function With return statement only - 1st way
const printNameUsingArrowWithReturnFirstWay = num => {
    return num * num;
}

console.log(printNameUsingArrowWithReturnFirstWay(2));

//Arrow Function With return statement only - 2nd way
const printNameUsingArrowWithReturnSecondWay = num => num * num;

console.log(printNameUsingArrowWithReturnSecondWay(2));