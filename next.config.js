const withTM = require("next-transpile-modules");

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...withTM(["echarts", "zrender"]),
  ...nextConfig
}
