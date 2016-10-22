import {RequesterService} from '../services/weather-requester'

interface Tpl {

    searchInput : JQuery,

    searchButton : JQuery,

    foundName : JQuery,

    foundCountry : JQuery

}

interface Model {

    cityName : string

}

export class Forecaster {

    $el : JQuery;

    tpl : Tpl;

    model : Model;

    constructor ($el : JQuery) {

        this.$el = $el;

        this.initTpl().initModel().listenEvents();

    }

    renderForecast (error : any, serviceResponse : any) {

        console.dir(serviceResponse);

        if(error){

            alert(error.statusText);

            return;

        }

        this.tpl.foundName.text(serviceResponse.city.name);

        this.tpl.foundCountry.text(serviceResponse.city.country);

    }

    private initTpl () : Forecaster {

        this.tpl = {

            searchInput : this.$el.find('[data-input-city]'),

            searchButton : this.$el.find('[data-search]'),

            foundName : this.$el.find('[data-city-name]'),

            foundCountry : this.$el.find('[data-city-country]')

        };

        return this;

    }

    private initModel () : Forecaster {

        this.model = {

            cityName : ''

        };

        return this;

    }

    private listenEvents () : Forecaster {

        this.tpl.searchButton.on('click', (e : JQueryEventObject) => {

            e.preventDefault();

            this.model.cityName = this.tpl.searchInput.val();

            if(this.model.cityName.trim().length){

                RequesterService.getWeather(this.model.cityName, this.renderForecast, this);

            }
            else{

                alert('Empty city value!');

                console.log('test');
            }


        });

        return this;

    }

}