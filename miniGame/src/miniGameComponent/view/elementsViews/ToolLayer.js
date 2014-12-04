/**
 * Created by zhangchi on 2014/9/5.
 */
var ToolLayer=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    ctor:function()
    {
        cc.Sprite.prototype.ctor.call(this);
        this.initElement();
        this.layout();



    },

    layout:function()
    {
       // this.SpinBt.x=247;
        //this.SpinBt.y=-10;

        //this._tf.x=50;
     },

    initElement:function()
    {
        var bg=new cc.Sprite("#ms_topbg.png");
        this.addChild(bg);

        var bkBt=new cc.Sprite("#ms_button_back.png");
        this.addChild(bkBt);

        bkBt.x=-260;

        var optionBt=new cc.Sprite("#ms_button_SET.png");
        this.addChild(optionBt);

        this.infoTf=new cc.LabelTTF("Welcome","Microsoft Yahei",30);
        this.infoTf.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this.infoTf.setFontFillColor(new cc.Color(0,0,0,0));
        this.addChild(this.infoTf);
        optionBt.x=260;

    },

    onCallBack:function()
    {
        //test
       // this._tf.visible=false;
        //cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
        this.sigOnClick.dispatch();
    }

})
