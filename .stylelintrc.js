/*
 * Stylelint Configuration
 * https://github.com/stylelint/stylelint
 *
 * @Author: xiaoming.bai
 * @Date: 2020-08-22 14:54:47
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-08-22 17:13:25
 */

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  rules: {
    // 屏蔽一些 scss @mixin 等语法的检查
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'include'] }],
  },
}
