// Destructuring Exercises
// Patrick Swafford
// Springboard Software Development Career Program

// Note some given content was reformatted to ES2015 and placed
// into arrays as appropriate

// Object Destructuring 1
const Obj_Destructuring_1 = () => {
    // Declares an object with two attributes: numPlanets and
    // yearNeptuneDiscovered and sets them to 8 and 1846
    // respectively
    let facts = {
        numPlanets: 8,
        yearNeptuneDiscovered: 1846,
    };

    // Declares two variables, numPlanets and
    // yearNeptune Discoved. Destructuring is used to assign
    // to these variables the values assigned to the
    // corresponding attributes in the facts object, namely
    // 8 and 1846, respectively
    let { numPlanets, yearNeptuneDiscovered } = facts;

    // prints the value stored in numPlanets, 8, to the console
    console.log(numPlanets);

    // prints the value stored in yearNeptuneDiscovered, 1846,
    // to the console
    console.log(yearNeptuneDiscovered);
};

// Object Destructuring 2
const Obj_Destructuring_2 = () => {
    // Declares an object with three attributes: numPlanets,
    // yearNeptuneDiscovered, and yearMarsDiscoverd, and sets
    // them to 8, 1846, and 1659 respectively
    let planetFacts = {
        numPlanets: 8,
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659,
    };

    // Destructures numPlanets from PlanetFacts into its own
    // variable, the remaining attributes are destructured into
    // discoveryYears array using the rest operator
    let { numPlanets, ...discoveryYears } = planetFacts;

    // prints the discoveryYears array onto the console. This
    // array contains yearNeptuneDiscoverd which is 1846 and
    // yearMarsDiscovered, which is 1659
    console.log(discoveryYears);
};

// Object Destructuring 3
// Function that accepts two parameters, firstName and
// favoriteColor and returns a prompt telling the user their
// name and their favorite color. If no firstName is passed
// in, firstName is undefined. if favoriteColor is not passed
// in, it defaults to green.
const getUserData = ({ firstName, favoriteColor = "green" }) =>
    `Your name is ${firstName} and you like ${favoriteColor}`;

// Object Destructuring 3
const Obj_Destructuring_3 = () => {
    // prints message with firstName=Alejandro and favoriteColor
    // being purple
    console.log(
        getUserData({ firstName: "Alejandro", favoriteColor: "purple" })
    );

    // prints message with firstName being Melissa and
    // favoriteColor being green, the default
    console.log(getUserData({ firstName: "Melissa" }));

    // prints message with firstName being undefined as no
    // default was defined and favoriteColor being green, the
    // default.
    console.log(getUserData({}));
};

// Array Destructuring 1
const Arr_Destructuring_1 = () => {
    // Declares three variables and destructures the contents
    // of an array into those variables
    let [first, second, third] = ["Maya", "Marisa", "Chi"];

    // Prints variable first, which contains "Maya"
    console.log(first);

    // Prints variable second which contains "Marisa"
    console.log(second);

    // Prints variable third which contains "Chi"
    console.log(third);
};

// Array Destructuring 2
const Arr_Destructuring_2 = () => {
    // Declares an array with variable raindrops containing the
    // first string, whiskers containing the second string,
    // and aFewOfMyFavoriteThings containing the rest of the
    // strings.
    let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
        "Raindrops on roses",
        "whiskers on kittens",
        "Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings",
    ];

    // prints "Raindrops on Roses" to console
    console.log(raindrops);

    // prints "whiskers on kittens" to console
    console.log(whiskers);

    // prints an array containing [
    //     "Bright copper kettles",
    //     "warm woolen mittens",
    //     "Brown paper packages tied up with strings"
    // ] to console
    console.log(aFewOfMyFavoriteThings);
};

// Array Destructuring 3
const arr_destructuring_3 = () => {
    // Declares numbers array
    let numbers = [10, 20, 30];

    // Uses array destructuring to swap the second and third
    // elements of the array
    [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

    // prints numbers array
    console.log(numbers); // [10, 30, 20]
};

// ES5 Assigning Variables to Object Properties
//var obj = {
//    numbers: {
//        a: 1,
//        b: 2,
//    },
//};
//
//var a = obj.numbers.a;
//var b = obj.numbers.b;

// ES2015_Object_Destructuring
const ES2015_Object_Destructuring = () => {
    // Declares object containing one object
    let obj = {
        numbers: {
            a: 1,
            b: 2,
        },
    };

    // Uses nested destructuring to pull a & b from obj.numbers
    let {
        numbers: { a, b },
    } = obj;

    // prints a and b
    console.log(a);
    console.log(b);
};

// ES5 Array Swap
const es5_array_swap = () => {
    var arr = [1, 2];
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
};

// ES2015_one_line_swap_destructuring
const es2015_array_swap = () => {
    // Declares two integer array
    let arr = [1,2];

    // Uses destructuring to swap array
    [arr[1], arr[0]] = [arr[0], arr[1]];

    // Prints array to console
    console.log(arr);
}