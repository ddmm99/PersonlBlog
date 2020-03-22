var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/tagsDao");
var tagBlogMappingDao = require("../dao/tagBlogMappingDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/RespUtil");

var url = require("url");
var path = new Map();

function queryBlogByPage(request,response){
    var params = url.parse(request.url,true).query;
    blogDao.queryBlogByPage(parseInt(params.page),parseInt(params.pageSize),function(result){
        for(var i = 0;i < result.length;i++){
            result[i].content = result[i].content.replace(/<img[\w\W]*">/g,"");
            result[i].content = result[i].content.replace(/<[\w\W]{1,5}>/g,"");
            result[i].content = result[i].content.substring(0,300);
        }
        response.writeHead(200);
        response.write(respUtil.writeResult("success","查询成功",result))
        response.end();
    })

}
path.set("/queryBlogByPage",queryBlogByPage);
function queryBlogCount(request,response){
    blogDao.queryBlogCount(function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult("success","查询成功",result))
        response.end();
    })
}
path.set("/queryBlogCount",queryBlogCount);


function editBlog(request, response) {
    var params = url.parse(request.url, true).query;
    var tags = params.tags.replace(/ /g, "").replace("，", ",");
    request.on("data", function (data) {
        blogDao.insertBlog(params.title, data.toString(), tags, 0, timeUtil.getNow(), timeUtil.getNow(), function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
            var blogId = result.insertId;
            var tagList = tags.split(",");
            for (var i = 0 ; i < tagList.length ; i ++) {
                if (tagList[i] == "") {
                    continue;
                }
                queryTag(tagList[i], blogId);
            }
        });
    });
}

path.set("/editBlog",editBlog);

function queryTag(tag, blogId) {
    tagsDao.queryTag(tag, function (result) {

       if (result == null || result.length == 0) {
            insertTag(tag, blogId);
       } else {
           tagBlogMappingDao.insertTagBlogMapping(result[0].id, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {});
       }
    });
}

function insertTag(tag, blogId) {
    tagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function (result) {
        insertTagBlogMapping(result.insertId, blogId);
    });
}

function insertTagBlogMapping(tagId, blogId) {
    tagBlogMappingDao.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {});
}

module.exports.path = path;