function getTime() {
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    // today Time
    const date = new Date();

    // hours : minute : second
    let h = String(date.getHours()).padStart(2, "0");
    let m = String(date.getMinutes()).padStart(2, "0");
    let s = String(date.getSeconds()).padStart(2, "0");

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}

getTime();
// 1000 = 1seconds
const interval = setInterval(getTime, 1000);
