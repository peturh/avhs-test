var app = require('app');

app
    .config(['$mdThemingProvider', function ($mdThemingProvider) {

        var customOrangeMap = $mdThemingProvider.extendPalette('blue', {
            '500': '006fd4',

            'contrastDefaultColor': 'light'

        });

        $mdThemingProvider.definePalette('myCustom', customOrangeMap);


        $mdThemingProvider.theme('default')
            .primaryPalette('grey',{
                'default' : '200'
            }).accentPalette('myCustom',{
            'default' : '500'
        });

    }]);