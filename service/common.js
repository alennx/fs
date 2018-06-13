/*
封装ajax,跨域自动加载cookie
*/
function ajaxload(url,data,callback){
	if(!(!!url)) return;
	var method='GET';
	console.log('请求URL：',url);
	if(!!data&&typeof(data)!='function'){
		method='POST';
        console.log('POST参数：');
        console.log(data);
	}
	$.ajax({
		url:url,
		type:method,
		data:(method=='POST')?data:'',
		crossDomain:true,
		xhrFields:{withCredentials:true},
		success:function(dt){
			//if(is_debug){
				console.log('Ajax返回：');
				console.log(dt);
            //}
			if(typeof(data)=='function'){
				data(dt);
			}else if(typeof(callback)=='function'){
				callback(dt);
			}
		},
		error:function(){
			alert("网络请求错误！");
		}
	});
}

function loadCompontent(callback,tplurl){
	if(!tplurl){
		tplurl='component.html';
	}
    $.ajax({
        url:tplurl,
        type:'GET',
        cache:false,
        success:function(dt){
            makeCompontent(dt,callback);
        },
        error:function(){
            alert("网络请求错误！");
        }
    });
}
function makeCompontent(html,callback){
    var arr=html.split('</template>');
    for(var i=0,d=arr.length;i<d;i++){
        var v=arr[i];
        var match = /template id\=\"(.+?)\" template/.exec(v);
        if(match!=null){
            var _id = match[1];
            var ar2 = v.split('template>');
            window[_id] = ar2[1];
        }
    }
    if(typeof(callback)=='function') callback()
}
//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}