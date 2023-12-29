function findLeapYear(year) {

    is_leap_year = false;

    if (year % 4 == 0) {
        is_leap_year = true;

        if (year % 100 == 0) {

            if (year % 400 == 0)
                is_leap_year = true;
            else
                is_leap_year = false;
        }
    }
    else {
        is_leap_year = false;
    }

    if (!is_leap_year)
        console.log("Year : " + year + " - Non Leap year");
    else
        console.log("Year : " + year + " - Leap year");
}

findLeapYear(2020);