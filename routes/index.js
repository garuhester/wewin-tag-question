var xlsx = require("node-xlsx");
var moment = require("moment");
var user = require("./user");
var Qrcode = require('../schemas/qrcode');
var uuid = "wewin-admin-accept";
var number = 180;

module.exports = function (app) {

    app.locals.dateFormat = function (date) {
        return moment(date).format("YYYY-MM-DD HH:mm:ss");
    };

    app.get("/index/:uuid", function (req, res) {
        var u = req.params.uuid;
        Qrcode.findOne({}, function (err, qr) {
            if (qr != null) {
                if (u == qr.result) {
                    res.render("index");
                } else if (u == "wewin-admin-accept") {
                    res.render("index");
                } else {
                    res.render("nolook");
                }
            } else {
                if (u == "wewin-admin-accept") {
                    res.render("index");
                } else {
                    res.render("nolook");
                }
            }
        });
    });

    app.get("/genqrcode", function (req, res) {
        res.render("genqrcode");
    });

    app.get("/admin", function (req, res) {
        var currentPage = req.query.page || 1;
        var query = {
            result: req.query.result || "",
            beginDate: req.query.begindate || "",
            endDate: req.query.enddate || "",
        }
        if (req.query.result != undefined) {
            query.gotoUrl = `/admin/?result=${query.result}&begindate=${query.beginDate}&enddate=${query.endDate}&page=`;
        } else {
            query.gotoUrl = "/admin/?page=";
        }
        user.getAdminData(currentPage, query).then(function (data) {
            res.render("admin", {
                data,
            });
        });
    });

    app.get("/charts", function (req, res) {
        res.render("charts");
    });

    app.post("/xls", function (req, res) {
        var obj = xlsx.parse("./static/data.xlsx");
        var sheet = obj[0].data;
        var data = [];
        var result, tag, img;
        for (var j = 0; j < sheet.length; j++) {
            var json = {};
            result = sheet[j][0];
            tag = sheet[j][1];
            img = sheet[j][2];
            var isEmpty = result == "" || result == null || result == undefined || tag == "" || tag == null || tag == undefined;

            if (!isEmpty) {
                json["result"] = result;
                json["tag"] = tag;
                json["img"] = img;
                data.push(json);
            }
        }
        res.json({ result: data });
    });

    app.post("/statistic", user.submitResult);

    app.post("/getUserList", user.getUserList);

    app.post("/getNumber", function (req, res) {
        res.json({ result: number });
    });

    app.post("/genQrcode", function (req, res) {
        uuid = generateUUID();
        Qrcode.findOne({}, function (err, qr) {
            if (qr == null) {
                var qrcode = new Qrcode({
                    result: uuid
                });
                qrcode.save(function () {
                    timeToDelete();
                    res.json({ result: uuid });
                });
            } else {
                if (qr.result == "wewin-admin-accept") {
                    Qrcode.findOneAndUpdate({}, { 'result': uuid }, function (err, user) {
                        timeToDelete();
                        res.json({ result: uuid });
                    });
                } else {
                    res.json({ result: qr.result });
                }
            }
        });
    });
}

function timeToDelete(time) {
    var inter = setInterval(function () {
        number--;
        if (number == 0) {
            uuid = "wewin-admin-accept";
            Qrcode.findOneAndUpdate({}, { 'result': uuid }, function (err, user) { });
            number = 180;
            clearInterval(inter);
        }
    }, 1000);
    // setTimeout(function () {
    //     uuid = "wewin-admin-accept";
    //     Qrcode.findOneAndUpdate({}, { 'result': uuid }, function (err, user) { });
    // }, time);
}

//生成uuid
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-yxxx-xxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}