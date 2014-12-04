/**
 * Created by zhangchi on 2014/9/5.
 */
var ChatUnit=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    _status:0,
    _pic:null,
    ctor:function($picName,$status)
    {
        cc.Sprite.prototype.ctor.call(this);
        this._status=$status;
        cc.defineGetterSetter(this,"status",this.getStatus,this.setStatus);
        this.initBg();
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
        this.topbg.y=20;
        this.botbg.y=20;
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
        this.midbg=new cc.Sprite("#qp2_bg_mid.png");
        this.topbg=new cc.Sprite("#qp2_bg_top.png");
        this.botbg=new cc.Sprite("#qp2_bg_bottom.png");

        this.addChild(this.midbg);
        this.addChild(this.topbg);
        this.addChild(this.botbg);
    }
})
