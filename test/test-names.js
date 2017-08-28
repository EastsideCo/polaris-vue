(function() {
    function init() {
        
        Vue.use(PolarisVue, {
            componentNameFormat: function(polarisName) {
                return 'Pol'+polarisName;
            }
        });
        
        var root = new Vue({
           el: '#app' 
        });
    }
    
    
    if (document.readyState != 'loading') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
    
})();