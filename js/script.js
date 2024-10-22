//////////////////////////////////////////////////////////////////////////////
/*
자바 스크립트
*/

//////////////////////////////////////////////////////////////////////////////

//Menu Open/Close
function clickshow(num){
	menu = document.getElementById("block"+num);
	if( menu != null && typeof menu != "undefined" )
		{
			if (menu.style.display=="block"){
			menu.style.display="none";//Close
		}
	else{
		menu.style.display="block";//Sub Menu Open
		}
	}
}

//Menu Open/Close End
function clickblock(num) {
    try {
        for (i = 1; i <= 100; i++) {
            var menu = eval("cblock" + i + ".style");

            if (num == i) { menu.display = "block"; }
            else { menu.display = "none"; }
        }
    }
    catch (exception) {
    }
}

//////////////////////////////////////////////////////////////////////////////

// Text Size
function ResizeFont(num) {
	var content, fontSize, lineHeight, proc;
	content = document.getElementById("newsContentArea");

	fontSize = content.style.fontSize;
	fontSize = fontSize.replace("px", "");
	lineHeight = content.style.lineHeight;
	lineHeight = lineHeight.replace("px", "");

	proc = false;
	if (num > 0) {
		if (fontSize <= 18) {
			proc = true;
		}
	}
	else {
		if (fontSize > 12)
			proc = true;
	}

	if (proc) {
		fontSize = parseInt(fontSize) + parseInt(num);
		lineHeight = Math.round(1.4 * fontSize);
		content.style.fontSize = fontSize + "px";
		content.style.lineHeight = lineHeight + "px";
	}
}
// Text Size