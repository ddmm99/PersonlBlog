var randomTags = new Vue({
    el:"#random_tags",
    data:{
        tags:['dajdbhj','akndn','najbdk','nkabdkn','akljdb']
    },
    computed:{
        randomColor:function(){
            return function(){
                var red = Math.floor(Math.random() * 255 + 50);
                var green = Math.floor(Math.random() * 255);
                var blue = Math.floor(Math.random() * 255);
                return `rgb(${red},${green},${blue})`
            }
        },
        randomSize:function(){
            return function(){
                var size = Math.floor(Math.random() * 20 + 12);
                return size + 'px'
            }
        }
    },
    created(){

    }
})

var newHot = new Vue({
    el:"#new_hot",
    data:{
        titleList:[
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
            {title:'这是一个标题哈哈哈',link:'http://www.baidu.com'},
        ]
    },
    created(){

    }
})

var newComments = new Vue({
    el:"#new_comments",
    data:{
        commentList:[
            {name:'这里是用户名',date:'2019-10',comment:'这里是一大串评论'},
            {name:'这里是用户名',date:'2019-10',comment:'这里是一大串评论'},
            {name:'这里是用户名',date:'2019-10',comment:'这里是一大串评论'},
            {name:'这里是用户名',date:'2019-10',comment:'这里是一大串评论'},
            {name:'这里是用户名',date:'2019-10',comment:'这里是一大串评论'},
            {name:'这里是用户名',date:'2019-10',comment:'这里是一大串评论'},
        ]
    },
    computed:{

    },
    created(){
        
    }
})