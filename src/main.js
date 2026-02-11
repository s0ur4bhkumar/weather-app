const city = document.getElementById("city");
const searchBtn = document.querySelector("form > button");
const form = document.querySelector("form");

async function getData(cityName) {
  try {
    const cityDetail = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=F2KWLQ3KTZ2TUM2EGXKH39RVJ`,
    );
    const data = await cityDetail.json();
    // console.log(data);
    return data.currentConditions.temp
  } catch (e) {
    console.log(e);
  }
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  (async function addToPage() {
    const temp = await getData(city.value);
    console.log(temp)
  })()
  form.reset();

});

// console.log(await temp)
