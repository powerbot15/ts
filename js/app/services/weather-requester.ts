let RequesterService = {

    getWeather : function (cityName : string, callback : Function, context : any) {

        $.get(`//api.openweathermap.org/data/2.5/forecast?q=${cityName},&APPID=b595a500daacfaa71158e3af1ff44f08&mode=json`)

        .done((response)=>{

            callback.call(context, null, response);

        })
        .fail((error) => {
            callback.call(context, error, null);
        });

    }

};

export {RequesterService}