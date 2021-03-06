var CBoardTableRender = function (jqContainer, options, drill, scope, ModalUtils ) {
    this.container = jqContainer; // jquery object
    this.options = options;
    this.tall;
    this.drill = drill;
    this.scope = scope;
    this.ModalUtils = ModalUtils
    var _this = this;
    $(this.container).resize(function (e) {
        _this.resize(e.target);
    });
};

CBoardTableRender.prototype.resize = function (container) {
    var wrapper = $(container).find('.table_wrapper');
    wrapper.css('width', 'auto');
    if (wrapper.width() < $(container).width()) {
        wrapper.css('width', '100%');
    }
};

CBoardTableRender.prototype.do = function (tall, persist) {
    this.tall = tall;
    tall = _.isUndefined(tall) ? 500 : tall;
    var divHeight = tall - 110;
    var _this = this;
    var render = function (o, drillConfig) {
        _this.options = o;
        _this.drill.config = drillConfig;
        _this.do(_this.tall);
    };
    var args = {
        tall: divHeight,
        chartConfig: this.options.chartConfig,
        data: this.options.data,
        container: this.container,
        drill: this.drill,
        scope: this.scope,
        render: render,
        ModalUtils : this.ModalUtils
    };
    crossTable.table(args);
    $(this.container).css({
        height: tall + "px"
    });
    this.resize(this.container);
    if (persist) {
        persist.data = this.options.data;
        persist.type = "table"
    }
    return render;
};

