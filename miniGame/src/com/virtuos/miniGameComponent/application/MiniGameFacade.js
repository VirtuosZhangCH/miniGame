/**
 * Created by zhangchi on 2014/9/4.
 */
var MiniGameFacade  = Facade.extend({
    START_UP:"startup",
    /*
    *@param definationOfSlotDataProxy Class
    *@mainView component
    *@mainViewMediator Class
    *
    * */
    startup:function(mainView,mainViewMediator)
    {

        this.registerMediator(new mainViewMediator(mainView));
    }

});

MiniGameFacade.instanceMap=[];
MiniGameFacade.KEY="MiniGameFacade";

MiniGameFacade.getInstance = function () {
    if (MiniGameFacade.instanceMap[MiniGameFacade.KEY] == null)
    {
        MiniGameFacade.instanceMap[MiniGameFacade.KEY]=new MiniGameFacade(MiniGameFacade.KEY);
    }
    return MiniGameFacade.instanceMap[MiniGameFacade.KEY];
};