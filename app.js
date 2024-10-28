function getNamazTiming() {
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;

    if (city === "" || country === "") {
        document.getElementById("timings").innerHTML = 
            "<p>Please enter both city and country.</p>";
        return;
    }

    var url = `https://api.aladhan.com/v1/timingsByCity/28-10-2024?city=${city}&country=${country}`;

    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Failed to fetch timings. Status: " + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            var timings = data.data.timings;
            document.getElementById("timings").innerHTML =
                "<h3>Namaz Timings for " + city + ", " + country + "</h3>" +
                "<p>Fajr: " + timings.Fajr + "</p>" +
                "<p>Dhuhr: " + timings.Dhuhr + "</p>" +
                "<p>Asr: " + timings.Asr + "</p>" +
                "<p>Maghrib: " + timings.Maghrib + "</p>" +
                "<p>Isha: " + timings.Isha + "</p>";
        })
        .catch(function(error) {
            document.getElementById("timings").innerHTML = 
                "<p>Error fetching namaz timings. Please try again later.</p>";
            console.log(error);
        });
}