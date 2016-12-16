import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";

@Component({
	selector: 'weather-search',
	template: '<section class="weather-search"><form (ngSubmit)="onSubmit(f)" #f="ngForm" class="col-lg-12 text-center v-center"><label for="city" style="margin: 5px;font-size:20px;">City  </label><input ngControl="location" type="text" id="city" required style="background-color: #102;width: 20em;height: 02.3em;"><button type="submit" style="margin: 8px;color: white;background-color: #102;width: 10em;height: 2.3em;">Search City</button></form></section>',
	
})
export class WeatherSearchComponent {
	constructor (private _weatherService: WeatherService){

	}
	onSubmit(form: ControlGroup){
		this._weatherService.SearchWeatherData(form.value.location)
		.subscribe(
				data => {
					const weatherItem = new WeatherItem(data.name, data.weather[0].description,data.main.temp);
					this._weatherService.addWeatherItem(weatherItem);
				}
			);
	}
}