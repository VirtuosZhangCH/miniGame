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
        this.initButton();
        this.layout();
    },

    layout:function()
    {
       // this.SpinBt.x=247;
        //this.SpinBt.y=-10;
        //this._tf.x=50;

        this.closeMenu.x=this.bg.width/2-20;
        this.closeMenu.y=this.bg.height/2-20;
     },

    initButton:function()
    {
        var Spin=new cc.Sprite("#fpch_close.png");
        var Spin2=new cc.Sprite("#fpch_close.png");
        var Spin3=new cc.Sprite("#fpch_close.png");

        var SpinBt=new cc.MenuItemSprite(Spin,Spin2,Spin3,this.onCallBack,this);
        SpinBt.retain();

        this.closeMenu=new cc.Menu(SpinBt);
        this.closeMenu.retain();

        this.addChild(this.closeMenu);
    },

    showLayer:function()
    {
       /* reelSprite2.runAction(cc.sequence(
            cc.moveBy(.2,cc.p(0,0-this.roleBack-this.stoprollBack)),
            cc.CallFunc.create(this.onStopReel,this)
        ));*/
    },

    onCallBack:function()
    {

    },

    initBg:function()
    {
        this.bg=new cc.Sprite("#fpch_bg.png");
        this.addChild(this.bg);
    }
})

var textInputGetRect = function (node) {
    var rc = cc.rect(node.x, node.y, node.width, node.height);
    rc.x -= rc.width / 2;
    rc.y -= rc.height / 2;
    return rc;
};