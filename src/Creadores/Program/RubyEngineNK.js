if(manager.getPlugin("RubyLib") != null){
script.registerScript({
    name: "RubyEngineNK",
    version: "1.0",
    description: "Run Ruby on Nukkit!",
    website: "https://github.com/Trollhunters501/RubyEngineNK/",
    author: "Creadores Program"
});
var RubyEngineNK = Class(Object, {
    build: function(){
        let libs = new NnClassLoader({ jars: [ manager.getPlugin("RubyLib").getClass().getProtectionDomain().getCodeSource().getLocation().getPath() ] });
        let RubyFactor = libs.type("org.jruby.embed.jsr223.JRubyEngineFactory");
        let RubyManager = new RubyFactor();
        let RubyEngine = RubyManager.getScriptEngine();
        RubyEngine.put("$getServer", server);
        RubyEngine.put("$getLogger", console);
        RubyEngine.put("$manager", manager);
        RubyEngine.put("$plugin", plugin);
        let subclass = {
            put: function(arg1, arg2){
                RubyEngine.put(arg1, arg2);
            },
            eval: function(arg1){
                RubyEngine.eval(arg1);
            },
            getEngineName: function(){
                return "RubyEngineNK & " + RubyManager.getEngineName();
            },
            setNnClassLoader: function(codeNC, classes){
              let ClasLoad = new NnClassLoader(codeNC);
              let KeysClass = Object.keys(classes);
              for(var keys in KeysClass){
                RubyEngine.put(KeysClass[keys], ClasLoad.type(classes[KeysClass[keys]]));
              }
            },
            getLanguageVersion: function(){
                return RubyManager.getLanguageVersion();
            },
            getManager: function(){
                return RubyManager;
            },
            getEngine: function(){
                return RubyEngine;
            },
            getClass: function(){
                return this;
            },
            getEngineClass: function(){
                return RubyFactor;
            },
            evalFile: function(fileA){
              let FilesImport = new JavaImporter(java.io);
              with(FilesImport){
                let reader = new InputStreamReader(new FileInputStream(fileA));
                RubyEngine.eval(reader);
              }
            }
        };
        return subclass;
    },
    getClass: function(){
      return this;
    },
    constructor: function(){
      return this.build();
    },
    getName: function(){
      return "RubyEngineNK";
    },
    toString: function(){
      return "RubyEngineNK[]";
    }
});
}else{
    console.critical("RubyLib Plugin not found! Download at https://github.com/Trollhunters501/RubyLib/releases/tag/9.4.6.0");
    throw "Error Plugin RubyLib Not Found";
}
