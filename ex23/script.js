// Vitória Karoline de Carvalho Bernardo
const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
  };
  
  const cityInput = document.getElementById('cityInput');
  const button = document.getElementById('button-addon2');
  const city = document.querySelector('.city');
  const date = document.querySelector('.date');
  const container_img = document.querySelector('.container-img img');
  const container_temp = document.querySelector('.container-temp div');
  const temp_unit = document.querySelector('.container-temp span');
  const low_high = document.querySelector('.low-high');
  const weather_t = document.querySelector('.weather');
  
  button.addEventListener('click', () => {
    getWeatherData(cityInput.value);
  });
  
  cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      getWeatherData(cityInput.value);
    }
  });
  
  function getWeatherData(cityName) {
    fetch(`${api.base}weather?q=${cityName}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        displayWeatherData(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        alert('Erro ao buscar dados. Por favor, tente novamente.');
      });
  }
  
  function displayWeatherData(data) {
    city.textContent = `${data.name}, ${data.sys.country}`;
    date.textContent = formatDate(new Date());
    container_img.src = `./icons/${data.weather[0].icon}.png`;
    container_temp.textContent = Math.round(data.main.temp);
    temp_unit.textContent = '°c';
    low_high.textContent = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`;
    weather_t.textContent = capitalizeFirstLetter(data.weather[0].description);
  }
  
  function formatDate(date) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('pt-BR', options);
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  