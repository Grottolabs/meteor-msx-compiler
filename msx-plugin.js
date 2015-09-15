var msx = Npm.require('msx');

function MSXCompiler(){}
MSXCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(function (file) {
    // process and add the output
    var output = msx.transform(file.getContentsAsString(), {harmony: true});
    file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
  });
};

Plugin.registerCompiler({
  extensions: ["msx"]
}, function () {
  var compiler  = new MSXCompiler();
  return compiler;
});

