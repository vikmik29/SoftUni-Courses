function readingTime(pagesCurrentBook, pagesPerHour, daysToRead) {

    let totalTimeBook = pagesCurrentBook / pagesPerHour;
    let totalHours = totalTimeBook / daysToRead; 

    console.log(totalHours);
}

readingTime(
    212,
    20,
    2
);
