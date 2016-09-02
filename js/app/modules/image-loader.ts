import {Compressor} from './compressor'

interface ImageComponentTPL {

    originalImg : JQuery;

    imgFile : JQuery;

    compressBtn : JQuery;

}

export class ImageLoader{

    $el : JQuery;

    tpl : ImageComponentTPL;

    fileReader : FileReader;

    compressor : Compressor;

    constructor($el : JQuery){

        this.$el = $el;

        this.compressor = new Compressor();

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

        this.fileReader.onloadend = () => {

            this.tpl.originalImg.prop('src', this.fileReader.result);

        };

        this.tpl.compressBtn.on('click', (e : any) => {

            e.preventDefault();

            this.compressor.imgToCode(this.tpl.originalImg.get(0) as HTMLImageElement);

        })

    }

}
