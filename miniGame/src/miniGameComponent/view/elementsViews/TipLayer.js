/**
 * Created by zhangchi on 2014/9/5.
 */
var TipLayer=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    ctor:function()
    {
        cc.Sprite.prototype.ctor.call(this);
        this.initBg();
        this.initChildrens();
        this.layout();

        this.showLayer();
    },

    layout:function()
    {
        this.closeMenu.x=this.bg.width/2-20;
        this.whiteBoardContainer.y=900;
        //this.whiteBoardContainer.visible=false;
        this.closeMenu.y=this.bg.height/2-20;
     },

    initChildrens:function()
    {
        var Spin=new cc.Sprite("#fpch_close.png");
        var Spin2=new cc.Sprite("#fpch_close.png");
        var Spin3=new cc.Sprite("#fpch_close.png");

        var SpinBt=new cc.MenuItemSprite(Spin,Spin2,Spin3,this.onCallBack,this);
        SpinBt.retain();
        //SpinBt.y=5;

        this.closeMenu=new cc.Menu(SpinBt);
        this.closeMenu.retain();

        this.whiteBoardContainer.addChild(this.closeMenu);

        this.resultBoardContainer=new cc.Sprite();
        this.yellowBoard=new cc.Sprite("#tk_lose_mid.png");
        this.titleLoss=new cc.Sprite("#tk_lose_top.png");
        this.titleWin=new cc.Sprite("#tk_win_top.png");
    },

    showLayer:function()
    {
        this.whiteBoardContainer.visible=true;
        var delay = cc.delayTime(2);
        this.whiteBoardContainer.runAction(cc.sequence(
            cc.moveBy(2,cc.p(0,-900)),
            delay,
            cc.moveBy(2,cc.p(0,-1200)),
            cc.callFunc(this.onStopReel,this)
        ));
    },

    onStopReel:function()
    {
        this.whiteBoardContainer.visible=false;
    },

    onCallBack:function()
    {

    },

    initBg:function()
    {
        this.whiteBoardContainer=new cc.Sprite();
        this.bg=new cc.Sprite("#fpch_bg.png");
        //this.addChild(this.bg);
        this.whiteBoardContainer.addChild(this.bg);
        this.addChild(this.whiteBoardContainer);
    }
})