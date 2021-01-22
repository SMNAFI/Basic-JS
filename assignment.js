// https://github.com/SMNAFI/Basic-JS


function kilometerToMeter(distance) {
    //for handling corner cases
    if(distance < 0) {
        return "Please enter positive value."
    }
    if(typeof(distance) != "number") {
        return "Please enter distance in numeric form."
    }

    var distanceInMeter = distance * 1000;

    return distanceInMeter;
}

function budgetCalculator(watch, mobile, laptop) {
    //for handling corner cases
    if(watch < 0 || mobile < 0 || laptop < 0) {
        return "Please enter positive value.";
    }
    else if(typeof(watch) != "number" || typeof(mobile) != "number" || typeof(laptop) != "number") {
        return "Please enter value in numeric form."
    }

    var totalCost = (watch * 50) + (mobile * 100) + (laptop * 500);

    return totalCost;
}

function hotelCost(days) {
    //for handling corner cases 
    if(days < 0) {
        return "Please enter positive value.";
    }
    if(typeof(days) != "number") {
        return "Please enter days in numeric form.";
    }

    var rent;

    if(days <= 10) {
        rent =  days * 100;
    }   
    else if(days <= 20) {
        rent = 1000 + ((days - 10) * 80);
    }
    else {
        rent = 1800 + ((days - 20) * 50);
    }

    return rent;
}

function megaFriend(friends){
    //for empty array
    if(friends.length == 0) {
        return "Please enter some friends.";
    }

    var largestNamePosition = 0;
    var largestNameLength = 0;
    var lengthOfName = 0;

    for(var i = 0; i < friends.length; i++) {
        lengthOfName = friends[i].length;

        if(lengthOfName > largestNameLength){
            largestNameLength = lengthOfName;
            largestNamePosition = i;
        }
    }

    //if array contains empty string.
    if(friends[largestNamePosition].length == 0) {
        return "There is no character.";
    }

    return friends[largestNamePosition];
}