var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QrcodeSchema = new Schema({
    result: String, // 选择结果
    createTime: { type: Date, default: Date.now } // 创建时间
});

module.exports = mongoose.model("Qrcode", QrcodeSchema);