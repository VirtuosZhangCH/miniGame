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

        //this.textF=new cc.TextFieldTTF("Click here");
        //this.textF.setDelegate(this);
        //this.textF.setColor(new cc.Color(0,0,0,0));
        this._userName = new cc.EditBox(cc.size(100, 54), new cc.Scale9Sprite("qp_bg_mid.png"));
        //this._userName.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this._userName.setFontColor(new cc.Color(0,0,0,0));
        this._userName.setFontSize(20);
        this._userName.setPlaceHolder("Enter UserName");
        this._userName.setDelegate(this);
        this._userName.setMaxLength(20);

        this.te=new cc.TextFieldTTF("1234", "Microsoft Yahei", 50);
        //te.setDelegate(this);
        this.te.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this.te.attachWithIME();
        this.te.x=100;
        this.te.y=20;

        //touch
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseUp: this.onMouseUp.bind(this)
        }, this);

        this.addChild(greenBg);
        this.addChild(this.infoMenu);
        //this.addChild(this._userName);

        this.addChild(this.te);

        this.infoMenu.x=240;
        this.infoMenu.y=-10;
        greenBg.x=-234
        greenBg.y=-10;
    },

    onMouseUp:function (event) {
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

var textInputGetRect = function (node) {
    var rc = cc.rect(node.x, node.y, node.width, node.height);
    rc.x -= rc.width / 2;
    rc.y -= rc.height / 2;
    return rc;
};