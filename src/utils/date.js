// 日期格式化函数，传入日期参数，返回多长时间前，如 一分钟前
export function formatDate(date) {
    const diff = Date.now() - date.getTime()
    if (diff < 0) {
        return ''
    } else if (diff < 1000) {
        return '刚刚'
    } else if (diff < 60000) {
        return Math.floor(diff / 1000) + '秒前'
    } else if (diff < 3600000) {
        return Math.floor(diff / 60000) + '分钟前'
    } else if (diff < 86400000) {
        return Math.floor(diff / 3600000) + '小时前'
    } else if (diff < 2592000000) {
        return Math.floor(diff / 86400000) + '天前'
    } else if (diff < 31536000000) {
        return Math.floor(diff / 2592000000) + '月前'
    } else {
        return Math.floor(diff / 31536000000) + '年前'
    }
}