/*-----------------------------------------------
* 自動執行的function：
* 在function( ) { }的前後加上括號( )指示為表達式，
* 並於最後加上( )，來自動執行表達式。
* 像這樣：(function(){})();
*-----------------------------------------------*/




(function () {
	
	/*預先載入圖片*/
	function preloadImg(image) {
	   var img = new Image();
	   img.src = image;
	}
	
	var pics = [
	'a1','end','a1e','a1e2','a1door',
	'a2','a2e','a2e2',
	'a3','a3e',
	'a4','a4e','a4e2',
	'a2b','a2b2',
	'a2br','a2bre','a2bre2',
	'a2bl','a2ble','a2ble2',
	'light','towel','machinerat','plate','soup','doorkey','moonlight','submit','put'];

	for(var i=0;i<pics.length;i++){
		command = "preloadImg('img/"+pics[i]+".png');"
		eval(command);
	}
	

/* -------------------------------------------------------------------
* 頁面匯入時的處理
* ----------------------------------------------------------------- */
window.addEventListener("load", function() {
	
	// 取得拖曳元素
	//var els = document.querySelectorAll('#srcarea [class=item]');
	var els = document.querySelectorAll('.item'); //soup,moonlight,doorkey 沒裝到監聽器
	
	for (var i=0; i<els.length; i++) {
		//給拖曳元素追加dragstart事件(拖動開始時)的處理程式碼
		els[i].addEventListener('dragstart', function(evt) {
			
			var elm = evt.target;
			
			//第一個參數為資料格式Text文字格式
			//第二個參數為文字資料(拖動物件元素的id)
			evt.dataTransfer.setData('Text', elm.id); //將id設定進元素
			
			//不讓事件傳導到父元素中
			evt.stopPropagation();
			
		}, false);
	}
	
	
	// 給接受方區域追加各種事件處理
	
	/*---------------------------------
	* Event2_鏡上臉 a4e
	*---------------------------------*/
	//拖動元素進入時
	var droparea_a4e = document.getElementById("droparea-a4e");
	droparea_a4e.addEventListener("dragenter", function(evt){
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動中
	droparea_a4e.addEventListener("dragover", function(evt) {
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動元素被放下時
	droparea_a4e.addEventListener("drop", function(evt) {
		var elm = evt.target;
		var id = evt.dataTransfer.getData('Text'); //指定資料格式Text,取出拖動物件id
		
		//檢查物件
		if(id=="towel"){
			var target = document.getElementById(id); //利用id取得拖動物件
			if(target) {
				
				//取得父元素
				var parentul = document.getElementById('srcarea');//父元素:工具箱(ul)
				var parentli = target.parentNode; //往上層找=拖動元素(target)的父元素(li)

				droparea_a4e.appendChild(target); //移動元素至接受方區域
				parentul.removeChild(parentli);//刪除工具箱(ul)裡的li
				target.hidden=true; //隱藏物件
				
				//更換成乾淨鏡子有密碼的畫面
				document.getElementById('a4e').style.background = "url('img/a4e2.png')";
				document.getElementById('a4e').style.backgroundRepeat = "no-repeat";
				document.getElementById('a4e').style.backgroundSize = "contain";
			}
		}
		
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	
	
	/*---------------------------------
	* Event4_馬克白 a2bre
	*---------------------------------*/
	//拖動元素進入時
	var droparea_a2bre = document.getElementById("droparea-a2bre");
	droparea_a2bre.addEventListener("dragenter", function(evt){
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動中
	droparea_a2bre.addEventListener("dragover", function(evt) {
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動元素被放下時
	droparea_a2bre.addEventListener("drop", function(evt) {
		var elm = evt.target;
		var id = evt.dataTransfer.getData('Text'); //指定資料格式Text,取出拖動物件id
		
		//檢查物件
		if(id=="machinerat"){
			var target = document.getElementById(id); //利用id取得拖動物件
			if(target) {
				
				//取得父元素
				var parentul = document.getElementById('srcarea');//父元素:工具箱(ul)
				var parentli = target.parentNode; //往上層找=拖動元素(target)的父元素(li)

				droparea_a2bre.appendChild(target); //移動元素至接受方區域
				parentul.removeChild(parentli);//刪除工具箱(ul)裡的li
				target.hidden=true; //隱藏物件
				
				//更換成老鼠特製配方的畫面
				document.getElementById('a2bre').style.background = "url('img/a2bre2.png')";
				document.getElementById('a2bre').style.backgroundRepeat = "no-repeat";
				document.getElementById('a2bre').style.backgroundSize = "contain";
			}
		}
		
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	
	
	/*---------------------------------
	* Event 6 裝湯 a1e2
	*---------------------------------*/
	//拖動元素進入時
	var droparea_a1e2 = document.getElementById("droparea-a1e2");
	droparea_a1e2.addEventListener("dragenter", function(evt){
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動中
	droparea_a1e2.addEventListener("dragover", function(evt) {
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動元素被放下時
	droparea_a1e2.addEventListener("drop", function(evt) {
		var elm = evt.target;
		var id = evt.dataTransfer.getData('Text'); //指定資料格式Text,取出拖動物件id
		
		//檢查物件
		if(id=="plate"){
			var target = document.getElementById(id); //利用id取得拖動物件
			if(target) {
				
				//取得父元素
				var parentul = document.getElementById('srcarea');//父元素:工具箱(ul)
				var parentli = target.parentNode; //往上層找=拖動元素(target)的父元素(li)

				droparea_a1e2.appendChild(target); //移動元素至接受方區域
				parentul.removeChild(parentli);//刪除工具箱(ul)裡的li
				target.hidden=true; //隱藏盤子物件
				
				//get soup...
				//創造soup元素(css已設定)
				var soup = document.createElement('div');
				soup.class = "item";
				soup.id = "soup";
				soup.draggable = true;
				
				//給拖曳元素追加dragstart事件(拖動開始時)的處理程式碼
				soup.addEventListener('dragstart', function(evt) {		
					var elm = evt.target;
					//第一個參數為資料格式Text文字格式
					//第二個參數為文字資料(拖動物件元素的id)
					evt.dataTransfer.setData('Text', elm.id); //將id設定進元素
					//不讓事件傳導到父元素中
					evt.stopPropagation();
				}, false);
				
				
				//更改物件大小
				soup.style.width = "60px";
				soup.style.height = "60px";
				
				//創造工具箱容身處
				var toolbox = document.getElementById('srcarea'); //取得工具箱(ul)
				var li = document.createElement("li"); //創造li元素
				toolbox.appendChild(li); //將li加入ul
				
				//物件在li中置中對齊
				li.style.paddingTop = "17px";

				var lis = toolbox.getElementsByTagName("li"); //ul裡所有li組成的陣列
				//新加入的li，所以一定是最後一個節點
				var endli = lis[lis.length-1];
				endli.appendChild(soup); //將soup元素加入工具箱(ul)的li中
				
			}
		}
		
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	
	
	/*---------------------------------
	* Event7 給老鼠們喝湯 a2e
	*---------------------------------*/
	//拖動元素進入時
	var droparea_a2e = document.getElementById("droparea-a2e");
	droparea_a2e.addEventListener("dragenter", function(evt){
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動中
	droparea_a2e.addEventListener("dragover", function(evt) {
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動元素被放下時
	droparea_a2e.addEventListener("drop", function(evt) {
		var elm = evt.target;
		var id = evt.dataTransfer.getData('Text'); //指定資料格式Text,取出拖動物件id
		
		//檢查物件
		if(id=="soup"){
			var target = document.getElementById(id); //利用id取得拖動物件
			if(target) {
				
				//取得父元素
				var parentul = document.getElementById('srcarea');//父元素:工具箱(ul)
				var parentli = target.parentNode; //往上層找=拖動元素(target)的父元素(li)

				droparea_a2e.appendChild(target); //移動元素至接受方區域
				parentul.removeChild(parentli);//刪除工具箱(ul)裡的li
				target.hidden=true; //隱藏盤子物件
				
				//更換成少一隻老鼠畫面
				document.getElementById('a2e').style.background = "url('img/a2e2.png')";
				document.getElementById('a2e').style.backgroundRepeat = "no-repeat";
				document.getElementById('a2e').style.backgroundSize = "contain";
				
				//get moonlight...
				//創造moonlight元素(css已設定)
				var moonlight = document.createElement('div');
				moonlight.class = "item";
				moonlight.id = "moonlight";
				moonlight.draggable = true;
				
				//給拖曳元素追加dragstart事件(拖動開始時)的處理程式碼
				moonlight.addEventListener('dragstart', function(evt) {		
					var elm = evt.target;
					//第一個參數為資料格式Text文字格式
					//第二個參數為文字資料(拖動物件元素的id)
					evt.dataTransfer.setData('Text', elm.id); //將id設定進元素
					//不讓事件傳導到父元素中
					evt.stopPropagation();
				}, false);
				
				//更改物件大小
				moonlight.style.width = "60px";
				moonlight.style.height = "60px";
				
				//創造工具箱容身處
				var toolbox = document.getElementById('srcarea'); //取得工具箱(ul)
				var li = document.createElement("li"); //創造li元素
				toolbox.appendChild(li); //將li加入ul
				
				//物件在li中置中對齊
				li.style.paddingLeft = "10px";

				var lis = toolbox.getElementsByTagName("li"); //ul裡所有li組成的陣列
				//新加入的li，所以一定是最後一個節點
				var endli = lis[lis.length-1];
				endli.appendChild(moonlight); //將moonlight元素加入工具箱(ul)的li中
				
			}
		}
		
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	
	
	/*---------------------------------
	* Event 8 找鑰匙 a3
	*---------------------------------*/
	//拖動元素進入時
	var droparea_a3 = document.getElementById("droparea-a3");
	droparea_a3.addEventListener("dragenter", function(evt){
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動中
	droparea_a3.addEventListener("dragover", function(evt) {
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動元素被放下時
	droparea_a3.addEventListener("drop", function(evt) {
		var elm = evt.target;
		var id = evt.dataTransfer.getData('Text'); //指定資料格式Text,取出拖動物件id
		
		//檢查物件
		if(id=="moonlight"){
			var target = document.getElementById(id); //利用id取得拖動物件
			if(target) {
				
				//取得父元素
				var parentul = document.getElementById('srcarea');//父元素:工具箱(ul)
				var parentli = target.parentNode; //往上層找=拖動元素(target)的父元素(li)

				droparea_a3.appendChild(target); //移動元素至接受方區域
				parentul.removeChild(parentli);//刪除工具箱(ul)裡的li
				target.hidden=true; //隱藏物件
				
				//get doorkey...
				//創造doorkey元素(css已設定)
				var doorkey = document.createElement('div');
				doorkey.class = "item";
				doorkey.id = "doorkey";
				doorkey.draggable = true;
				
				//給拖曳元素追加dragstart事件(拖動開始時)的處理程式碼
				doorkey.addEventListener('dragstart', function(evt) {		
					var elm = evt.target;
					//第一個參數為資料格式Text文字格式
					//第二個參數為文字資料(拖動物件元素的id)
					evt.dataTransfer.setData('Text', elm.id); //將id設定進元素
					//不讓事件傳導到父元素中
					evt.stopPropagation();
				}, false);
				
				//更改物件大小
				doorkey.style.width = "60px";
				doorkey.style.height = "60px";
				
				//創造工具箱容身處
				var toolbox = document.getElementById('srcarea'); //取得工具箱(ul)
				var li = document.createElement("li"); //創造li元素
				toolbox.appendChild(li); //將li加入ul
				
				//物件在li中置中對齊
				li.style.paddingLeft = "17px";

				var lis = toolbox.getElementsByTagName("li"); //ul裡所有li組成的陣列
				//新加入的li，所以一定是最後一個節點
				var endli = lis[lis.length-1];
				endli.appendChild(doorkey); //將doorkey元素加入工具箱(ul)的li中
				
			}
		}
		
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	
	
	/*---------------------------------
	* Event9_開門 a1door
	*---------------------------------*/
	//拖動元素進入時
	var droparea_a1door = document.getElementById("droparea-a1door");
	droparea_a1door.addEventListener("dragenter", function(evt){
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動中
	droparea_a1door.addEventListener("dragover", function(evt) {
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	//拖動元素被放下時
	droparea_a1door.addEventListener("drop", function(evt) {
		var elm = evt.target;
		var id = evt.dataTransfer.getData('Text'); //指定資料格式Text,取出拖動物件id
		
		//檢查物件
		if(id=="doorkey"){
			var target = document.getElementById(id); //利用id取得拖動物件
			if(target) {
				
				//取得父元素
				var parentul = document.getElementById('srcarea');//父元素:工具箱(ul)
				var parentli = target.parentNode; //往上層找=拖動元素(target)的父元素(li)

				droparea_a1door.appendChild(target); //移動元素至接受方區域
				parentul.removeChild(parentli);//刪除工具箱(ul)裡的li
				target.hidden=true; //隱藏物件
				
				//更換成END的畫面
				document.getElementById('a1door').style.background = "url('img/end.png')";
				document.getElementById('a1door').style.backgroundRepeat = "no-repeat";
				document.getElementById('a1door').style.backgroundSize = "contain";
				
				//隱藏bottom連結按鈕
				document.getElementById('btn_doorbottom').style.visibility='hidden';
			}
		}
		
		evt.preventDefault(); //抑制瀏覽器的預設動作,不然拖放無法實現
	}, false);
	
	
}, false);

})();



/*---------------------------------
* Event1_照亮 a2b
*---------------------------------*/
//取得通往a2b的連結按鈕物件
var entrance = document.getElementById('btn_light');
//幫入口物件裝上監聽器
entrance.addEventListener("click", function(){
	//判斷工具箱裡有無light
	var items = document.querySelectorAll('#srcarea [class=item]');
	for(var i=0;i<items.length;i++){
		var tool = items[i].id;
		if(tool=="light"){
			//顯示a2b左右兩邊的按鈕
			document.getElementById('btn_a2bl').style.visibility='visible';
			document.getElementById('btn_a2br').style.visibility='visible';
			//更換成亮背景房間畫面
			document.getElementById('a2b').style.background = "url('img/a2b2.png')";
			document.getElementById('a2b').style.backgroundRepeat = "no-repeat";
			document.getElementById('a2b').style.backgroundSize = "contain";
		}
	}
},false);


/*---------------------------------
* Event3_打開急救箱 a2ble
*---------------------------------*/
// 取得數字元素
var ads = document.querySelectorAll('.ad');
for (var i=0; i<ads.length; i++) {
	//歸零數字
	ads[i].innerHTML = 0;
	
	//給數字元素追加click事件的處理程式碼
	ads[i].addEventListener('click', function(evt) {
		var x = parseInt(evt.target.innerHTML)+1;
		evt.target.innerHTML = x;

		//數字為0~9
		if(parseInt(evt.target.innerHTML)==10){
			evt.target.innerHTML=0;
		}
	}, false);
}
//判斷密碼
function determineAdPassword(){
	var ad_password = [5,5,1,4,2];
	var input_password = "";
	for(var i=0;i<5;i++){
		if(ads[i].innerHTML==ad_password[i]){
			input_password+="Y";
		}else{
			input_password+="N";
		}
	}
	
	if(input_password=="YYYYY"){
		//顯示打開急救箱的按鈕
		document.getElementById('btn_machinerat').style.visibility='visible';
		//更換急救箱連結
		document.getElementById('ad_change').href = "#panel-a2ble2";
	}else{
		//數字歸零
		for (var i=0; i<ads.length; i++) {
			ads[i].innerHTML = 0;
		}
	}
}


/*---------------------------------
* Event5_特製湯 a1e
*---------------------------------*/
// 取得數字元素
var mas = document.querySelectorAll('.ma');
for (var i=0; i<mas.length; i++) {
	//歸零數字
	mas[i].innerHTML = 0;
	
	//給數字元素追加click事件的處理程式碼
	mas[i].addEventListener('click', function(evt) {
		var x = parseInt(evt.target.innerHTML)+1;
		evt.target.innerHTML = x;

		//數字為0~9
		if(parseInt(evt.target.innerHTML)==10){
			evt.target.innerHTML=0;
		}
	}, false);
}
//判斷密碼
function determineMaPassword(){
	var ma_password = [0,1,9,0,2];
	var input_password = "";
	for(var i=0;i<5;i++){
		if(mas[i].innerHTML==ma_password[i]){
			input_password+="Y";
		}else{
			input_password+="N";
		}
	}
	
	if(input_password=="YYYYY"){
		//顯示煮好湯的按鈕
		document.getElementById('btn_soup').style.visibility='visible';
		//更換鍋子連結
		document.getElementById('ma_change').href = "#panel-a1e2";
	}else{
		//數字歸零
		for (var i=0; i<mas.length; i++) {
			mas[i].innerHTML = 0;
		}
	}
}


/*---------------------------------
* Event0.5_提燈 a1
*---------------------------------*/
//取得物件
var light_item = document.getElementById('light');

function getlight(){
	//更改物件大小
	light_item.style.width = "60px";
	light_item.style.height = "60px";
	
	//創造工具箱容身處
	var toolbox = document.getElementById('srcarea'); //取得工具箱(ul)
	var li = document.createElement("li"); //創造li元素
	toolbox.appendChild(li); //將li加入ul
	
	//物件在li中置中對齊
	li.style.paddingLeft = "17px";

	var lis = toolbox.getElementsByTagName("li"); //ul裡所有li組成的陣列
	//新加入的li，所以一定是最後一個節點
	var endli = lis[lis.length-1];
	endli.appendChild(light_item); //將light元素加入工具箱(ul)的li中
	
	//刪除監聽器
	light_item.removeEventListener("click",getlight,false);
}

//幫物件裝上監聽器
light_item.addEventListener("click",getlight,false);


/*---------------------------------
* Event1.5_毛巾 a4
*---------------------------------*/
//取得物件
var towel_item = document.getElementById('towel');

function gettowel(){
	//更改物件大小
	towel_item.style.width = "60px";
	towel_item.style.height = "60px";
	
	//創造工具箱容身處
	var toolbox = document.getElementById('srcarea'); //取得工具箱(ul)
	var li = document.createElement("li"); //創造li元素
	toolbox.appendChild(li); //將li加入ul
	
	//物件在li中置中對齊
	li.style.paddingLeft = "17px";

	var lis = toolbox.getElementsByTagName("li"); //ul裡所有li組成的陣列
	//新加入的li，所以一定是最後一個節點
	var endli = lis[lis.length-1];
	endli.appendChild(towel_item); //將towel元素加入工具箱(ul)的li中
	
	//刪除監聽器
	towel_item.removeEventListener("click",gettowel,false);
}

//幫物件裝上監聽器
towel_item.addEventListener("click",gettowel,false);


/*---------------------------------
* Event3.5_機器鼠 a2ble2
*---------------------------------*/
//取得物件
var machinerat_item = document.getElementById('machinerat');

function getmachinerat(){
	//更改物件大小
	machinerat_item.style.width = "60px";
	machinerat_item.style.height = "60px";
	
	//創造工具箱容身處
	var toolbox = document.getElementById('srcarea'); //取得工具箱(ul)
	var li = document.createElement("li"); //創造li元素
	toolbox.appendChild(li); //將li加入ul
	
	//物件在li中置中對齊
	li.style.paddingTop = "10px";

	var lis = toolbox.getElementsByTagName("li"); //ul裡所有li組成的陣列
	//新加入的li，所以一定是最後一個節點
	var endli = lis[lis.length-1];
	endli.appendChild(machinerat_item); //將machinerat元素加入工具箱(ul)的li中
	
	//刪除監聽器
	machinerat_item.removeEventListener("click",getmachinerat,false);
}

//幫物件裝上監聽器
machinerat_item.addEventListener("click",getmachinerat,false);


/*---------------------------------
* Event5.5_盤子 a3
*---------------------------------*/
//取得物件
var plate_item = document.getElementById('plate');

function getplate(){
	//更改物件大小
	plate_item.style.width = "60px";
	plate_item.style.height = "60px";
	
	//創造工具箱容身處
	var toolbox = document.getElementById('srcarea'); //取得工具箱(ul)
	var li = document.createElement("li"); //創造li元素
	toolbox.appendChild(li); //將li加入ul
	
	//物件在li中置中對齊
	li.style.paddingTop = "17px";

	var lis = toolbox.getElementsByTagName("li"); //ul裡所有li組成的陣列
	//新加入的li，所以一定是最後一個節點
	var endli = lis[lis.length-1];
	endli.appendChild(plate_item); //將plate元素加入工具箱(ul)的li中
	
	//刪除監聽器
	plate_item.removeEventListener("click",getplate,false);
}

//幫物件裝上監聽器
plate_item.addEventListener("click",getplate,false);