script.registerScript({
    name: "RubyEngineNK",
    version: "1.0",
    description: "Run Ruby on Nukkit!",
    website: "https://github.com/Trollhunters501/RubyEngineNK/",
    authors: ["Creadores Program"]
});
const RubyEngineNK = Class(Object, {
    build: function(){
        let libs = new NnClassLoader({ urls: [''] });
        let RubyFactor = libs.type();
        let RubyManager = new RubyFactor();
        let RubyEngine = RubyManager.getScriptEngine();
        RubyEngine.put("$getServer", server);
    }
});
