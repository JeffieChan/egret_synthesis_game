class LoadingController extends BaseController {

	private loadingView: LoadingView;

	public constructor() {
		super();

		//初始化UI
		this.loadingView = new LoadingView(this, LayerMgr.GAME_UI_LAYER);
		App.ViewMgr.register(ViewConst.Loading, this.loadingView);

		//注册事件监听
		this.registerFunc(LoadingConst.SetProgress, this.setProgress, this);
	}

	private setProgress(current: number, total: number): void {
		this.loadingView.setProgress(current, total);
	}
}
