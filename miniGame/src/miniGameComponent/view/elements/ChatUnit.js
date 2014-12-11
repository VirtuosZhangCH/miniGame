/**
 * Created by zhangchi on 2014/9/5.
 */
var ChatUnit=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    _type:0,
    _status:0,
    _number:0,
    _numberTextureMap:[],
    ctor:function($picName,$type)
    {
        cc.Sprite.prototype.ctor.call(this);
        this._type=$type;
        cc.defineGetterSetter(this,"type",this.gettype,this.settype);
        cc.defineGetterSetter(this,"status",this.getstatus,this.setstatus);
        cc.defineGetterSetter(this,"Number",this.getNum,this.setNum);
        this.initBg($picName,$type);
        this.layout();

        for(var i = 1; i <= 7; i++)
        {
            var str = "tx_num_0" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            this._numberTextureMap.push(frame);
        }

    },
    setNum:function(value)
    {
        this._number=value;
        this._num.setSpriteFrame(this._numberTextureMap[value-1]);
    },
    getNum:function()
    {
        return this._number;
    },

    getstatus:function()
    {
        return this._status;
    },

    setstatus:function(value)
    {
        this._status=value;
        switch(value)
        {
            case 0:
                this._numGroup.setSpriteFrame("#tx_bg.png");
                break;
            case 1:
                this._numGroup.setSpriteFrame("#tx_bg2.png");
                break;
            case 2:
                this._numGroup.setSpriteFrame("#tx_bg3.png");
                break;
        }
        //setSpriteFrame
    },

    gettype:function()
    {
        return this._type;
    },

    settype:function(value)
    {
        this._type=value;
    },

    setText:function(value)
    {
        this._desTf.setString(value);
    },

    layout:function()
    {
        if( this._type==0)
        {
            this.topbg.y=16;
            this.botbg.x=25;
            this._statusCircle.x= this.pic.x= this._whiteCircle.x=485;
            this.topbg.x=  this.midbg.x=13;
            this.botbg.y=-19;

            this._chatGroup.x=230;
            this._numGroup.x=520;
            this._numGroup.y=-30;

            this._num.x=15;
            this._num.y=15;
        }else{
            this.topbg.y=16;
            this.topbg.x=  this.midbg.x=13;
            this.botbg.y=-19;

            this._chatGroup.x=230;
            this._numGroup.x=-30;
            this._numGroup.y=-30;

            this._num.x=15;
            this._num.y=15;
        }
     },

    onCallBack:function()
    {
        //test
       // this._tf.visible=false;
        //cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
        this.sigOnClick.dispatch();
    },

    initBg:function($picName,$type)
    {
        this._chatGroup=new cc.Sprite();
        this._type=$type;
        this._whiteCircle=new cc.Sprite("#tx_top_bg.png");
        this._statusCircle=new cc.Sprite("#tx_bg.png");

        this._desTf=new cc.LabelTTF("这就是异常","Microsoft Yahei",20);
        this._desTf.setFontFillColor(new cc.Color(0,0,0,0));
        this._desTf.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

        this._numGroup=new cc.Sprite("#tx_num_bg.png");
        this._num=new cc.Sprite("#tx_num_01.png");

        this._numGroup.addChild(this._num);

        this.pic=new cc.Sprite($picName);
        this.addChild(this._statusCircle);
        this.addChild(this.pic);
        this.addChild(this._whiteCircle);
        this.addChild(this._chatGroup);
        this.addChild(this._numGroup);
        if($type==0){
            this.midbg = new cc.Sprite("#qp2_bg_mid.png");
            this.topbg = new cc.Sprite("#qp2_bg_top.png");
            this.botbg = new cc.Sprite("#qp2_bg_bottom.png");
        }else {
            this.midbg = new cc.Sprite("#qp_bg_mid.png");
            this.topbg = new cc.Sprite("#qp_bg_top.png");
            this.botbg = new cc.Sprite("#qp_bg_bottom.png");
        }

        this._chatGroup.addChild(this.topbg);
        this._chatGroup.addChild(this.botbg);
        this._chatGroup.addChild(this.midbg);
        this._chatGroup.addChild(this._desTf);
    }
})
