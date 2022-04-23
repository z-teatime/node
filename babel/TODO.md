`ArrowFunctionExpression` => `BlockStatement`

字符串 `TemplateLiteral` `Literal` 查找后记得 path.skip().

if (hasYdt) {

​	// 判断import和函数体是否有该定义

}



file =>

queues = [fnqueue, ...]

fnqueue = [`中文`, { type: 'import', start: 0 }, { type: 'var' /* 定义intl */, start: 10 }, ...] 去重

fnqueue.start

fnqueue.end

fnqueue.hasVarIntl

hasImportGlogal

parse(queues)



1. 搜索所有的 `VariableDeclarator` && `node.init.type === JSXElement` 记录变量名 `id.name`.
1. 判断 import 语法是否引入. import global from '...'
1. 判断 函数体是否有该intl定义.



## 如何判断是否为 `React Components`

> 是无法准确判断的!!!. 

1. 代码上可以看组件内是否有用hooks api.

2. 遍历AST查找是否返回 JSXElement. 

   > 如果返回表达式和变量. 

3. 只判断根节点的函数. 函数子节点跳过. 

## global.intl

> 这个好像好用一点.

入口处, 直接获取intl. 利用全局的 global.intl. 对所有的函数(只替换函数内部)体进行替换中文.

