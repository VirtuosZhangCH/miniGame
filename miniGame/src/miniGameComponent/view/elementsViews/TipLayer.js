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

    },

    onCallBack:function()
    {

    },
    /*onMouseUp:function (event) {
        var target = event.getCurrentTarget();
        var point = event.getLocationInView();
        //this.te.alpha=0;
        // decide the trackNode is clicked.
        cc.log("KeyboardNotificationLayer:clickedAt(" + point.x + "," + point.y + ")");

        var rect = textInputGetRect(this.te);
        cc.log("KeyboardNotificationLayer:TrackNode at(origin:" + rect.x + "," + rect.y
            + ", size:" + rect.width + "," + rect.height + ")");

        target.onClickTrackNode(cc.rectContainsPoint(rect, point));
        cc.log("----------------------------------");
    },

    onClickTrackNode:function (clicked) {
        var textField = this.te;
        //if (clicked) {
            // TextFieldTTFTest be clicked
            cc.log("TextFieldTTFDefaultTest:CCTextFieldTTF attachWithIME");
            textField.attachWithIME();
       // } else {
            // TextFieldTTFTest not be clicked
           // cc.log("TextFieldTTFDefaultTest:CCTextFieldTTF detachWithIME");
           // textField.detachWithIME();
      //  }
    },*/


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