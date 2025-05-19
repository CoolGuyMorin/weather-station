// Adafruit IO REST API URL
const API_URL = `https://io.adafruit.com/api/v2/coolguy_morin4/feeds/temperature`;

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
    displayTemp(data)
    //document.getElementById("temperature").innerText = JSON.stringify(data["last_value"], null, 2);
})
.catch(error => {
    console.error("Error fetching data:", error);
});

function displayTemp(data){
    const temp = data["last_value"];
    const tempDiv = document.getElementById("temperature");

    const heading = document.createElement("h6");
    heading.innerHTML = "Temperature = " + temp + " degrees Celcius";
    tempDiv.appendChild(heading);

}
