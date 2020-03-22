var dbutil = require("./DBUtil.js");


function insertBlog(title,content,tags,views,ctime,utime,success){
    var insertSql = "insert into blog  (`title`,`content`,`tags`,`views`,`ctime`,`utime`) values(?,?,?,?,?,?)";
    var params = [title,content,tags,views,ctime,utime];

    var connection = dbutil.createConnetion();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


module.exports.insertBlog = insertBlog;


function queryBlogByPage(page,pageSize,success){
    var querySql = "select * from blog order by id desc limit ?,?";
    var params = [page * pageSize,pageSize];

    var connection = dbutil.createConnetion();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


module.exports.queryBlogByPage = queryBlogByPage;



function queryBlogCount(success){
    var querySql = "select count(1) from blog";

    var connection = dbutil.createConnetion();
    connection.connect();
    connection.query(querySql, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

module.exports.queryBlogCount = queryBlogCount;
