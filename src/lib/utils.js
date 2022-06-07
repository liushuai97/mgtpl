/* eslint-disable */
export function createElement ({ tagName = 'div', className, parent, html }) {
  let element = document.createElement(tagName);
  className && (element.className = className);
  parent && parent.appendChild(element);
  html && (element.innerHTML = html);
  return element;
}

export function getQStyleSheet () {
  const q_style_id = 'qunee-styles';
  let q_style = document.getElementById(q_style_id);
  if (q_style && q_style.sheet) {
    return q_style.sheet;
  }
  let head = document.head;
  let style = document.createElement('style');
  style.id = q_style_id;
  head.insertBefore(style, head.childNodes[0]);
  return style.sheet;
}

export function readTextFile (file, ext, cb) {
  let name = file.name;
  if (typeof ext === 'string') {
    let reg = new RegExp('.' + ext + '$', 'gi');
    if (!reg.test(name)) {
      alert('Please selects .' + ext + ' file');
      return;
    }
  } else if (ext instanceof Function) {
    cb = ext;
  }
  let fileReader = new FileReader();
  fileReader.onload = function(evt) {
    cb(fileReader.result);
  }
  fileReader.readAsText(file, 'utf-8');
}

let _isFileSaverSupported;

export function isBlobSupported () {
  if (_isFileSaverSupported === undefined) {
    try {
      _isFileSaverSupported = !!new Blob;
    } catch (e) { }
  }
  return _isFileSaverSupported;
}

export function saveAs (blob, filename) {
  if (!isBlobSupported()) {
    throw 'file saver not be supported'
  }
  if (navigator.msSaveOrOpenBlob) {
    return navigator.msSaveOrOpenBlob(blob, filename);
  }
  let a = document.createElement("a");
  a.style.display = 'none';
  document.body.appendChild(a);
  let csvUrl = URL.createObjectURL(blob);
  a.href = csvUrl;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href)
  a.remove();

}