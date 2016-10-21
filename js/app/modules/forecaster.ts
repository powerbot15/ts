import {RequesterService} from '../services/weather-requester'

interface Tpl {

    searchInput : JQuery,

    searchButton : JQuery

}

export class Forecaster {

    $el : JQuery;

    tpl : Tpl;

    constructor ($el : JQuery) {

        this.$el = $el;

        this.initTpl();

        this.listenEvents();

    }

    renderForecast (serviceResponse : any) {

        console.dir(serviceResponse)

    }

    private initTpl () : Forecaster {

        this.tpl = {

            searchInput : this.$el.find('[data-input-city]'),

            searchButton : this.$el.find('[data-search]')

        };

        return this;

    }

    private listenEvents () : Forecaster {

        this.tpl.searchButton.on('click', (e : JQueryEventObject) => {

            e.preventDefault();

            RequesterService.getWeather(this.tpl.searchInput.val(), this.renderForecast, this);

        });

        return this;

    }

}