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
    displayData(data)
    //document.getElementById("temperature").innerText = JSON.stringify(data["last_value"], null, 2);
})
.catch(error => {
    console.error("Error fetching data:", error);
});

function displayData(data){
    const display = data["last_value"];
    const displayDiv = document.getElementById("temperature");

    const heading = document.createElement("h6");
    heading.innerHTML = "Temperature = " + display + " degrees Celcius";
    displayDiv.appendChild(heading);

}
