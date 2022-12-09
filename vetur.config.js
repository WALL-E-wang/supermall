module.exports = {
  // **optional** default: `{}`
  // override vscode settings part
  // Notice: It only affects the settings used by Vetur.
  settings: {
    "vetur.ignoreProjectWarning": true, // 忽略警告提示: Vetur find tsconfig.json/jsconfig.json, but they aren’t in the project root.
    "vetur.useWorkspaceDependencies": true, // 使用本项目的依赖版本
    "vetur.validation.template": false, // vetur模板校验template/style/script,错误提示将来自 ESLint 插件eslint-plugin-vue，而不是 Vetur,确保项目或全局有安装ESLint相关插件
    "vetur.validation.templateProps": true, // Prop属性校验,export default {  props: { str: String }}
    "vetur.experimental.templateInterpolationService": true, // Vetur 现在提供完成、诊断、悬停、跳转到定义、查找这些 JavaScript 片段v-if等的API资料, 也可禁用模板诊断vetur.validation.interpolation: false
    "vetur.validation.interpolation": false, // 不对新 TS 语法进行校验
  },
  // **optional** default: `[{ root: './' }]`
  // support monorepos
  projects: [
    './', // shorthand for only root.
    {
      // **required**
      // Where is your project?
      // It is relative to `vetur.config.js`.
      root: './',
      // **optional** default: `'package.json'`
      // Where is `package.json` in the project?
      // We use it to determine the version of vue.
      // It is relative to root property.
      package: './package.json',
      // **optional**
      // Where is TypeScript config file in the project?
      // It is relative to root property.
      // tsconfig: './tsconfig.json',
      // **optional** default: `'./.vscode/vetur/snippets'`
      // Where is vetur custom snippets folders?
      // snippetFolder: './.vscode/vetur/snippets',
      // **optional** default: `[]`
      // Register globally Vue component glob.
      // If you set it, you can get completion by that components.
      // It is relative to root property.
      // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
      globalComponents: [
        './src/components/**/*.vue',
        {
          // Component name
          name: 'FakeButton',
          // Component file path, please use '/'.
          path: './src/app/components/AppButton.vue'
        }
      ]
    }
  ]
}