const path = require("path");
const ts = require("./tsconfig.json");

console.log(path.resolve(__dirname, "src"));

console.log(
	Object.keys(ts.compilerOptions.paths).map((k) => ({[k.replaceAll("/*", "")]: ts.compilerOptions.paths[k].map(e => e.replace("/*","")).map(e => path.resolve(__dirname, e))[0] })).reduce((s,c) => ({...s,...c}), {}) 
);

