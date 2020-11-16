module.exports = (api, vueOptions) => {
    api.chainWebpack(config => {
      config.plugin("uni-mp-launch-plugin").use(
        require.resolve('uni-mp-launch-plugin'), [vueOptions]
      );
      return config;
    });
}
