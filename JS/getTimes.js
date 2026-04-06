// Function To Get Time  
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    const arabicDays = ["الاحد" , "الاتنين" , "الثلاثاء" , "الاربعاء" , "الخميس" , "الجمعة"]
    const dayName = arabicDays[today.getDay()];

    return `${dayName} ${year}-${day}-${month}`;
}

function getNowHours() {
    const now = new Date();
    let hours = String(now.getHours());
    const minutes = String(now.getMinutes()).padStart(2 , '0');

    const period = hours >= 12 ? 'م' : 'ص';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; 

    return `${hours}:${minutes} ${period}`
}