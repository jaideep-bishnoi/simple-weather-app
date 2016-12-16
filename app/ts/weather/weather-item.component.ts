import {Component} from 'angular2/core';
import {WeatherItem} from './weather-item';	

@Component({
	selector: 'weather-item',
	template: '<article class="col-lg-12 text-center v-center weather-element"><div class="col-md-8"><h3>{{ weatherItem.cityName }}</h3><p class="weather-type">{{ weatherItem.description }}</p></div><div class="col-md-4"><span class="temperature">{{ weatherItem.temperature }}° C</span></div></article>',
	styleUrls: ['app/css/weather-item.css'],
	inputs: ['weatherItem:item'],
})

export class WeatherItemComponent {
	weatherItem: WeatherItem;
}
