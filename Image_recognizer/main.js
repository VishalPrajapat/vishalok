Webcam.set({
    width:320,
    height:400,
    image_format:'png',
    png_quality: 100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VfVqGd30H//model.json',modelLoaded);
function modelLoaded(){
    console.log('model Loaded');

}
function check(){
    img=document.getElementById('captured_image');
 classifier.classify(img,gotresult)
}
function gotresult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("resultobjectname").innerHTML=results[0].label;
document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.tofixed(3);

}
}







































