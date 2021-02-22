// const path = require("path"); //引入path模块
// function resolve(dir) {
//   return join(__dirname, dir); //path.join(__dirname)设置绝对路径
// }

// export function chainWebpack(config) {
//   config.resolve.alias
//     .set("@", resolve("./src"))
//     .set("components", resolve("./src/components"))
//     .set("assets", resolve("./src/assets"))
//     .set("network", resolve("./src/network"))
//     .set("views", resolve("./src/views"))
//     .set("common", resolve("./src/common")); //set第一个参数：设置的别名，第二个参数：设置的路径
// }

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
