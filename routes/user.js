var User = require('../schemas/user');
var moment = require("moment");

var getAdminData = function (currentPage, query) {
    return new Promise(function (resolve, reject) {
        //一页最大条数
        var pageSize = 100;
        var skipNum = (currentPage - 1) * pageSize;
        var data = {};
        //页面跳转字符
        data.goto = query.gotoUrl;
        data.query = query;
        //当前页码
        data.currentPage = currentPage;
        var searchStr = {}
        if (query.gotoUrl == "/admin/?page=") {
            searchStr = {};
        } else {
            var nextDate = "";
            if (query.endDate != "") {
                var nowdate = new Date(query.endDate);
                nextDate = new Date(nowdate.getTime() + 24 * 60 * 60 * 1000); //后一天
                nextDate = moment(nextDate).format("YYYY-MM-DD 00:00:00").toString();
            }
            if (query.beginDate == "" && nextDate == "") {
                searchStr = {
                    'result': { '$regex': query.result },
                }
            } else if (query.beginDate != "" && nextDate == "") {
                searchStr = {
                    'result': { '$regex': query.result },
                    "createTime": {
                        "$gt": query.beginDate
                    }
                }
            } else if (query.beginDate == "" && nextDate != "") {
                searchStr = {
                    'result': { '$regex': query.result },
                    "createTime": {
                        "$lt": nextDate
                    }
                }
            } else if (query.beginDate != "" && nextDate != "") {
                searchStr = {
                    'result': { '$regex': query.result },
                    "$and": [{
                        "createTime": {
                            "$gte": query.beginDate
                        }
                    }, {
                        "createTime": {
                            "$lte": nextDate
                        }
                    }]
                }
            }

        }
        User.find(searchStr).skip(skipNum).limit(pageSize).sort({ 'createTime': -1 }).exec(function (err, user) {
            data.user = user;
            User.count(searchStr, function (err, q) {
                data.allPage = (q % pageSize == 0) ? ~~(q / pageSize) : ~~((q / pageSize) + 1);
                if (data.allPage == 0) {
                    data.allPage = 1;
                }
                resolve(data);
            });
        });
    });
}

var submitResult = function (req, res) {
    var result = req.body.result;
    var answer = req.body.answer;
    var tag = req.body.tag;
    var user = new User({
        result,
        answer,
        tag,
    });
    user.save(function (err, u) {
        res.json({ result: 1 });
    });
}

var getUserList = function (req, res) {
    var data = {};
    User.find({}, function (err, users) {
        var usersData = [];
        for (var i = 0; i < users.length; i++) {
            if (usersData.indexOf(users[i].result) == -1) {
                usersData.push(users[i].result);
            }
        }
        data.usersData = usersData;
        data.allUser = users;
        res.json(data);
    });
}

module.exports = {
    submitResult,
    getAdminData,
    getUserList,
}