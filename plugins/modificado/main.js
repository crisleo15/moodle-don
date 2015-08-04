var templates = [
    "root/externallib/text!root/plugins/modificado/program.html"
];

define(templates, function (program) {
    var plugin = {
        settings: {
            name: "modificado",
            type: "general",
            lang: {
                component: "core"
            }
        },

        showProgram: function() {
            var tpl = {};
            var html = MM.tpl.render(program, tpl);
            MM.panels.show('center', html, {title: MM.lang.s("mootes14")});
        }
    };

 



    MM.registerPlugin(plugin);

});