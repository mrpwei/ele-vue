module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowerslist: ['Android>=4.0', 'ios>=7'],
    },
    'postcss-pxtorem': {
      //根节点的fontSize
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [':root'], //vant-ui使用root定义了变量，要忽略
    },
  },
}
