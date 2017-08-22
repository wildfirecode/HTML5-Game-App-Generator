namespace <%= appname%> {
    /**
    * Controller
    * @author <%= username%>
    * @since <%= version%>
    */
    export class Controller {
        private _view: View;
        private _model: Model;
        constructor(view: View, model: Model) {
            this._view = view;
            this._model = model;
        }

        init() {
            //
        }

        start() {
            //
        }

        dispose() {
            //
        }
    }
}