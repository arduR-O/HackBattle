import express from "express";
const app = express();
const port = 8000;
//  import img from './assets/gpay';
import Tesseract from 'tesseract.js';

function isInteger(str) {
    // Use parseInt() to attempt conversion
    const integer = parseInt(str);
    
    // Check if the result is a finite number (not NaN) and has no decimal part
    return Number.isFinite(integer) && Number.isInteger(integer);
  }

async function getTotalOffline(){
    Tesseract.recognize(
  'https://pbs.twimg.com/media/FJPCYCdaMAMT1O3.jpg',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log("\nHello");
  //console.log(text);
//   for(let i in text.split("\n")){
//     console.log(text[i]);
//   }
const lst=text.split("\n");
console.log(lst);
var num=0;
for(let i in lst){
    if(lst[i].toLowerCase().includes("total")){
        const index=lst[i].toLowerCase().indexOf("total");
        const spl=lst[i].slice(index,lst[i].length);
        console.log(spl.split(" "));
        const smth=spl.split(" ");
        for(let j in smth){
                if(isInteger(smth[j])){
                    if(smth[j]>num){
                        num=smth[j];
                    }
                };

        }
    }
}
console.log(num);
}).catch((err)=>{
    console.log(err);
});
}
//getTotalOffline();

async function getTotalOnline(){
    Tesseract.recognize(
  'https://cdsassets.apple.com/live/7WUAS350/images/ios/ios-16-iphone-14-pro-wallet-apple-card-latest-transactions.png',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log("\nHello");
  //console.log(text);
//   for(let i in text.split("\n")){
//     console.log(text[i]);
//   }
const lst=text.split("\n");
console.log(lst);
var arr=[];
for(let i in lst){
    if(lst[i].toLowerCase().includes("$")){
        const index=lst[i].toLowerCase().indexOf("$");
        const spl=lst[i].slice(index+1,lst[i].length);
        //console.log(spl.split(" "));
        const smth=spl.split(" ");
        //console.log("\nHello");
        //console.log(smth);
        for(let j in smth){
                if(isInteger(smth[j])){
                        arr.push(parseFloat(smth[j]));
                    
                };

        }
    }
}
console.log(arr);
//console.log(arr.length);
}).catch((err)=>{
    console.log(err);
});
}

//getTotalOnline();









app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });