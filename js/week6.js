var app = new Vue({
    el:'#page',
    data:{
        
        status:1,
        payMode:0,
        timer:"25:00",
        title:'STEP 1-請選擇付款方式',
        statusTitles:['','STEP 1-請選擇付款方式','STEP 2-請輸入付款資訊','STEP 3-請確認付款資訊','付款成功!']
    },
    methods:{
        nextStep:function( event){
            var a =event.currentTarget;
            if($(a).hasClass('my-button-none'))
                console.log("this button is block");
            else{
                if(this.status<4)
                    this.status=this.status+1;
                this.title=this.statusTitles[this.status];
            }
        },
        backStep:function(event){
            var a =event.currentTarget;
            if($(a).hasClass('my-button-none'))
                console.log("this button is block");
            else{
                if(this.status>1)
                    this.status=this.status-1;
                this.title=this.statusTitles[this.status];
            }
        },
        selectPayMode:function(mode){
            this.payMode=mode;
        }
    }
});