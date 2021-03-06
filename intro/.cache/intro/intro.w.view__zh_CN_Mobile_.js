window.__justep.__ResourceEngine.loadCss([{url: '/v_0eaee99a18de428cae07af0a402f9cb8l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_1d67680c8110431cb6260b2a5e8c34a9l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_4d8b0857255f49c5bb697634c965db9el_zh_CNs_d_m/system/core.min.js','/v_f2a578124e1a4ec899a89ec934fe66a9l_zh_CNs_d_m/system/common.min.js','/v_93e0586e82e04290a7974659a8cd3a10l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/book/intro/intro'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cb2Ur6v';
	this._flag_='fb57d2489e8b3b4b018f690b8955016d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"发布人","name":"name","relation":"name","type":"String"},"pro":{"define":"pro","label":"公告","name":"pro","relation":"pro","type":"String"},"time":{"define":"time","label":"发布时间","name":"time","relation":"time","type":"String"},"title":{"define":"title","label":"标题","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"pro","initData":"[{\"pro\":\"<b>各位老师、同学：</b><br/>&nbsp;&nbsp;&nbsp;&nbsp;新学期开始了，欢迎来图书馆借阅书刊、上网学习。图书馆从2月29日起正式开放。寒假前借的书刊，请于3月11日前归还图书馆，逾期将做罚款处理。<br/>&nbsp;&nbsp;&nbsp;&nbsp;读者可登录图书馆网站：http://lib.caa.edu.cn/，了解我馆的规章制度、开放窗口、开放时间等信息。<br/>谢谢配合!\",\"title\":\"<h4>图书馆开馆通知</h4>\",\"name\":\"<b>管理员</b>\",\"time\":\"<b>2016.03.20</b>\"},{\"pro\":\"<b>各位毕业生校友：</b><br/>&nbsp;&nbsp;&nbsp;&nbsp;自2016年1月1日起，毕业生校友可凭毕业证 ( 带校园一通卡、一寸照片）来图书馆办理阅览证（免费）。欢迎大家来馆阅览学习！<br/>&nbsp;&nbsp;&nbsp;&nbsp; <b>办理地点：</b>图书馆办公室（南山馆1C605室、象山馆1号楼1301室均可办理）。 <br/>&nbsp;&nbsp;&nbsp;&nbsp;<b>办理时间：</b>每周一至周五（9:00—11:00、13:30—16:00）。\",\"title\":\"<h4>关于毕业生校友开通图书馆阅览权限的通知</h4>\",\"name\":\"<b>管理员</b>\",\"time\":\"<b>2016.03.20</b>\"}]","limit":20,"xid":"processData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"content":{"define":"content","label":"内容","name":"content","relation":"content","type":"String"},"name":{"define":"name","label":"时间","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","initData":"[{\"name\":\"发布人\",\"content\":\"管理员\"},{\"name\":\"发布日子\",\"content\":\"2016.2.28\"}]","limit":20,"xid":"timeData"});
}}); 
return __result;});
