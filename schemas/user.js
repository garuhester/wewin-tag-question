var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    result: String, // 选择结果
    answer: String, // 对应答案
    tag: String, // 标签结果
    createTime: { type: Date, default: Date.now } // 创建时间
});

module.exports = mongoose.model("User", UserSchema);