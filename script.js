// ==============================
// 1. LIVE FRIENDSHIP CLOCK
// ==============================

function updateClock() {

    const now = new Date();

    const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    }).format(now);

    const date = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Nairobi",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(now);

    const hour = Number(
        new Intl.DateTimeFormat("en-GB", {
            timeZone: "Africa/Nairobi",
            hour: "2-digit",
            hourCycle: "h23"
        }).format(now)
    );

    let greeting;

    if (hour >= 5 && hour < 12) {

        greeting = "Good morning, beautiful soul! ☀️";

    } else if (hour >= 12 && hour < 17) {

        greeting = "Hope your afternoon is lovely! 🌷";

    } else if (hour >= 17 && hour < 21) {

        greeting = "Wishing you a peaceful evening! 🌅";

    } else {

        greeting = "Rest well and keep smiling! 🌙";

    }

    document.getElementById("liveClock").textContent = time;

    document.getElementById("clockDate").textContent = date;

    document.getElementById("clockGreeting").textContent = greeting;

}

// Start clock immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);


// ==============================
// 2. FRIENDSHIP SURPRISE BUTTON
// ==============================

const surpriseBtn = document.getElementById("surpriseBtn");

const hiddenMessage = document.getElementById("hiddenMessage");

surpriseBtn.addEventListener("click", function() {

    hiddenMessage.classList.toggle("show");

    if (hiddenMessage.classList.contains("show")) {

        surpriseBtn.textContent = "A message just for you ❤️";

        hiddenMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {

        surpriseBtn.textContent = "Open your little message ✨";

    }

});


// ==============================
// 3. CONSOLE MESSAGE
// ==============================

console.log("A little website made with friendship and kindness ❤️");