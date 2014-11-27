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

    onEnter:function () {
        this._super();

        // add CCTextFieldTTF
        var winSize = cc.director.getWinSize();

    },

    layout:function()
    {
        this.SpinBt.x=247;
        this.SpinBt.y=-10;

        //this._tf.x=50;
     },

    initButton:function()
    {
        var Spin=new cc.Sprite("#ms_button_fs.png");
        var Spin2=new cc.Sprite("#ms_button_fs.png");
        var Spin3=new cc.Sprite("#ms_button_fs.png");

        this.SpinBt=new cc.MenuItemSprite(Spin,Spin2,Spin3,this.onCallBack,this);

        var greenBg=new cc.Sprite("#ms_button_left.png");

        this._tf=new cc.TextFieldTTF("12345", "Microsoft Yahei", 40);
        this._tf.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this._tf.color=0;
        this._tf.setDelegate(this);

       // this._trackNode =this._tf;

        this.addChild(this.SpinBt);
        this.addChild(greenBg);
        this.addChild(this._tf);

        greenBg.x=-234;
        greenBg.y=-10;
    },

    onCallBack:function()
    {
        //test
        this._tf.visible=false;
        //cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
        this.sigOnClick.dispatch();
    },

    initBg:function()
    {
        var bg=new cc.Sprite("#ms_bottombg.png");
        this.addChild(bg);
    }
})