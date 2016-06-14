define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/bar/bar');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/book/detail/detail2'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqqIvay';
	this._flag_='2252bb366d5a7cc25458aa6839246add';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fDes":{"define":"fDes","label":"描述","name":"fDes","relation":"fDes","type":"String"},"fGroupID":{"define":"fGroupID","label":"ID","name":"fGroupID","relation":"fGroupID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fIsbn":{"define":"fIsbn","label":"ISBN","name":"fIsbn","relation":"fIsbn","type":"String"},"fName":{"define":"fName","label":"书名","name":"fName","relation":"fName","type":"String"},"fPublisher":{"define":"fPublisher","label":"出版社","name":"fPublisher","relation":"fPublisher","rules":{"number":true},"type":"Float"},"fStatus":{"define":"fStatus","label":"借阅状态","name":"fStatus","relation":"fStatus","rules":{"integer":true},"type":"Integer"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"},"fTotal":{"define":"fTotal","label":"借阅数","name":"fTotal","relation":"fTotal","rules":{"integer":true},"type":"Integer"},"fWriter":{"define":"fWriter","label":"作者","name":"fWriter","relation":"fWriter","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"goodsData"});
}}); 
return __result;});