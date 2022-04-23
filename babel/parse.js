import traverse from "@babel/traverse";
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser")
const t = require("@babel/types")

const filePath = path.resolve(__dirname, "./mock2.jsx");
const options = {
  encoding: "utf8",
};
let content = fs.readFileSync(filePath, options);

const ast = parser.parse(content, {
  plugins: ['jsx'],
})

const ret = traverse(ast, {
  ArrowFunctionExpression(path) {
    debugger
    // path.skip
    console.log('path', path);
  }
});

debugger

console.log('parseret', ret);
