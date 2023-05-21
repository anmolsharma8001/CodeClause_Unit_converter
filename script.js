const millimeterEl = document.querySelector("#millimeter");
const centimeterEl = document.querySelector("#centimeter");
const meterEl = document.querySelector("#meter");
const kilometerEl = document.querySelector("#kilometer");

function millimeter(value) {
	if(value<=0){
		alert("0 is invalid input!");
		document.getElementById("millimeter").value=1;
		millimeter(1);
	}
	else{
	centimeterEl.value = value / 10;
	meterEl.value = value / 1000;
	kilometerEl.value = value / 1000000;
}
}

function centimeter(value) {
	if(value<=0){
		alert("0 is invalid input!");
		document.getElementById("centimeter").value=1;
		centimeter(1);
	}
	else{
	millimeterEl.value = value * 10;
	meterEl.value = value / 100;
	kilometerEl.value = value / 100000;
	}
}

function meter(value) {
	if(value<=0){
		alert("0 is invalid input!");
		document.getElementById("meter").value=1;
		meter(1);
	}
	else{
	millimeterEl.value = value * 1000;
	centimeterEl.value = value * 100;
	kilometerEl.value = value / 1000;
	}
}

function kilometer(value) {
	if(value<=0){
		alert("0 is invalid input!");
		document.getElementById("kilometer").value=1;
		kilometer(1);
	}
	else{
	millimeterEl.value = value * 1000000;
	centimeterEl.value = value * 10000;
	meterEl.value = value * 1000;
	}
}

 document.getElementById("wrapper").style.visibility = "";
 document.getElementById("value").addEventListener("input", function(e){
    document.getElementById("wrapper").style.visibility = "";
     let kgInput = e.target.value;
     document.getElementById("gramResult").value = kgInput*1000;
     document.getElementById("poundsResult").value = kgInput*2.205;
     document.getElementById("Mgram").value = kgInput*1000000;
 });
 document.getElementById("gramResult").addEventListener("input", function(e){
    document.getElementById("wrapper").style.visibility = "";
     let gInput = e.target.value;
     document.getElementById("poundsResult").value = gInput*0.00220462;
     document.getElementById("value").value = gInput/1000;
     document.getElementById("Mgram").value = gInput*1000;
 });
 document.getElementById("Mgram").addEventListener("input", function(e){
    document.getElementById("wrapper").style.visibility = "";
     let gInput = e.target.value;
     document.getElementById("poundsResult").value = gInput*2.2046;
     document.getElementById("value").value = gInput/1000000;
     document.getElementById("gramResult").value = gInput/1000;
 });


 document.getElementById("poundsResult").addEventListener("input", function(e){
    document.getElementById("wrapper").style.visibility = "";
     let pInput = e.target.value;
     document.getElementById("gramResult").value = pInput*453.592;
     document.getElementById("value").value = pInput/2.205;
     document.getElementById("Mgram").value = pInput*453592;
 });
 function box1_show(){
	document.getElementById("box1").style.display="block";
	document.getElementById("box2").style.display="none";
 }
 function box2_show(){
	document.getElementById("box2").style.display="block";
	document.getElementById("box1").style.display="none";
	
 }