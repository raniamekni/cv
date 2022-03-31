function showhide(idd){
		  if (document.getElementById(idd).style.display=='none')
		    document.getElementById(idd).style.display='inline';
		  else
		    document.getElementById(idd).style.display='none';
		  return false;
		};

document.getElementsByClassName = function(cl) {
	var retnode = [];
	var myclass = new RegExp('\\b'+cl+'\\b');
	var elem = this.getElementsByTagName('*');
	for (var i = 0; i < elem.length; i++) {
		var classes = elem[i].className;
		if (myclass.test(classes)) retnode.push(elem[i]);
	}
	return retnode;
};

function showinlines(){
	var divs = document.getElementsByClassName("inline");
	for(var i = 0; i < divs.length; i++){
		divs[i].style.display = 'inline';
	}
};

function hideall(){
	var divs = document.getElementsByClassName("inline");
	for(var i = 0; i < divs.length; i++){
		divs[i].style.display = 'none';
	}
};

function print_info()
{
	var headstr = "<html><head><title></title></head><body>";
	var footstr = "</body>";
	var newstr = document.getElementById("main_info").innerHTML;
	var oldstr = document.body.innerHTML;
	document.body.innerHTML = headstr+newstr+footstr;
	window.print();
	document.body.innerHTML = oldstr;
	return false;
}