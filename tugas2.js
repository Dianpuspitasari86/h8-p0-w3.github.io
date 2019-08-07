function balikString(kalimat) {
var huruf = '';
for(var i = kalimat.length - 1; i >= 0; i--) {
    huruf += kalimat[i];
}
return huruf;
}
var print = balikString('hello world!');
    console.log(print);