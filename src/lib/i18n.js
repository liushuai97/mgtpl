/* eslint-disable */
let i18n = {
  'zh-cn': {
    'Name': '名称',
    'Render Color': '渲染色',
    'Border': '边框',
    'Border Color': '边框颜色',
    'Location': '坐标',
    'Size': '尺寸',
    'Rotate': '旋转',
    'Label Color': '文本颜色',
    'Background Color': '背景色',
    'Font Size': '字体大小',
    'json file is empty': 'JSON文件为空',
    'Save Error': '保存错误',
    'Save Success': '保存成功',
    'Update': '更新',
    'Export JSON': '导出JSON',
    'Load File ...': '加载文件 ...',
    'Download File': '下载文件',
    'Save': '保存',
    'Rename': '重命名',
    'Input Element Name': '输入图元名称',
    'Solid Line': '实线样式',
    'Dashed Line': '虚线样式',
    'Line Width': '连线宽度',
    'Input Line Width': '输入连线宽度',
    'Line Color': '连线颜色',
    'Input Line Color': '输入连线颜色',
    'Out of Group': '脱离分组',
    'Send to Top': '置顶显示',
    'Send to Bottom': '置底显示',
    'Reset Layer': '恢复默认层',
    'Clear Graph': '清空画布',
    'Zoom In': '放大',
    'Zoom Out': '缩小',
    '1:1': '1:1',
    'Pan Mode': '平移模式',
    'Rectangle Select': '框选模式',
    'Text': '文字',
    'Basic Nodes': '基本节点',
    'Register Images': '注册图片',
    'Default Shapes': '默认形状',
    'Element counts and loading time - Commercial license support more elements and more than 50% performance increase': '图元加载数量与时间 - 商业授权支持更高图元数量, 以及50%以上的性能提升',
    'Submit': '提交',
    'Element Counts': '图元数量',
    'with Edge': '包含连线',
    'with Group': '包含分组',
    'Show Label': '显示标签',
    'Zoom to Overview': '缩放到窗口',
    'Delayed Rendering': '延迟绘制',
    'Angle:': '角度:',
    'Regular': '均匀分配',
    'Proportional': '按需分配',
    'Radius:': '半径:',
    'Uniform': '统一半径',
    'Variable': '可变半径',
    'Min Radius': '最小半径',
    'Default Gap': '默认间距',
    'Start Angle': '起始角度',
    'Beijing': '北京',
    'Shanghai': '上海',
    'Changsha': '长沙',
    'Import Error': '导入异常',
    'Message': '消息',
    'Image export preview': '图片导出预览',
    'Canvas Size': '画布大小',
    'Double click  to select the whole canvas range': '双击选择全画布范围',
    'Export Range': '导出范围',
    'Scale': '缩放比例',
    'Output Size': '输出大小',
    'Export': '导出',
    'Print': '打印',
    'Image size is too large, the export may appear memory error': '图幅太大，导出时可能出现内存不足',
    'New Project': '新项目',
    'Application Host': '应用主机',
    'CPU Usage': 'CPU占用',
    'Memory Usage': '内存占用',
    'Hydrological stations': '水文监测站',
    'Show Double Lane': '显示双车道',
    'Show Traffic': '显示路况信息',
    // toolbar
    'Default Mode': '默认模式',
    'Rectangle Selection': '框选模式',
    'View Mode': '浏览模式',
    'Create Edge': '创建连线',
    'Create L Edge': '创建L型连线',
    'Create Shape': '创建多边形',
    'Create Line': '创建线条',
    'Export Image': '导出图片',
    'Double click merge': '双击合并',
    'Double click Edit': '双击编辑',
    'Public service \n center network topology': '公共事业服务\n中心网络拓扑图',
    'Storage': '存储',
    'Fiber Switch': '光纤交换机',
    'Switch': '交换机',
    'Core Switch': '核心交换机',
    'Firewall': '防火墙',
    'Router': '路由器',
    'Intranet PC': '内网PC',
    'Public Sector Service Center \n Center LAN': '公共事业服务中心\n中心局域网',
    'Branches': '分支机构',
    'Sinopec internal network area': '中国石化内部网络区',
    'Remote access area': '远程接入区',
    'Security management area': '安全管理区',
    'Sinopec \nInternet node \n network': '中国石化\nInternet节点\n网络',
    'Headquarters core \n switch': '总部核心\n交换机',
    'Found the password guessing attack event \n ...': '发现口令猜测攻击事件\n ...',
    'Server\nSwitch': '服务器\n交换机',
    'Sinopec headquarters network area': '中国石化总部网络区域',
    'Management system network area': '管理系统网络区域',
    '': 'TMS,TMS\n数据库,财务公司\n新SAP,浪潮\n报表,共享平台\n数据库,固定报表\n数据库',
  }
};

let lang = navigator.language || navigator.browserLanguage;
lang = lang.toLowerCase();

export function getI18NString (key) {
  if (!i18n[lang]) {
    return key;
  }
  let result = i18n[lang][key];
  if (result === undefined) {
    return key;
  }
  return result;
}
