# RubyEngineNK
![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Run Ruby on Nukkit!
Requirements:
JSEngineNK Plugin: https://cloudburstmc.org/resources/jsenginenk.939/
RubyLib: https://github.com/Trollhunters501/RubyLib
Know Basic JavaScript.

Installation:
Easily installed with a JSEngineNK script:
```js
if(!script.getScriptByName("RubyEngineNK")){
   load("https://raw.githubusercontent.com/Trollhunters501/RubyEngineNK/main/src/Creadores/Program/RubyEngineNK.js");
}
```
Engine Creation:
Just add this code to your script and you can use Ruby!
```js
var TestRuby = new RubyEngineNK().build();
```
Eval:
```js
TestRuby.eval("$getLogger.info('hello world!')");
```
Default variables:
$getLogger return logger by JSEngineNK
$getServer return server
$manager return manager by JSEngineNK
$plugin return main Class by JSEngineNK

Specify Variables (put):
```js
TestRuby.put("localVariable", objectJava);//cannot be used in functions or classes only outside
TestRuby.put("$globalVariable", objectJava);//Can be used everywhere
TestRuby.put("CONSTVARIABLE", objectJava);//constant variable constant variable
//also applies to setNnClassLoader!
```
setNnClassLoader :
This function does the same thing as JSEngineNK's Nnclassloader API but passed to Ruby example:
```js
TestRuby.setNnClassLoader({ urls: ["https://test.com/test.jar"] }, {
  $global: "class.example"//...
});
```
It also has most of the features of PHPEngineNK (minus code conversion and print)

evalFile:
Run Ruby code from a file:
```
TestRuby.evalFile(manager.getFile("TestRuby", "Test.rb"));
```
Java methods from Ruby:
```ruby
# Import as Java import
require 'java' #import java
java_import "cn.nukkit.Server" # Can be used as in Java without specifying, just use Server or the class name
# more info: https://github.com/jruby/jruby/wiki/CallingJavaFromJRuby
```
You can implement Listener events in Ruby (using Java headers and everything necessary to implement in Ruby with the engine)
More Info: https://github.com/jruby/jruby/wiki
