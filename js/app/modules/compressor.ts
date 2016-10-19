export class Compressor {

        canvas : HTMLCanvasElement;

        ctx : any;

        constructor () {

            this.canvas = document.createElement('canvas');

            this.ctx = this.canvas.getContext('2d');

        }

        imgToCode (img : HTMLImageElement) {

            console.log('started');
            console.log((new Date()).toString());

            this.canvas.width = img.naturalWidth;

            this.canvas.height = img.naturalHeight;

            this.ctx.drawImage(img, 0, 0);

            let data = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;

            console.log(data.length / 4);

            let arrayOfCompressed : any[] = [];

            let colorR = data[0];
            let colorG = data[1];
            let colorB = data[2];
            let alpha = data[3];
            let length = 1;

            arrayOfCompressed.push({colorR, colorG, colorB, alpha, length});

            for( let i = 4; i < data.length; i += 4){

                if(colorR == data[i] && colorG == data[i + 1] && colorB == data[i + 2]){
                    arrayOfCompressed[arrayOfCompressed.length - 1].length ++;
                }
                else{
                    colorR = data[i];
                    colorG = data[i + 1];
                    colorB = data[i + 2];
                    alpha = data[i + 3];
                    length = 1;
                    arrayOfCompressed.push({colorR, colorG, colorB, alpha, length});
                }

            }

            console.log('completed');
            console.log((new Date()).toString());

            console.log(arrayOfCompressed.length);

            for(let i = 0; i < arrayOfCompressed.length; i++){
                if(arrayOfCompressed[i].length > 1){
                    console.dir(arrayOfCompressed[i]);
                    break;
                }
            }


            // document.querySelector('body').appendChild(this.canvas);

        }

    }
