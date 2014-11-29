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
       // this.SpinBt.x=247;
        //this.SpinBt.y=-10;

        //this._tf.x=50;
     },

    initButton:function()
    {
        var Spin=new cc.Sprite("#ms_button_fs.png");
        var Spin2=new cc.Sprite("#ms_button_fs.png");
        var Spin3=new cc.Sprite("#ms_button_fs.png");

        var SpinBt=new cc.MenuItemSprite(Spin,Spin2,Spin3,this.onCallBack,this);
        SpinBt.retain();
        var greenBg=new cc.Sprite("#ms_button_left.png");
        this.infoMenu=new cc.Menu(SpinBt);
        this.infoMenu.retain();

        this._userName = new cc.EditBox(cc.size(459, 54), new cc.Scale9Sprite("qp_bg_mid.png"));
        //this._userName.x = cc.winSize.width/2;
        this._userName.setFontColor(new cc.Color(0,0,0,0));
       // this._userName.y = 250;
        this._userName.setFontSize(20);
        this._userName.setPlaceHolder("Enter UserName");
        this._userName.setDelegate(this);
        this._userName.setMaxLength(20);


        this.addChild(greenBg);
        this.addChild(this.infoMenu);
        this.addChild(this._userName);
        this.infoMenu.x=240;
        this.infoMenu.y=-10;
        greenBg.x=-234
        greenBg.y=-10;
    },

    onCallBack:function()
    {
        //test
       // this._tf.visible=false;
        //cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
        this.sigOnClick.dispatch();
    },

    initBg:function()
    {
        var bg=new cc.Sprite("#ms_bottombg.png");
        this.addChild(bg);
    }
})