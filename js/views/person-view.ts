define('views/person-view', [], () => {

    class PersonView {

        $el : JQuery;

        constructor ($el : JQuery) {

            this.$el = $el

        }

        showPersonName (name : string) : PersonView {

            this.$el.text(name);

            return this;
        }

    }

    return PersonView;

});