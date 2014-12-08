/**
 * Created by zhangchi on 2014/9/5.
 */
var GameViewMediator=AbstractComponentMediator.extend({
    _view:null,

    ctor:function(viewComponent)
    {
        this._super(ComponentTypes.MAIN_VIEW,viewComponent);
        this._view=viewComponent;
    },

   /* getMediatorName:function()
    {
        return this.mediatorName;
    },*/
    mapNotifications:function()
    {
        //this.notificationMap.add("test",this.handleTest,this);
    },

    onRegister:function()
    {
        this.facade.registerMediator(new ChatBarMediator(ComponentTypes.CHAT_BAR,this._view.chatBarLayer));
        this.facade.registerMediator(new ChatUnitsMediator(ComponentTypes.CHAT_UNITS,this._view.chatLayer));
    },

    onPointTest:function()
    {
        cc.log("OnPoint");
        //this._view.controlBar.visible=false;
    },

    handleTest:function(body,point)
    {
        cc.log("Pass Complete"+point.onPointTest());
    }
})