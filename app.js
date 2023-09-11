const $ = document;
const allData = {
  Iran: ["Tehran", "Guilan", "Esfehan", "Khuzestan", "Shiraz"],
  Usa: ["New York", "Los Angeles", "Chicago", "Seattle", "San Francisco"],
  England: ["Nottingham", "Manchester", "Liverpool", "London", "Derby"],
  Germany: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Bremen"],
};
let country = null;
let countrySelect = $.getElementById("country");
let citySelcet = $.getElementById("city");
let newCity = null;
countrySelect.addEventListener("change", () => {
    citySelcet.innerHTML =`<option value="select">Please select City...</option>`
  country = countrySelect.value;
  allData[country].forEach((city) => {
      newCity = $.createElement("option")
    newCity.innerHTML = city;
    console.log(newCity);
    citySelcet.append(newCity)
  });
});
