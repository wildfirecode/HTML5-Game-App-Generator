namespace <%= appname%> {
    /**
     * view
     * @author <%= username%>
     * @since <%= version%>
     */
    export class View {
        private _model: Model;
        private _controller: Controller;
        constructor(model: Model) {
            this._model = model;
        }

        init() {
           
        }

        start() {
            //
        }

        dispose() {
            
        }

        set controller(val: Controller) { this._controller = val; }
    }
}