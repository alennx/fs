// var devUrl = 'http://222.85.230.92:30000/geomancy-interface-dev/';//生成环境地址
var devUrl = '/geomancy-interface-dev/';//跨域代理地址
//获取通知消息列表
function getAnnouncement(){
    ajaxload(devUrl+'announcement/getAnnouncement',function(res){
        if(res.errorCode == 200){
            var html1=tppl(window._tpl_msg_list,res);
            $('#msgList').html(html1);
        }else{
            alert(res.message);
        }
    })
}
// 获取首页图片列表
function getImgBystickStatus(){
    ajaxload(devUrl+'img/getImgBystickStatus',function(res){
        var arr1 = {},arr2={},arr3={};
        arr1.data=[];
        arr2.data=[];
        arr3.data=[];
        if(res.errorCode == 200){
            for(var i = 0;i<res.data.length;i++){
                switch (res.data[i].imgClassify)
                {
                    case 1:
                    arr1.data.push(res.data[i]);
                    var html2=tppl(window._tpl_Img_item,arr1);
                    $('#ddfs').html(html2);break;
                    case 2:
                    arr2.data.push(res.data[i]);
                    var html2=tppl(window._tpl_Img_item,arr2);
                    $('#pfdm').html(html2);break;
                    case 3:
                    arr3.data.push(res.data[i]);
                    var html2=tppl(window._tpl_Img_item,arr3);
                    $('#qlyy').html(html2);break;
                }
            }
        }else{
            alert(res.message);
        }
    })
}
// 获取图栏目列表
function getImg(){
    ajaxload(devUrl+'img/getImg',function(res){
        var arr1 = {},arr2={},arr3={};
        arr1.data=[];
        arr2.data=[];
        arr3.data=[];
        if(res.errorCode == 200){
            for(var i = 0;i<res.data.length;i++){
                switch (res.data[i].imgClassify)
                {
                    case 1:
                    arr1.data.push(res.data[i]);
                    var html1=tppl(window._tpl_ImgList_item,arr1);
                    $('#imgList-ddfs').html(html1);break;
                    case 2:
                    arr2.data.push(res.data[i]);
                    var html2=tppl(window._tpl_ImgList_item,arr2);
                    $('#imgList-pfdm').html(html2);break;
                    case 3:
                    arr3.data.push(res.data[i]);
                    var html3=tppl(window._tpl_ImgList_item,arr3);
                    $('#imgList-qlyy').html(html3);break;
                }
            }
        }else{
            alert(res.message);
        }
    })
}
// 获取首页视频列表
function getVideoByStickStatus(){
    ajaxload(devUrl+'video/getVideoByStickStatus',function(res){
        var arr1 = {},arr2={},arr3={};
        arr1.data=[];
        arr2.data=[];
        arr3.data=[];
        if(res.errorCode == 200){
            for(var i = 0;i<res.data.length;i++){
                switch (res.data[i].videoClassify)
                {
                    case 1:
                    arr1.data.push(res.data[i]);
                    var html1=tppl(window._tpl_video_item,arr1);
                    $('#mrfskc').html(html1);break;
                    case 2:
                    arr2.data.push(res.data[i]);
                    var html2=tppl(window._tpl_video_item,arr2);
                    $('#xldx').html(html2);break;
                    case 3:
                    arr3.data.push(res.data[i]);
                    var html3=tppl(window._tpl_video_item,arr3);
                    $('#yyzpd').html(html3);break;
                }
            }
        }else{
            alert(res.message);
        }
    })
}
// 获取视频栏目列表
function getVideo(){
    ajaxload(devUrl+'video/getVideo',function(res){
        var arr1 = {},arr2={},arr3={};
        arr1.data=[];
        arr2.data=[];
        arr3.data=[];
        if(res.errorCode == 200){
            for(var i = 0;i<res.data.length;i++){
                switch (res.data[i].videoClassify)
                {
                    case 1:
                    arr1.data.push(res.data[i]);
                    var html1=tppl(window._tpl_videoList_item,arr1);
                    $('#videoList-mrfskc').html(html1);break;
                    case 2:
                    arr2.data.push(res.data[i]);
                    var html2=tppl(window._tpl_videoList_item,arr2);
                    $('#videoList-xldx').html(html2);break;
                    case 3:
                    arr3.data.push(res.data[i]);
                    var html3=tppl(window._tpl_videoList_item,arr3);
                    $('#videoList-yyzpd').html(html3);break;
                }
            }
        }else{
            alert(res.message);
        }
    })
}
// 获取首页文章信息
function getArticleListByStickStatus(){
    ajaxload(devUrl+'article/getArticleListByStickStatus',function(res){
        if(res.errorCode == 200){
            var html=tppl(window._tpl_book_list,res);
            $('#bookList').html(html);
            scroll();
        }else{
            alert(res.message);
        }
    })
}
// 获取文章栏目列表信息
function getArticleList(){
    ajaxload(devUrl+'article/getArticleList',function(res){
        if(res.errorCode == 200){
            for(var i = 0,len=res.data.length;i<len;i++){
                res.data[i].p = res.data[i].content.replace(/<[^>]+>/g,"");
                var arr = res.data[i].content.split('"');
                for(var j in arr){
                    console.log(arr[j].indexOf('http'));
                    if(arr[j].indexOf('http')==0){
                        res.data[i].imgSrc = arr[j];
                    }
                }
            }
            console.log(res);
            var html=tppl(window._tpl_article_item,res);
            $('#article').html(html);
        }else{
            alert(res.message);
        }
    })
}
// 获取新闻栏目列表信息
function getNewsList(){
    ajaxload(devUrl+'news/getNewsList',function(res){
        if(res.errorCode == 200){
            for(var i = 0,len=res.data.length;i<len;i++){
                res.data[i].p = res.data[i].content.replace(/<[^>]+>/g,"");
                var arr = res.data[i].content.split('"');
                for(var j in arr){
                    console.log(arr[j].indexOf('http'));
                    if(arr[j].indexOf('http')==0){
                        res.data[i].imgSrc = arr[j];
                    }
                }
            }
            console.log(res);
            var html=tppl(window._tpl_new_item,res);
            $('#newsList').html(html);
        }else{
            alert(res.message);
        }
    })
}