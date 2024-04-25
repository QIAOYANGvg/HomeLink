const os = require('os');
/**
 * 该模块导出一个配置对象，用于设定代码格式化的一些选项。
 *
 * @returns {Object} 返回一个包含格式化配置的对象。
 */
module.exports = {
    // 是否在语句末尾添加分号
    semi: true,

    // 是否使用单引号包裹字符串
    singleQuote: true,

    // 根据操作系统平台选择行尾字符序列，Windows 平台使用 CRLF（回车换行），其他平台使用 LF（换行）
    endOfLine: os.platform() === 'win32' ? 'crlf' : 'lf',

    // 缩进所使用的空格数
    tabWidth: 4,

    // 是否使用制表符（Tab）进行缩进，若为 false，则使用空格
    useTabs: false,

    // 在对象和数组最后一个元素后是否添加逗号（ES5风格）
    trailingComma: "es5",

    // 指定代码的最大行长（字符数）
    printWidth: 120,

    // 控制箭头函数参数列表是否始终使用括号包围
    arrowParens: 'always',

    // 控制对象字面量和数组字面量的花括号内侧是否与相邻文字之间保留空格
    bracketSpacing: true,
};
