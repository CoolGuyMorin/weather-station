// Adafruit IO REST API URL
const API_URL = `https://io.adafruit.com/api/v2/coolguy_morin4/feeds/humidity`;
// Fetch data from Adafruit IO
fetch(API_URL)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log("Fetched Data:", data); // Print data to console
    // Optionally display data on a webpage
    displayHumidity(data)
    //document.getElementById("temperature").innerText = JSON.stringify(data["last_value"], null, 2);
})
.catch(error => {
    console.error("Error fetching data:", error);
});

function displayHumidity(data){
    const hum = data["last_value"];
    const tempDiv = document.getElementById("humidity");

    const heading = document.createElement("h6");
    heading.innerHTML = "Humidity = " + hum + " %";
    tempDiv.appendChild(heading);

}
