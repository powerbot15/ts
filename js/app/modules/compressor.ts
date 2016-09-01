define('modules/compressor', [], () => {



    class Compressor {

        canvas : HTMLCanvasElement;

        ctx : any;

        constructor () {

            this.canvas = document.createElement('canvas');

            this.ctx = this.canvas.getContext('2d');

        };

        imgToCode (img : HTMLImageElement) {

            img.addEventListener('load', (e) => {

                this.canvas.width = img.naturalWidth;

                this.canvas.height = img.naturalHeight;

                this.ctx.drawImage(img);

                document.appendChild(this.canvas);

            });

        }

    }

    return Compressor;

});