interface Template {

    weatherIcon : JQuery,

    weatherDesc : JQuery

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

            weatherIcon : this.$el.find('[data-icon]'),

            weatherDesc : this.$el.find('[data-description]')

        };

        return this;

    }

    render () {

        let iconType = this.model.weather[0].icon;

        let description = this.model.weather[0].description;

        let url = `http://openweathermap.org/img/w/${iconType}.png`;

        this.tpl.weatherIcon.prop('src', url);

        this.tpl.weatherDesc.text(description);

    }

    destroy () {

        this.$el.remove();

    }

}