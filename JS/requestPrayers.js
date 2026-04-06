let selectDom = document.getElementById("select-city");

// Request For Prayer Times
function getPrayerTimes() {
    axios.get(`https://api.aladhan.com/v1/timingsByCity/${getTodayDate()}?city=${selectDom.value}&country=Saudi%20Arabia&method=4`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((response) => {
        let prayerTimes = [response.data.data];
        let prayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
        
        document.querySelector(".prayer-times").innerHTML = "";

        for (let time of prayerTimes) {
            prayers.forEach(function (item) {
                
                if (item == 'Fajr') {
                    itemArab = "الفجر"
                } else if (item == 'Sunrise') {
                    itemArab = 'الشروق'
                } else if (item == 'Dhuhr') {
                    itemArab = 'الظهر'
                } else if (item == 'Asr') {
                    itemArab = 'العصر'
                } else if (item == 'Maghrib') {
                    itemArab = 'المغرب'
                } else {
                    itemArab = "العشاء"
                }

                document.querySelector(".prayer-times").innerHTML += `
                 <div class="row px-4 pt-2 mb-0">
                    <div class="col-lg-4 col-2">
                    <p>${itemArab}</p>
                    </div>
                    <div class="col-lg-6 col-6"></div>
                    <div class="co-lg-2 col-2">
                    <p id="time">${time.timings[item]}</p>
                    </div>
                </div>
                <hr class="my-0">
                `;
                
            })     
        }
    })
    .catch(error => {
        console.error("حدث خطأ أثناء جلب مواقيت الصلاة:", error);
        document.querySelector(".prayer-times").innerHTML = "<p>فشل في تحميل المواقيت</p>";
    });
}
getPrayerTimes()