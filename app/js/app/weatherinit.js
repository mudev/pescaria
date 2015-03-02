$(function() {
	$('.weather-temperature').openWeather({
		city: 'Toronto, ON',
		descriptionTarget: '.weather-description',
		windSpeedTarget: '.weather-wind-speed',
		minTemperatureTarget: '.weather-min-temperature',
		maxTemperatureTarget: '.weather-max-temperature',
		humidityTarget: '.weather-humidity',
		sunriseTarget: '.weather-sunrise',
		sunsetTarget: '.weather-sunset',
		placeTarget: '.weather-place',
		iconTarget: '.weather-icon',
		customIcons: '../src/img/icons/weather/',
		success: function() {
			//show weather
			$('.weather-wrapper').show();
		},
		error: function(message) {
			console.log(message);
		}
	});
});