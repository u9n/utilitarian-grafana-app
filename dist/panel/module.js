import {PanelCtrl} from  'grafana/app/plugins/sdk';

class ExampleAppPanelCtrl extends PanelCtrl {

    constructor($scope, $injector) {
        super($scope, $injector);
    }

}
ExampleAppPanelCtrl.template = '<h2>Example app!</h2>';

export {
    ExampleAppPanelCtrl as PanelCtrl
};
