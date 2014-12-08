/**
 * Created by zhangchi on 2014/12/8.
 */
/**
 * Created by zhangchi on 2014/9/5.
 */
var ChatBarMediator=AbstractComponentMediator.extend({
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
        //this.notificationMap.add("test",this.handleTest,this);
    },

    onRegister:function()
    {
        this._view.sigOnClick.add(this.onClickChat,this);
    },

    onClickChat:function($message)
    {
        this.sendNotification(NotesComponent.CHAT_BUTTON_CLICKED,$message);
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