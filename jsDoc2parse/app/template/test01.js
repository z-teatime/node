/**
 * Check if an element has a class
 * @xxx <el-buttn>xxxxx</el-button>
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

/**
 * 表格column根据options生成formatter
 * @param { Object } options 根据选项返回选项值
 */
export function createOptionsFn(options) {
  return function (row, column, cellValue, index) {
    const ret = options[cellValue] || options[String(cellValue)];
    return ret == null ? "" : ret;
  };
}

/**
 * 自定义下载
 */
export function download(href, name = `file`) {
  const eleLink = document.createElement("a");
  eleLink.download = name;
  eleLink.href = href;
  eleLink.click();
  return eleLink;
}

/**
 * 获取 UUID
 */
export function getUUID() {
  let d = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
