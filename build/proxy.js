/*
 * @Description:
 * @Author:  bean^ <bean_4@163.com>
 * @Date: 2019-09-09 18:02:04
 * @LastEditors:  bean^ <bean_4@163.com>
 * @LastEditTime: 2019-11-04 12:22:09
 */
module.exports = {
    '/index.php': {
        target: 'http://san-manage.test2.com',
        // target: 'http://10.200.10.180:8079',
        // target: 'http://sen-oc-manage.io',
        changeOrigin: true,
        pathRewrite: {
            '^/': '/'
        }
    }
};
