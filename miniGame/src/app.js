
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size=cc.director.getWinSize();
        var bg=new cc.Sprite("#welcome_01.jpg");
       // bg.anchorX-=size.width/2;
       // bg.anchorY-=size.height/2
        this.addChild(bg,0);
        bg.x=bg.height/2-90;//>>1;
        bg.y=bg.width/2;//>>1;
        this.chatBarLayer=new ChatBarLayer();
        this.addChild(this.chatBarLayer,1);

        this.toolLayer=new ToolLayer();
        this.addChild(this.toolLayer,1);

        this.chatBarLayer.x=320;
        this.chatBarLayer.y=80;

        this.toolLayer.x=320;
        this.toolLayer.y=765;

        this.chatLayer=new ChatUnitsLayer();
        this.addChild(this.chatLayer,2);
        this.chatLayer.x=100;

        this.tipLayer=new TipLayer();
        this.addChild(this.tipLayer,3);

        this.tipLayer.x=size.height/2-90;
        this.tipLayer.y=size.width/2+50;

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        cc.spriteFrameCache.addSpriteFrames(g_resources[4]);
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);

        //start MVC here
        var _facade = MiniGameFacade.getInstance();
        _facade.startup(layer,GameViewMediator);

    }
});

