function park(){
	
	$('#signal').remove()
	var carNum = document.getElementById("carNum").value;
	if(carNum.length!=5){alert("Car Number should be of 5 characters"); return false;}
	var carSize = document.getElementById("carSize").value;
	
	$.post("http://localhost:8080/park",
		    {
		        size: carSize,
		        carNum: carNum
		    },
		    function(data, status){
		        alert("Data: " + data + "\nStatus: " + status);
		        var len = data.length;
		        if(len>12){
		        	document.getElementById("park").innerHTML = data;
						var div = document.createElement('div');
						div.setAttribute("id","signal");
			        	div.style.color = 'red';
			        	div.style.background = 'red';
			        	div.style.top = '70%';
			        	div.style.left = '50%';
			        	div.style.position = 'fixed';
			        	div.style.height = '50px';
			        	div.style.width = '50px';
			        	document.body.appendChild(div);
					}	
					
		        else{
		        document.getElementById("park").innerHTML = "Your Parking Number is "+data;
		        var div = document.createElement('div');
				div.setAttribute("id","signal");
				div.style.color = 'green';
	        	div.style.background = 'green';
	        	div.style.top = '70%';
	        	div.style.left = '50%';
	        	div.style.position = 'fixed';
	        	div.style.height = '50px';
	        	div.style.width = '50px';
	        	document.body.appendChild(div);
		        }
		    });
}


function checkout(){
	$('#signal').remove();
	var carNum = document.getElementById("carNum").value;
	var parkNum = document.getElementById("parkNum").value;
	if(carNum.length!=5){alert("Car Number should be of 5 characters"); return false;}
	if(parkNum.length!=5){alert("Parking Number should be of 5 digits"); return false;}
	
	$.post("http://localhost:8080/checkout",
		    {
		        parkNum: parkNum,
		        carNum: carNum
		    },
		    function(data, status){
		        alert("Data: " + data + "\nStatus: " + status);
		        var len = data.length;
		        if(len>12){
		        	var div = document.createElement('div');
					div.setAttribute("id","signal");
		        	div.style.color = 'red';
		        	div.style.background = 'red';
		        	div.style.top = '70%';
		        	div.style.left = '50%';
		        	div.style.position = 'fixed';
		        	div.style.height = '50px';
		        	div.style.width = '50px';
		        	document.body.appendChild(div);
		        }else{
		        	var div = document.createElement('div');
					div.setAttribute("id","signal");
					div.style.color = 'green';
		        	div.style.background = 'green';
		        	div.style.top = '70%';
		        	div.style.left = '50%';
		        	div.style.position = 'fixed';
		        	div.style.height = '50px';
		        	div.style.width = '50px';
		        	document.body.appendChild(div);
		        }
		    });
	
}

	function blockSpecialChar(e){
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
	
	function isNumber(evt) {
	    evt = (evt) ? evt : window.event;
	    var charCode = (evt.which) ? evt.which : evt.keyCode;
	    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	        return false;
	    }
	    return true;
	}