/**
 * Created by zhangchi on 2014/12/8.
 */
/**
 * Created by zhangchi on 2014/9/5.
 */
var ChatUnitsMediator=AbstractComponentMediator.extend({
    _view:null,

    ctor:function(name,viewComponent)
    {
        this._super(name,viewComponent);
        this._view=viewComponent;
    },

    /* getMediatorName:function()
     {
     return this.mediatorName;
     },*/
    mapNotifications:function()
    {
        this.notificationMap.add(NotesComponent.CHAT_BUTTON_CLICKED,this.handleChatClicked,this);
    },

    onRegister:function()
    {
        /* this._slotDataProxy = this.facade.retrieveProxy(SlotDataProxy.NAME);
         this._slotStatesProxy=this.facade.retrieveProxy(SlotStatesProxy.NAME);
         //cc.log("VIEW IS:"+this._view);
         this.facade.registerMediator(new ControlBarLayerMediator(ComponentTypes.CONTROL_BAR,this._view.controlBar));
         this.facade.registerMediator(new SymbolLayerMediator(ComponentTypes.SYMBOLS_LAYER,this._view.symbolLayer));*/
    },

    onPointTest:function()
    {
        cc.log("OnPoint");
        //this._view.controlBar.visible=false;
    },

    handleChatClicked:function(body,point)
    {
        cc.log("Pass Complete"+point.onPointTest());
        point._view.updateMyMessage(body.getBody());
    }
})