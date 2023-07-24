const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

/** @type {import('next').NextConfig} */

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {};

module.exports = withVanillaExtract(nextConfig);
