define('modules/image-loader', [], function () {

    interface ImageComponentTPL {

        originalImg : JQuery;

        imgFile : JQuery;

        compressBtn : JQuery;

    }


    class ImageLoader{

        $el : JQuery;

        tpl : ImageComponentTPL;

        fileReader : FileReader;

        constructor($el : JQuery){

            this.$el = $el;

            this.initTpl();

            this.initFileReader();

            this.listenEvents();

        }

        initTpl () {

            this.tpl = {

                originalImg : this.$el.find('[data-original-image]'),

                imgFile : this.$el.find('[data-image-file]'),

                compressBtn : this.$el.find('[data-compress-button]')
            };

        }

        initFileReader () {

            this.fileReader = new FileReader();

        }

        listenEvents () {

            this.tpl.imgFile.on('change', (e : any) => {

                this.fileReader.readAsDataURL(e.target.files[0]);

            });

            this.fileReader.onloadend = (e) => {

                this.tpl.originalImg.prop('src', this.fileReader.result);

            }

        }

    }

    return ImageLoader;

});