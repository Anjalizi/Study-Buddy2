window.onload=function myFunction() {

var ans=0;
var para = document.createElement("p");
para.style.color="white"
var a=Math.floor((Math.random() * 10) + 1);
var b=Math.floor((Math.random() * 9)+1);

 if(a<b){
	 var temp=a;
	 a=b;
	 b=a;
	 }

var num1 = document.createTextNode(a);  
var num2 = document.createTextNode(b);
var op = Math.floor((Math.random() * 3) + 1);

	var value;
	

	if(op==3){
	value=document.createTextNode(" + ");	    
	ans=a+b;
	}

	else if(op==1){
	 value=document.createTextNode(" - ");
	 
	 ans=a-b;
	}
	else if(op==2){
	 value=document.createTextNode(" X ");
	 ans=a*b;
	}

	
 

	para.appendChild(num1);
	para.appendChild(value);
	para.appendChild(num2);

	var element = document.getElementById("div1");
	element.appendChild(para);
	
	var chance=0

	document.getElementById("pause-record-btn").addEventListener('click',function(){
		if(ans == document.getElementById("note-textarea").value){
			var str="Correct!"
			 readOutLoud(str)
		} else{
			chance++
			if(chance==3){
			var speak="Sorry! You are out of chances! The correct answer is "+ans
			readOutLoud(speak)
			}
			else{
				var str="Please Try Again!"
				readOutLoud(str)
			}
		}
	})

		 
}