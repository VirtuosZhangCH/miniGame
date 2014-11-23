/**
 * Created by zhangchi on 2014/9/5.
 */
var ChatBarLayer=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    ctor:function()
    {

        cc.Sprite.prototype.ctor.call(this);
        this.initBg();
        this.initButton();
        this.layout();

    },

    layout:function()
    {

     },

    initButton:function()
    {

    },

    onCallBack:function()
    {
        //test

        //cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
        this.sigOnClick.dispatch();
    },

    initBg:function()
    {
        var Spin=new cc.Sprite("#bg.png");
        this.addChild(Spin);
    }
})