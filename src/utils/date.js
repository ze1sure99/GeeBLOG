// 日期格式化函数，传入日期参数，返回多长时间前，如 一分钟前
export function formatDate(date) {
  // 把字符串日期转为时间戳
  const OldDate = new Date(date).getTime();
  const now = Date.now();
  const diff = (now - OldDate
  ) / 1000;
  if (diff < 60) {
    return "刚刚";
  } else if (diff < 60 * 60) {
    return Math.floor(diff / 60) + "分钟前";
  } else if (diff < 60 * 60 * 24) {
    return Math.floor(diff / (60 * 60)) + "小时前";
  } else if (diff < 60 * 60 * 24 * 30) {
    return Math.floor(diff / (60 * 60 * 24)) + "天前";
  } else if (diff < 60 * 60 * 24 * 30 * 12) {
    return Math.floor(diff / (60 * 60 * 24 * 30)) + "月前";
  } else {
    return Math.floor(diff / (60 * 60 * 24 * 30 * 12)) + "年前";
  }
}
