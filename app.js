function alertCurrentDay() {
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDayName = dayNames[currentDayIndex];
    const currentDayShortName = currentDayName.substring(0, 3);
    alert("The first three letters of the current day are: " + currentDayShortName);
}
