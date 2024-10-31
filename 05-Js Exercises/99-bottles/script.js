function decreaseBottles() {
    let bottles = 99;

    while (bottles > 0) {
        if (bottles === 1) {
          
            console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer." +
                        " Take it down and pass it around, no more bottles of beer on the wall.");
            break; 
        } else {

            console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer." +
                        " Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
        }

        bottles--; 
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

decreaseBottles();
