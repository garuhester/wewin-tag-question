var result = "", nowq = 1, maxq = 0, tagsBox, chooseStr = "", begin = "";
var answerWords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
var resultData = [], printerData = [], materialData = [];
var connect = "->";
var shake = true;

var allInfo = [
    {
        type: "p30",
        ques: [
            [
                ["P30/C10系列"],
                "标签是什么类型的？",
                "平面标签",
                "线缆标签"
            ],
            [
                [
                    "P30/C10系列" + connect + "平面标签",
                    "P30/C10系列" + connect + "线缆标签"],
                "是在室内还是室外使用？",
                "室内",
                "室外"
            ],
            [
                [
                    "P30/C10系列" + connect + "平面标签" + connect + "室内",
                    "P30/C10系列" + connect + "线缆标签" + connect + "室内",
                    "P30/C10系列" + connect + "平面标签" + connect + "室外"],
                "标签上面带什么行业的logo？",
                "不带logo",
                "带移动logo",
                "带电信logo",
                "带联通logo",
                "带铁塔logo",
                "带其他logo"
            ],
        ]
    },
    {
        type: "p50",
        ques: [
            [
                [
                    "P50/P1200/M20T/C20/V200A/H50系列"
                ],
                "标签是什么类型的？",
                "连续标签",
                "平面标签",
                "线缆标签",
                "软质挂牌"
            ],
            [
                [
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "线缆标签",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "软质挂牌"
                ],
                "是在室内还是室外使用？",
                "室内",
                "室外"
            ],
            [
                [
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签" + connect + "室内",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签" + connect + "室外",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "线缆标签" + connect + "室内",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "线缆标签" + connect + "室外",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "软质挂牌" + connect + "室内",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "软质挂牌" + connect + "室外"
                ],
                "标签上面带什么行业的logo？",
                "不带logo",
                "带移动logo",
                "带电信logo",
                "带联通logo",
                "带铁塔logo",
                "带其他logo"
            ],
            [
                [
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签" + connect + "室内" + connect + "不带logo",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签" + connect + "室内" + connect + "带移动logo",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签" + connect + "室内" + connect + "带电信logo",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签" + connect + "室内" + connect + "带联通logo",
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "平面标签" + connect + "室外" + connect + "不带logo"
                ],
                "标签的出纸宽度是多少？<div style='font-size: 16px;'>（建议打印行数=宽度/6mm，宽度为标签打印区域小的那个尺寸）</div>",
                "出纸宽度20mm及以下",
                "出纸宽度20~40mm",
                "出纸宽度40~50mm"
            ],
            [
                [
                    "P50/P1200/M20T/C20/V200A/H50系列" + connect + "线缆标签" + connect + "室内" + connect + "不带logo",
                ],
                "标签是哪个系列的？",
                "QS-01系列（建议打印行数：3行）",
                "QS-02系列（建议打印行数：4行）",
                "QS-03系列（建议打印行数：5行）",
                "QS-05系列（建议打印行数：5行）",
                "QS-07系列（建议打印行数：4行）",
                "QS-08系列（建议打印行数：5行）",
                "QN系列（建议打印行数：4-5行）",
                "Q系列（建议打印行数：4-6行）",
                "QI系列（建议打印行数：3行）",
                "M系列（建议打印行数：2行）",
            ],
        ]
    },
    {
        type: "taishi",
        ques: [
            [
                [
                    "台式打印机系列"
                ],
                "标签是什么类型的？",
                "机架标签",
                "线缆标签",
                "平面标签",
                "软质挂牌"
            ],
            [
                [
                    "台式打印机系列" + connect + "线缆标签",
                    "台式打印机系列" + connect + "平面标签",
                    "台式打印机系列" + connect + "软质挂牌"
                ],
                "是在室内还是室外使用？",
                "室内",
                "室外"
            ],
            [
                [
                    "台式打印机系列" + connect + "线缆标签" + connect + "室内",
                    "台式打印机系列" + connect + "线缆标签" + connect + "室外",
                    "台式打印机系列" + connect + "平面标签" + connect + "室内",
                    "台式打印机系列" + connect + "平面标签" + connect + "室外",
                    "台式打印机系列" + connect + "软质挂牌" + connect + "室内",
                    "台式打印机系列" + connect + "软质挂牌" + connect + "室外"
                ],
                "标签上面带什么行业的logo？",
                "不带logo",
                "带电信logo",
                "带移动logo",
                "带铁塔logo",
                "带联通logo",
                "带其他logo"
            ],
            [
                [
                    "台式打印机系列" + connect + "线缆标签" + connect + "室内" + connect + "不带logo"
                ],
                "标签是哪个系列的？",
                "Q系列（建议打印行数：4-6行）",
                "M系列（建议打印行数：2-3行）",
                "QN系列 （建议打印行数：4-5行）",
                "01系列 （建议打印行数：3行）",
                "02系列 （建议打印行数：4行）",
                "03系列 （建议打印行数：5行）",
                "05系列 （建议打印行数：5行）",
                "07系列  （建议打印行数：4行）",
                "08系列 （建议打印行数：5行）",
                "其他系列（建议打印行数：3行）"
            ],
            [
                [
                    "台式打印机系列" + connect + "线缆标签" + connect + "室内" + connect + "带电信logo"
                ],
                "标签是哪个系列的？",
                "q系列（建议打印行数：4行）",
                "qs系列（建议打印行数：4-5行）",
                "qd系列（建议打印行数：4行）",
                "qn系列（建议打印行数：4行）",
                "hq系列（建议打印行数：4行）"
            ],
            [
                [
                    "台式打印机系列" + connect + "平面标签" + connect + "室内" + connect + "不带logo",
                    "台式打印机系列" + connect + "平面标签" + connect + "室内" + connect + "带移动logo"
                ],
                "标签的出纸宽度是多少？<div style='font-size: 16px;'>（建议打印行数=宽度/6mm，宽度为标签打印区域小的那个尺寸）</div>",
                "出纸宽度20mm及以下",
                "出纸宽度20~40mm",
                "出纸宽度40~60mm",
                "出纸宽度60mm以上"
            ],
            [
                [
                    "台式打印机系列" + connect + "平面标签" + connect + "室内" + connect + "带电信logo"
                ],
                "标签的出纸宽度是多少？<div style='font-size: 16px;'>（建议打印行数=宽度/6mm，宽度为标签打印区域小的那个尺寸）</div>",
                "出纸宽度20mm及以下",
                "出纸宽度20~40mm",
                "出纸宽度40~60mm",
                "出纸宽度60~80mm",
                "出纸宽度80mm以上"
            ],
            [
                [
                    "台式打印机系列" + connect + "平面标签" + connect + "室内" + connect + "带联通logo"
                ],
                "标签的出纸宽度是多少？<div style='font-size: 16px;'>（建议打印行数=宽度/6mm，宽度为标签打印区域小的那个尺寸）</div>",
                "出纸宽度20~40mm",
                "出纸宽度40mm以上",
            ]
        ]
    },
    {
        type: "zhengka",
        ques: [
            [
                [
                    "证卡打印机系列"
                ],
                "卡片是什么类型的？",
                "标准卡",
                "多联卡"
            ],
            [
                [
                    "证卡打印机系列" + connect + "标准卡",
                    "证卡打印机系列" + connect + "多联卡"
                ],
                "卡片上面带什么行业的logo？",
                "不带logo",
                "带电信logo",
                "带移动logo",
                "带联通logo",
                "带铁塔logo",
                "带其他logo"
            ],
            [
                [
                    "证卡打印机系列" + connect + "标准卡" + connect + "带电信logo"
                ],
                "行业通用还是省份专用？",
                "电信通用",
                "省份专用"
            ],
            [
                [
                    "证卡打印机系列" + connect + "标准卡" + connect + "带移动logo"
                ],
                "行业通用还是省份专用？",
                "移动通用",
                "省份专用"
            ],
            [
                [
                    "证卡打印机系列" + connect + "标准卡" + connect + "带联通logo"
                ],
                "行业通用还是省份专用？",
                "联通通用",
                "省份专用"
            ]
        ]
    }
];

window.onload = function () {
    initClick();
    getXLS();
    getPrinterInfo();
    getMaterialInfo();
    tagsBox = document.querySelector(".tags");
    setTimeout(function () {
        $(".appstart").addClass("disable");
    }, 1500);
}

function initClick() {
    $('.answer').unbind("click");
    registAnswerClick();

    $(".upimg").click(function () {
        $(this).removeClass("active");
        $(".upimg img").attr("src", "");
        $(".upimg .title").text("");
    });

    //打印机介绍
    $(".startmenu .b1").click(function () {
        startApp("printer");
        $(".printer-list .list").html("");
        var html = "";
        for (var i = 0; i < printerData.length; i++) {
            var data = printerData[i];
            html += `
            <div class="name ${data.result}">
                <div class="left">${data.result}</div>
                <div class="right">
                    <img src="/img/small-printer/${data.img}" alt="">
                </div>
            </div>
            `;
        }
        $(".printer-list .list").html(html);
        registPrinterListName();
    });
    //返回打印机介绍列表
    $(".backprinterlist").click(function () {
        backList("printer");
    });

    //材质介绍
    $(".startmenu .b2").click(function () {
        startApp("material");
        $(".material-list .list").html("");
        var html = "";
        for (var i = 0; i < materialData.length; i++) {
            var data = materialData[i];
            if (i == materialData.length - 1) {
                html += `
                <div class="mtips">
                    <b>提示：</b>
                    <div class="left">${data.result}</div>
                </div>
                `;
            } else {
                html += `
                <div class="name ${data.result}">
                    <div class="left">${data.result}</div>
                </div>
                `;
            }

        }
        $(".material-list .list").html(html);
        registMaterialListName();
    });
    //返回材质介绍列表
    $(".backmateriallist").click(function () {
        backList("material");
    });

    //标签选型
    $(".startmenu .b3").click(function () {
        startApp("main");
    });

    //返回主菜单
    $(".backstartmenu").click(function () {
        var _this = this;
        if (shake) {
            shake = false;
            // setTimeout(function () {
            $(".printer").removeClass("active");
            $(".material").removeClass("active");
            $(".main").removeClass("active");
            $(".startmenu").removeClass("disactive");
            $(".printer-list .list").html("");
            shake = true;
            // }, 200);
        }
    });

    // $(".middle img").click(function () {
    //     var src = $(this).attr("src");
    //     $(".upimg").addClass("active");
    //     $(".upimg img").attr("src", src);
    // });
}

function backList(className) {
    if (shake) {
        shake = false;
        // setTimeout(function () {
        $("." + className + "-info .pinfo").html("");
        $("." + className + "-list").addClass("active");
        $("." + className + "-list").removeClass("disactive");
        $("." + className + "-info").addClass("disactive");
        $("." + className + "-info").removeClass("active");
        backTop();
        shake = true;
        // }, 200);
    }
}

function registMaterialListName() {
    $(".material-list .list .name").click(function () {
        var _this = this;
        var printerName = _this.className.replace("name ", "");
        getPoint("材质介绍" + " -> " + printerName);
        if (shake) {
            shake = false;
            setTimeout(function () {
                var materialName = $(_this).attr("class").replace("name ", "");
                $(".material-list").removeClass("active");
                $(".material-list").addClass("disactive");
                $(".material-info").removeClass("disactive");
                $(".material-info").addClass("active");
                var html = "", tags = [];
                for (var i = 0; i < materialData.length; i++) {
                    var data = materialData[i];
                    if (data.result == materialName) {
                        tags = data.tag.split("\n");
                        html += `
                            <div class="title">${materialName}</div>
                            <div class="info">
                        `;
                        for (var j = 0; j < tags.length; j++) {
                            var arr = tags[j].split("：");
                            if (arr.length == 1) {
                                html += `
                                    <div class="line">${arr[0]}</div>
                                `;
                            } else {
                                html += `
                                    <div class="line"><b>${arr[0]}</b>：${arr[1]}</div>
                                `;
                            }
                        }
                        html += `
                            </div>
                        `;
                    }
                }
                $(".material-info .pinfo").html(html);
                backTop();
                shake = true;
            }, 200);
        }
    });
}

function registPrinterListName() {
    $(".printer-list .list .name").click(function () {
        var _this = this;
        var printerName = _this.className.replace("name ", "");
        getPoint("打印机介绍" + " -> " + printerName);
        if (shake) {
            shake = false;
            setTimeout(function () {
                var printerName = $(_this).attr("class").replace("name ", "");
                $(".printer-list").removeClass("active");
                $(".printer-list").addClass("disactive");
                $(".printer-info").removeClass("disactive");
                $(".printer-info").addClass("active");
                var html = "", tags = [];
                for (var i = 0; i < printerData.length; i++) {
                    var data = printerData[i];
                    if (data.result == printerName) {
                        tags = data.tag.split("\n");
                        html += `
                            <div class="title">${printerName}</div>
                            <div class="nav">
                                <img src="/img/printer/${data.img}" alt="">
                            </div>
                            <div class="info">
                        `;
                        for (var j = 0; j < tags.length; j++) {
                            var arr = tags[j].split("：");
                            if (arr.length == 1) {
                                html += `
                                    <div class="line">${arr[0]}</div>
                                `;
                            } else {
                                html += `
                                    <div class="line"><b>${arr[0]}</b>：${arr[1]}</div>
                                `;
                            }
                        }
                        html += `
                            </div>
                        `;
                    }
                }
                $(".printer-info .pinfo").html(html);
                backTop();
                shake = true;
            }, 200);
        }
    });
}

function backTop() {
    $('html,body').animate({ scrollTop: '0px' }, 100);
}

function startApp(appName) {
    if (shake) {
        shake = false;
        setTimeout(function () {
            $("." + appName).addClass("active");
            $(".startmenu").addClass("disactive");
            shake = true;
        }, 200);
    }
}

function registAnswerClick() {
    $(".answer").click(function () {
        var _this = this;
        if (shake) {
            shake = false;

            //#region click
            var isOver = true;
            var className = $(this).attr("class");
            var choose = $(this).children(".left").text().replace(".", "");
            if (nowq == 1) {
                begin = $(this).children(".right").attr("class").split(" ")[2];
            }
            nowq = className.split(" ")[2].replace("q", "");
            var allQues = $(".questions");

            if (nowq != 1) {
                type = $(this).children(".right").text();
            } else {
                type = $(this).children(".right").attr("class").split(" ")[2];
            }
            type = $(this).children(".right").text();

            if (chooseStr == "") {
                chooseStr += type;
            } else {
                chooseStr += connect + type;
            }

            nowq++;
            a: for (var i = 0; i < allInfo.length; i++) {
                if (allInfo[i].type == begin) {
                    var ques = allInfo[i].ques;
                    if (nowq == 2) {
                        maxq = ques.length + 1;
                    }
                    b: for (var j = 0; j < ques.length; j++) {
                        var quesTypes = ques[j][0];
                        c: for (var z = 0; z < quesTypes.length; z++) {
                            if (chooseStr == quesTypes[z]) {
                                isOver = false;
                                var newQues = `
            <div id="q${nowq}" class="question q${nowq}">
                <div class="backlast">返回上一题</div>
                <div class="title wordbreak">${nowq}.${ques[j][1]}</div>
                <div class="answers bw">
                            `;
                                for (var q = 2; q < ques[j].length; q++) {
                                    newQues += `
                    <div class="answer a${q - 1} q${nowq}">
                        <div class="left">${answerWords[q - 2]}.</div>
                                `;
                                    if (ques[j][q] == "平面标签" || ques[j][q] == "连续标签" || ques[j][q] == "线缆标签" || ques[j][q] == "软质挂牌" || ques[j][q] == "机架标签" || ques[j][q] == "标准卡" || ques[j][q] == "多联卡") {
                                        newQues += `
                        <div class="middle">
                            <img src="/img/${ques[j][q]}.png" alt="">
                        </div>
                                    `;
                                        newQues += `
                        <div class="right rv-center">${ques[j][q]}</div>
                    </div>
                                    `;
                                    } else {
                                        newQues += `
                        <!-- <div class="middle">
                            <img src="/img/5s.png" alt="">
                        </div> -->
                                    `;
                                        newQues += `
                        <div class="right rv-center" style="width:90%;">${ques[j][q]}</div>
                    </div>
                                    `;
                                    }
                                }

                                newQues += `
                </div>
                            `;
                                if (ques[j][1].indexOf("标签的出纸宽度是多少") != -1) {
                                    newQues += `
                <div class="tips bw" style="text-align: center">
                    <div>出纸宽度为：打印时与打印机出纸口平行的那一条边</div>
                </div>
                                `;
                                }

                                newQues += `
            </div>
                            `;
                                allQues.append(newQues);
                                break a;
                            }
                        }
                    }
                }
            }

            $('.answer').unbind("click");
            result += choose;
            //#endregion

            setTimeout(function () {
                initClick();
                backLast();
                backTop();
                $(_this).parent().parent().removeClass("active");
                if (nowq == maxq + 1 || isOver) {
                    gotoResult();
                } else {
                    $("#q" + nowq).addClass("active");
                }

                console.log("chooseStr:" + chooseStr);
                console.log("result:" + result);
                shake = true;
            }, 200);
        }
    });
}

function restart() {
    if (shake) {
        shake = false;
        // setTimeout(function () {
        result = "";
        chooseStr = "";
        begin = "";
        nowq = 1;
        tagsBox.innerHTML = "";
        for (var i = 2; i < 10; i++) {
            $("#q" + i).remove();
        }
        $(".result").removeClass("active");
        $("#q1").addClass("active");
        backTop();
        console.clear();
        shake = true;
        // window.location.reload();
        // }, 200);
    }
}

//获取标签选型
function getXLS() {
    $.ajax({
        method: 'post',
        url: '/xls',
        success: function (data) {
            // console.table(data.result);
            resultData = data.result;
        }
    });
}

//获取打印机介绍
function getPrinterInfo() {
    $.ajax({
        method: 'post',
        url: '/printerInfo',
        success: function (data) {
            // console.table(data.result);
            printerData = data.result;
        }
    });
}

//获取材质介绍
function getMaterialInfo() {
    $.ajax({
        method: 'post',
        url: '/materialInfo',
        success: function (data) {
            // console.table(data.result);
            materialData = data.result;
        }
    });
}

function gotoResult() {
    $(".result").addClass("active");
    var tags = ["可定制，订购热线023-63075555"];
    var imgs = [];
    var allDatas = [];

    for (var i = 0; i < resultData.length; i++) {
        if (resultData[i].result == result) {
            tags = resultData[i].tag.split("\n");
            if (resultData[i].img != undefined && resultData[i].img != null && resultData[i].img.trim() != "") {
                imgs = resultData[i].img.split("\n");
            }
            break;
        }
    }

    for (var i = 0; i < tags.length; i++) {
        if (tags[i].trim() == "") {
            tags.splice(i, 1);
            i--;
        }
    }

    for (var i = 0; i < tags.length; i++) {
        if (imgs[i].trim() == "") {
            imgs.splice(i, 1);
            i--;
        }
    }

    for (var i = 0; i < tags.length; i++) {
        allDatas[i] = [];
        allDatas[i].push(tags[i]);
        if (imgs.length != 0) {
            allDatas[i].push(imgs[i]);
        }
    }

    addResult(allDatas, tags);
}

function addResult(allDatas, tags) {
    for (var i = 0; i < allDatas.length; i++) {
        if (allDatas[0].length != 1) {
            if (allDatas[i][0].indexOf('023-63075555') != -1) {
                allDatas[i][0] = allDatas[i][0].replace('023-63075555', '<a id="wewinphone" href="tel:023-63075555" style="margin-left:5px;">023-63075555</a>');
            }
            if (allDatas[i][1].trim() == "no") {
                tagsBox.innerHTML += `<div class='tag'><div class='txt noimg'>${allDatas[i][0]}</div></div>`;
            } else {
                tagsBox.innerHTML += `<div class='tag'><div class='txt'>${allDatas[i][0]}</div><img src='/img/${allDatas[i][1]}' alt='' onerror='nofind(this);'></div>`;
            }
        } else {
            tagsBox.innerHTML += `<div class='tag'><div class='txt noimg'>${allDatas[i][0]}</div></div>`;
        }
    }
    $(".chooser").text("(" + chooseStr + ")");

    $(".tag img").click(function () {
        var src = $(this).attr("src");
        var txt = $(this).parent().children(".txt").text();
        $(".upimg").addClass("active");
        $(".upimg img").attr("src", src);
        $(".upimg .title").text(txt);
    });

    statistic(tags);
}

function nofind(obj) {
    $(obj).parent().children(".txt").addClass("noimg");
    $(obj).remove();
}

function getPoint(name) {
    var result = name;
    var answer = "";
    var tags = "";
    var region = returnCitySN['cip'] + "<br/>" + returnCitySN['cname'];
    $.ajax({
        method: 'post',
        url: '/statistic',
        data: {
            result: result,
            answer: answer,
            tag: tags,
            region: region
        },
        success: function (data) {
            console.log("统计完成");
        }
    });
}

function statistic(tags) {
    var tags = tags.join("\r\n<<br/>");
    var answer = chooseStr.replace(/->/g, "\r\n<br/>");
    var region = returnCitySN['cip'] + "<br/>" + returnCitySN['cname'];
    $.ajax({
        method: 'post',
        url: '/statistic',
        data: {
            result: result,
            answer: answer,
            tag: tags,
            region: region
        },
        success: function (data) {
            console.log("统计完成");
        }
    });
}

function backLast() {
    $('.backlast').unbind("click");
    $(".backlast").click(function () {
        var _this = this;
        if (shake) {
            shake = false;
            // setTimeout(function () {
            nowq--;
            if ($(_this).parent().attr("class").indexOf("result") == -1) {
                $(_this).parent().remove();
            } else {
                $(_this).parent().removeClass("active");
                tagsBox.innerHTML = "";
            }
            $("#q" + nowq).addClass("active");
            result = popResult(result);
            chooseStr = popChooseStr(chooseStr);
            shake = true;
            // }, 200);
        }
    });
}

function popChooseStr(chooseStr) {
    chooseStr = chooseStr.split(connect);
    chooseStr.pop();
    return chooseStr.join(connect);
}

function popResult(str) {
    str = str.split("");
    str.pop();
    return str.join("");
}