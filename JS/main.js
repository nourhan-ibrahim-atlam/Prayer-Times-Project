// Variables
let hoursDom = document.getElementById("hours");
let dateDom = document.getElementById("date");

// Events
hoursDom.innerHTML = getNowHours();
dateDom.innerHTML = getTodayDate();
selectDom.addEventListener("change", function () {
    
    let cityDom = document.getElementById("city");
    
    cityDom.innerHTML = this.options[this.selectedIndex].text;

    getPrayerTimes();
})