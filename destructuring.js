// Destructuring Exercises
// Patrick Swafford
// Springboard Software Development Career Program

// Object Destructuring 1
const Obj_Destructuring_1 = () => {
    
    // Declares an object with two attributes: numPlanets and
    // yearNeptuneDiscovered and sets them to 8 and 1846
    // respectively
    let facts = {
        numPlanets: 8,
        yearNeptuneDiscovered: 1846
    };
    
    // Declares two variables, numPlanets and
    // yearNeptune Discoved. Destructuring is used to assign
    // to these variables the values assigned to the 
    // corresponding attributes in the facts object, namely
    // 8 and 1846, respectively
    let {numPlanets, yearNeptuneDiscovered} = facts;

    // prints the value stored in numPlanets, 8, to the console
    console.log(numPlanets);

    // prints the value stored in yearNeptuneDiscovered, 1846,
    // to the console
    console.log(yearNeptuneDiscovered);
}