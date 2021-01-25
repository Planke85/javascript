var yearOfBirth = prompt("Enter year of birth");

if (!isNaN(parseInt(yearOfBirth)) && (yearOfBirth.length == 4) && !(yearOfBirth > new Date().getFullYear())){
    var chineseZodiac = (yearOfBirth - 4) % 12;

    if(chineseZodiac === 0){
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Rat";
    }
    else if (chineseZodiac === 1) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Ox";
    }
    else if (chineseZodiac === 2) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Tiger";
    }
    else if (chineseZodiac === 3) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Rabbit";
    }
    else if (chineseZodiac === 4) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Dragon";
    }
    else if (chineseZodiac === 5) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Snake";
    }
    else if (chineseZodiac === 6) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Horse";
    }
    else if (chineseZodiac === 7) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Goat";
    }
    else if (chineseZodiac === 8) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Monkey";
    }
    else if (chineseZodiac === 9) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Rooster";
    }
    else if (chineseZodiac === 10) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Dog";
    }
    else if (chineseZodiac === 11) {
        document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Pig";
    }
}
else {
    document.getElementById("zodiac").innerHTML = "You insert wrong year";
}


// ---------------------------Using Switch------------------------------
/*
    switch(chineseZodiac){
        case 0:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Rat";
            break;

        case 1:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Ox";
            break;

        case 2:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Tiger";
            break;

        case 3:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Rabbit";
            break;

        case 4:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Dragon";
            break;

        case 5:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Snake";
            break;

        case 6:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Horse";
            break;

        case 7:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Goat";
            break;

        case 8:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Monkey";
            break;

        case 9:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Rooster";
            break;

        case 10:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Dog";
            break;

        default:
            document.getElementById("zodiac").innerHTML = "In chinese zodiac you are Pig";
            break;
    }
}
else {
    document.getElementById("zodiac").innerHTML = "You insert wrong year";
};
*/
