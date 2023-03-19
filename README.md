# vscode 项目中配置 eslint+prettierrc 自动格式化 ts 文件

在 VScode 中安装 eslint、premittierrc、editorConfig 插件
.editorconfig 文件配置

```javascript
# http://editorconfig.org
# A special property that should be specified at the top of the file outside of
# any sections. Set to true to stop .editor config file search on current file
root = true
[*]
# Indentation style
# Possible values - tab, space
indent_style = space
# Indentation size in single-spaced characters
# Possible values - an integer, tab
indent_size = 2
# Line ending file format
# Possible values - lf, crlf, cr
end_of_line = lf
# File character encoding
# Possible values - latin1, utf-8, utf-16be, utf-16le
charset = utf-8
# Denotes whether to trim whitespace at the end of lines
# Possible values - true, false
trim_trailing_whitespace = true
# Denotes whether file should end with a newline
# Possible values - true, false
insert_final_newline = true
```

在`user.setting`文件里面配置

```json
{
  "cssrem.rootFontSize": 75,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[html]": {
    "editor.defaultFormatter": "Wscats.eno"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "less.lint.hexColorLength": "warning",
  "less.compile": {
    "compress": false,
    "sourceMap": false,
    "out": true,
    "outExt": ".css"
  },
  "cSpell.enableFiletypes": ["!javascript"],
  "[javascript]": {
    "editor.defaultFormatter": "Wscats.eno"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tabnine.experimentalAutoImports": true,
  "[css]": {
    "editor.defaultFormatter": "Wscats.eno"
  },
  "[less]": {
    "editor.defaultFormatter": "Wscats.eno"
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "editor.stickyScroll.enabled": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

在`eslintrc.cjs`文件中配置

```json
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
```

# 安装 reset-css 用于初始化全局样式，放在最前面

```javascript
npm i reset-css
```

# 使用 Scss

安装

```javascript
npm install --save-dev sass
```

# 配置 Antd Design 样式自动按需引入

```javascript
npm install vite-plugin-style-import@1.4.1 -D
在`vite.config.js`中配置
import styleImport, { AntdResolve } from 'vite-plugin-style-import';
plugins: [
    react(),
    // antd按需引入
    styleImport({
      resolves: [AntdResolve()],
    }),
  ],
去掉在引入的全局antd文件：`import 'antd/dist/antd.css'`
启动项目，发现报错，缺少less，进行安装
`npm i less@2.7.1 -D`
```
