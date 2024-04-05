document.getElementById('submitBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Por favor, insira uma cidade e uma data.');
        return;
    }

    const apiKey = 'a37af1b76d4d22f6b611cecc2c33eba7'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter dados da API');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = `
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Tempo: ${data.weather[0].description}</p>
                <p>Umidade: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao obter dados da API:', error);
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = `<p>Erro ao carregar dados da previsão do tempo</p>`;
        });
});