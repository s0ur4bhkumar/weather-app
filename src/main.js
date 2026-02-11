const city = document.getElementById("city");
const searchBtn = document.querySelector("form > button");
const form = document.querySelector("form");
const p = document.createElement("p");
const container = document.querySelector(".container");

async function getData(cityName) {
  try {
    const cityDetail = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=F2KWLQ3KTZ2TUM2EGXKH39RVJ`,
    );
    const data = await cityDetail.json();
    // console.log(data);
    return data.currentConditions.temp;
  } catch (e) {
    console.log(e);
  }
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const head = document.createElement("h1");
  head.textContent = city.value;
  (async function addToPage() {
    const temp = await getData(city.value);
    p.textContent = `${temp}`;
    container.append(head, p);
  })();
  form.reset();
});

// console.log(await temp)
