const addon = require('../build/Release/object-wrap-demo-native');

function ObjectWrapDemo(name) {
    this.greet = function(str) {
        return _addonInstance.greet(str);
    }

    const _addonInstance = new addon.ObjectWrapDemo(name);
}

module.exports = ObjectWrapDemo;
