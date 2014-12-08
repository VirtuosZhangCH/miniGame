/**
 * Created by zhangchi on 2014/9/5.
 */
var ChatUnitsLayer=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    unitArr:[],
    ctor:function()
    {
        cc.Sprite.prototype.ctor.call(this);
        this.initElements();
        this.layout();
    },

    layout:function()
    {
       // this.SpinBt.x=247;
        //this.SpinBt.y=-10;

        //this._tf.x=50;
     },

    initElements:function()
    {
        var unit;
        for(var i=1;i<8;i++)
        {
            unit=new ChatUnit("#tx_0"+ i.toString()+".png",1);
            this.addChild(unit);
           this.unitArr.push(unit);
            unit.setText("这里将来是聊天内容");
            unit.y=120+i*80;
        }
    },

    onCallBack:function()
    {
        //test
       // this._tf.visible=false;
        //cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
        this.sigOnClick.dispatch();
    }

})
