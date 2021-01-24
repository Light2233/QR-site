let text = 'https://www.youtube.com/watch?v=n6JnnqDxkYA';

let typeNumber = 3;
let errorLevel = 'L';
let qrDiv = document.getElementById('qr');

let qr1 = qrcode(typeNumber, errorLevel);

qr1.addData(text);
qr1.make();
qrDiv.innerHTML += `my text:<br> '${text}'<br>`;
qrDiv.innerHTML += qr1.createSvgTag(8,10);
qrDiv.innerHTML += qr1.createImgTag(3,10) + '<br>';
text = qrcode.stringToBytes(text);
qrDiv.innerHTML += text.join('')+ '<br>';
qrDiv.innerHTML+= String.fromCharCode(...text);



