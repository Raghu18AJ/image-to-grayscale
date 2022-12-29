var image;
var image1;
function upload(){
  var canvas = document.getElementById("can");
  var fileinput =document.getElementById("finput");
  // var filename =fileinput.value;
  // alert("you chose" + " " + filename);
   image = new SimpleImage(fileinput);
  image.drawTo(canvas);
  image1 = new SimpleImage(fileinput);

}
function makeGray(){
  for (var pixel of image1.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    var imgcanvas = document.getElementById("can1");
    image1.drawTo(imgcanvas);
    
  }
}