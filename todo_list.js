var c=1;
	
	function addnode(title,desc,date){
		var p=document.createElement("p");
		var node=document.createTextNode("Title: "+title);
			p.appendChild(node);
		node=document.createTextNode("   Description: "+desc);
			p.appendChild(node);
		node=document.createTextNode("   Date: "+date);
			p.appendChild(node);
		p.setAttribute("id",c);
		var b=document.createElement("BUTTON");
		var bt=document.createTextNode("Remove");
			b.appendChild(bt);
			b.setAttribute("onclick","remove_i("+c+")");
			b.setAttribute("style","float:right");
			p.appendChild(b);
		var e=document.getElementById("d1");
			e.appendChild(p);
		
	};
	
	function remove_i(n){
		var arr=JSON.parse(localStorage.getItem("data"));
		arr.splice(n-1,1);
		localStorage.setItem("data",JSON.stringify(arr));
		var nd=document.getElementById(n);
		nd.parentNode.removeChild(nd);
		for(i=n+1;i<=c;i++)
		{
			nd=document.getElementById(i);
			nd.setAttribute("id",i-1);
		}
	};
	function loaditem(){
		if(typeof(Storage)!=="undefined")
		{	if(localStorage.data){
				var arr=JSON.parse(localStorage.getItem("data"));
				if(arr[0]!==null){
				for(i=0;arr[i]!=null;i++){
					addnode(arr[i].title,arr[i].description,arr[i].date);
					c++;}
				}
			}
		}
		else	
			document.write="sorry";
	};
	function add(){
		//localStorage.removeItem(datalist);
		var arr=[{title: document.getElementById("i_title").value, description:document.getElementById("i_desc").value, date:document.getElementById("i_date").value}];
			
		if(typeof(Storage)!=="undefined")
		{	var nw_arr=JSON.parse(localStorage.getItem("data"));
			var len=nw_arr.length;
			if(nw_arr[0]!==null)
			{	
				var i=0;
				while(nw_arr[i]!==null && i<len)
					i++;
				if(i==len)
					nw_arr.length=len+1;
				nw_arr[i]={title:document.getElementById("i_title").value,description:document.getElementById("i_desc").value,date:document.getElementById("i_date").value};
				//nw_arr.length=len+1;
				localStorage.setItem("data",JSON.stringify(nw_arr));
				
			}
			else
			{	localStorage.setItem("data",JSON.stringify(arr));
				
			}
		}
		else
			document.write= "Sorry, your browser does not support Web Storage...";
		
		addnode(arr[0].title,arr[0].description,arr[0].date);
		
		document.getElementById("i_title").value="";
		document.getElementById("i_desc").value="";
		document.getElementById("i_date").value="";
		
	};
