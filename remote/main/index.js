System.register("chunks:///_virtual/main",["./PlaySound.ts","./muyuplay.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/muyuplay.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,n,e,i,r,u,c,a,s;return{setters:[function(o){t=o.applyDecoratedDescriptor,n=o.inheritsLoose,e=o.initializerDefineProperty,i=o.assertThisInitialized},function(o){r=o.cclegacy,u=o._decorator,c=o.AudioSource,a=o.Button,s=o.Component}],execute:function(){var l,p,d,h,y;r._RF.push({},"d8e32tFo4RLmo0PToPV5LdZ","muyuplay",void 0);var f=u.ccclass,v=u.property;o("ButtonSound",(l=f("ButtonSound"),p=v(c),l((y=t((h=function(o){function t(){for(var t,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return t=o.call.apply(o,[this].concat(r))||this,e(t,"audioSource",y,i(t)),t}n(t,o);var r=t.prototype;return r.onLoad=function(){var o=this.getComponent(a);o&&o.node.on(a.EventType.CLICK,this.onButtonClick,this)},r.onButtonClick=function(){this.audioSource&&this.audioSource.clip&&this.audioSource.playOneShot(this.audioSource.clip,1)},r.onDestroy=function(){var o=this.getComponent(a);o&&o.node.off(a.EventType.CLICK,this.onButtonClick,this)},t}(s)).prototype,"audioSource",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=h))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/PlaySound.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var e,r,t,n,i,u,a,c;return{setters:[function(o){e=o.applyDecoratedDescriptor,r=o.inheritsLoose,t=o.initializerDefineProperty,n=o.assertThisInitialized},function(o){i=o.cclegacy,u=o._decorator,a=o.AudioSource,c=o.Component}],execute:function(){var l,p,s,y,d;i._RF.push({},"1f8b21QIw5Nb56p0SogYyPg","PlaySound",void 0);var f=u.ccclass,S=u.property;o("PlaySound",(l=f("PlaySound"),p=S(a),l((d=e((y=function(o){function e(){for(var e,r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=o.call.apply(o,[this].concat(i))||this,t(e,"audioSource",d,n(e)),e}return r(e,o),e.prototype.playSound=function(){this.audioSource&&this.audioSource.play()},e}(c)).prototype,"audioSource",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s=y))||s));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});