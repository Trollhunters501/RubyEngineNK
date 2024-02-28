if(manager.getPlugin("RubyLib")){
script.registerScript({
    name: "RubyEngineNK",
    version: "1.0",
    description: "Run Ruby on Nukkit!",
    website: "https://github.com/Trollhunters501/RubyEngineNK/",
    authors: ["Creadores Program"]
});
const RubyEngineNK = Class(Object, {
    build: function(){
        let libs = new NnClassLoader({ jars: [server.getPluginPath() + 'RubyLib_v9.4.6.0.jar'] });
        let RubyFactor = libs.type();
        let RubyManager = new RubyFactor();
        let RubyEngine = RubyManager.getScriptEngine();
        RubyEngine.put("$getServer", server);
        RubyEngine.put("$getLogger", console);
        RubyEngine.put("$manager", manager);
        RubyEngine.put("$plugin", plugin);
    }
});
}else{
    console.critical("RubyLib Plugin not found! Download at https://github.com/Trollhunters501/RubyLib/releases/tag/9.4.6.0");
    throw "Error Plugin RubyLib Not Found";
}
