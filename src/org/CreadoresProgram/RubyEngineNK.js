const prefix = "[RubyEngineNK] ";
const RubyEngineNK = Class(Object, {
    build: function(){
        let libs = new NnClassLoader({ maven: [ "org.jruby:jruby-complete:9.4.9.0" ] });
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
            eval: function(arg1, arg2){
                if(arg2 == null){
                RubyEngine.eval(arg1);
                }else{
                    RubyEngine.eval(arg1, arg2);
                }
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
              if(!fileA instanceof java.io.File){
                throw "The object is not a file!";
                return;
              }
              if(!fileA.exists()){
                throw "The file does not exist!";
                return;
              }
              let reader = new java.io.FileReader(fileA);
              RubyEngine.eval(reader);
              reader.close();
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
function enable(){
  console.info(prefix+"§aDone");
}
function load(){
  console.info(prefix+"§eLoading...");
}
function disable(){
  console.info(prefix+"§cBye");
}
module.exports = {
  RubyEngineNK: RubyEngineNK,
  onEnable: enable,
  onLoad: load,
  onDisable: disable
};
