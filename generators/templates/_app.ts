namespace <%= appname%> {
    /**
     * <%= appname%>
     * @author <%= username%>
     * @since <%= version%>
     */
    export class <%= appname%> {
        private _model: Model;
        private _view: View;
        private _controller: Controller;

        init() {
            this._model = new Model();
            this._view = new View(this._model);
            this._controller = new Controller(this._view, this._model);
            this._view.controller = this._controller;
            this._view.init();
            this._model.init();
            this._controller.init();
        }

        start() {
            this._view.start();
            this._controller.start();
        }        

        dispose() {
            this._model.dispose();
            this._controller.dispose();
            this._view.dispose();
        }
    }
}