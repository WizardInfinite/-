//index.js
//获取应用实例
Page({ 
    data:{
        name:'开课',
        todos:['学习','吃饭','睡觉']
    },
    input(e){
        this.setData({
            val:e.detail.value
        })
    },
    addTodo(){
        this.setData({
            val:'',
            todos:[...this.data.todos,this.data.val]
        })

        
    }
})
