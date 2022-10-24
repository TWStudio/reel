const args = require("minimist")(process.argv.slice(2));
const execa = require("execa");
const { pkg = "vue" } = args;

execa("rollup", ["-cw", "--environment", `TARGET:${pkg}`], {
  stdio: "inherit",
});
