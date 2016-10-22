interface Template {

    weatherIcon : JQuery

}

export class WeatherCard {

    $el : JQuery;

    tpl : Template;

    model : any;

    constructor (templateString : string, cardData : any) {

        this.$el = $(templateString);

        this.model = cardData;

        this.initTpl();

        this.render();

    }

    initTpl () : WeatherCard {

        this.tpl = {
            weatherIcon : this.$el.find('[data-icon]')
        };

        return this;

    }

    render () {

        let iconType = this.model.weather[0].icon;

        let url = `http://openweathermap.org/img/w/${iconType}.png`;

        this.tpl.weatherIcon.prop('src', url);

    }

    destroy () {

        this.$el.remove();

    }

}