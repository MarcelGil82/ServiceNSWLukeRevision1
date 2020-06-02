// let carPrice = 60000;
// let carColour = "Pink";

// if (carPrice > 50000) {
//     if (carColour == "Red") {
//         console.log("I like red cars")
//     } else {
//             console.log("That's too expensive")
//     } 
// } else if (carPrice > 10000) {
//     if (carColour == "Blue") {
//     console.log("I like blue cars too")
//     } else if (carColour == "Red") {
//         console.log("I like red cars and this one's a bargain")
//     } else {
//         console.log("Hmmm... that's too expensive")
//     }
// } else {
//     console.log("Wow, that's a bargain")
// }

let favouriteGenre = "Rap";
let favouritePeriod = "80's";

if (favouriteGenre == "Rap") {
    if (favouritePeriod == "90's") {
        console.log("You should listen to Tupac and Biggie")
    } else if (favouritePeriod == "80's") {
        console.log("You should listen to Run DMC and N.W.A")
    } else {
        console.log("You shouldn't listen to modern Rap, especially mumble rappers!")
    }
} else if (favouriteGenre == "RnB") {
    if (favouritePeriod == "90's") {
        console.log("You should listen to KC & JoJo and Blackstreet")
    } else if (favouritePeriod == "80's") {
        console.log("You should listen to Johnny Gill and New Edition")
    } else {
        console.log("You shouldn't listen to any other RnB")
    }
} else {
    console.log("Listen to anything else, but not Country music")
}
