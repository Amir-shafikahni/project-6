let $ = document;

//////////////////////////////

function randomBackground() {
  let bodyBackgroundsUrl = [
    "../Images/img-0.jpg",
    "../Images/img-1.jpg",
    "../Images/img-2.jpg",
    "../Images/img-3.jpg",
    "../Images/img-4.jpg",
    "../Images/img-5.jpg",
  ];
  let body = document.body;
  let randomUrl = Math.floor(Math.random() * 6);
  body.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)) ," +
    "url(" +
    bodyBackgroundsUrl[randomUrl] +
    ")";
}
randomBackground();

let citiesData = [
  {
    name: "tehran",
    tempreture: "12",
    weatherType: "cloudy",
    humidity: "20%",
    windSpeed: "8 km/h",
  },
  {
    name: "mashhad",
    tempreture: "30",
    weatherType: "sunny",
    humidity: "1%",
    windSpeed: "1 km/h",
  },
  {
    name: "shiraz",
    tempreture: "48",
    weatherType: "windy",
    humidity: "12%",
    windSpeed: "5 km/h",
  },
  {
    name: "tabriz",
    tempreture: "5",
    weatherType: "rainy",
    humidity: "17%",
    windSpeed: "4 km/h",
  },
  {
    name: "esfahan",
    tempreture: "13",
    weatherType: "sunny",
    humidity: "16%",
    windSpeed: "5 km/h",
  },
  {
    name: "zanjan",
    tempreture: "16",
    weatherType: "cloudy",
    humidity: "16%",
    windSpeed: "12 km/h",
  },
  {
    name: "khozestan",
    tempreture: "22",
    weatherType: "windy",
    humidity: "5%",
    windSpeed: "9 km/h",
  },
  {
    name: "qazvin",
    tempreture: "29",
    weatherType: "snowy",
    humidity: "3%",
    windSpeed: "10 km/h",
  },
  {
    name: "qom",
    tempreture: "31",
    weatherType: "rainy",
    humidity: "28%",
    windSpeed: "3 km/h",
  },
];

let searchInput = $.querySelector(".searchInput");
let searchButton = $.querySelector(".searchButton");
let mainCity;
let mainCityInfo;
let infoBox = $.querySelector(".infoBox");
let infoBoxWeatherIcon = $.querySelector(".weatherIcon");
let invalidCityNameEror = $.querySelector(".invalidCityNameEror");

searchButton.addEventListener("click", function () {
  mainCity = searchInput.value;
  mainCityInfo = citiesData.find(function (city) {
    return city.name === mainCity;
  });
  if (mainCityInfo) {
    infoBox.style.display = "block";
    $.querySelector(".cityName").innerHTML = "Weather in " + mainCityInfo.name;
    $.querySelector(".tempreture").innerHTML = mainCityInfo.tempreture + "°c";
    $.querySelector(".weatherType").innerHTML = mainCityInfo.weatherType;
    $.querySelector(".humidity").innerHTML ="Humidity: " +  mainCityInfo.humidity;
    $.querySelector(".windSpeed").innerHTML ="Windspeed: " + mainCityInfo.windSpeed;
  } else {
    infoBox.style.display = "none"
    invalidCityNameEror.style.display = "block";
    setTimeout(function () {
      invalidCityNameEror.style.display = "none";
    }, 5000);
  }
  if (mainCityInfo.weatherType === "sunny") {
    infoBoxWeatherIcon.classList.add("fa-sun");
  } else if (mainCityInfo.weatherType === "cloudy") {
    infoBoxWeatherIcon.classList.add("fa-cloud-sun");
  } else if (mainCityInfo.weatherType === "windy") {
    infoBoxWeatherIcon.classList.add("fa-wind");
  } else if (mainCityInfo.weatherType === "rainy" || "snowy") {
    infoBoxWeatherIcon.classList.add("fa-cloud-showers-heavy");
  }
});