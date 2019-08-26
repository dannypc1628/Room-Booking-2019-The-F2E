var app = new Vue({
    el:'#page',
    data:{     
        
        items:"123456",
    },
    
    computed:{
        bigImgSrc:function(){
           
            return this.items[3].imageUrl;
        }
    }
});

$( document ).ready(function(){
    initData();
});
var urlHome ="https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";
function initData(){
    var key ="FXm06mxcrcCXVzGahiyZmKDfhQAfubFFkpuDK0YkfhosljlJaGA4WvVrxJgI";
    console.log("hello load");
    $.ajax({
        type: 'GET',
        url: urlHome,
        headers:{
            authorization:"Bearer "+key,
            accept:"application/json",
            
        },
        
        error: function (err) { console.log('連線異常');
            // console.log(err)
        },
        success: function (returnData) {
            if(returnData.success==true){
                console.log(returnData.items);
                app.items=returnData.items;
            }
            
        }
    });
}