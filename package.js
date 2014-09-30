Package.describe({
  name: "matteodem:traceur",
  version: "1.0.1",
  summary: "Javascript next to Javascript of today compiler",
  git: "https://github.com/matteodem/meteor-traceur.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileTraceur",
  use: [],
  sources: [
    "plugin/compile-traceur.js"
  ],
  npmDependencies: {"traceur": "0.0.67"}
});
