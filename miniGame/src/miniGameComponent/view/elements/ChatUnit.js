/**
 * Created by zhangchi on 2014/9/5.
 */
var ChatUnit=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    _status:0,
    ctor:function($picName,$status)
    {
        cc.Sprite.prototype.ctor.call(this);
        this._status=$status;
        cc.defineGetterSetter(this,"status",this.getStatus,this.setStatus);
        this.initBg($picName,$status);
        this.layout();
    },

    getStatus:function()
    {
        return this._status;
    },

    setStatus:function(value)
    {
        this._status=value;
    },

    layout:function()
    {
        this.topbg.y=16;
        this.topbg.x=  this.midbg.x=13;
        this.botbg.y=-19;

        this._chatGroup.x=230;
        this._desTf.x=120;
     },

    onCallBack:function()
    {
        //test
       // this._tf.visible=false;
        //cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
        this.sigOnClick.dispatch();
    },

    initBg:function($picName,$status)
    {
        this._chatGroup=new cc.Sprite();
        this._status=$status;
        this._whiteCircle=new cc.Sprite("#tx_top_bg.png");

        this._desTf=new cc.LabelTTF("这就是异常","Microsoft Yahei",20);
        this._desTf.setFontFillColor(new cc.Color(0,0,0,0));

        this.pic=new cc.Sprite($picName);
        this.addChild(this.pic);
        this.addChild(this._whiteCircle);
        this.addChild(this._chatGroup);

        this.midbg=new cc.Sprite("#qp_bg_mid.png");
        this.topbg=new cc.Sprite("#qp_bg_top.png");
        this.botbg=new cc.Sprite("#qp_bg_bottom.png");

        this._chatGroup.addChild(this.topbg);
        this._chatGroup.addChild(this.botbg);
        this._chatGroup.addChild(this.midbg);

        this.addChild(this._desTf);
    }
})
