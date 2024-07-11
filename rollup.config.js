import babel from "rollup-plugin-babel";
import copy from "rollup-plugin-copy";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import commonjs from "rollup-plugin-commonjs";
import compiler from "@ampproject/rollup-plugin-closure-compiler";
import filesize from "rollup-plugin-filesize";
import license from "rollup-plugin-license";
import postcss from "rollup-plugin-postcss";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import sveltePreprocess from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";
import del from "rollup-plugin-delete";
import visualizer from "rollup-plugin-visualizer";

const pkg = require("./package.json");
const banner = ["/*!", pkg.name, pkg.version, "*/\n"].join(" ");

const env = process.env.DEVELOPMENT ? "development" : "production";

const plugins = [
  del({ targets: "dist/*" }),
  svelte({
    preprocess: sveltePreprocess(),
    emitCss: true,
  }),
  resolve({
    extensions: [".js", ".json", ".svelte"],
  }),
  commonjs(),
  replace({
    "process.env.NODE_ENV": JSON.stringify(env),
  }),
  babel({
    extensions: [".js", ".mjs", ".html", ".svelte"],
  }),
  postcss({
    plugins: [require("autoprefixer"), require("cssnano")],
    extract: "css/shepherd.css",
  }),
];

// If we are running with --environment DEVELOPMENT, serve via browsersync for local development
if (process.env.DEVELOPMENT) {
  plugins.push(serve({ contentBase: [".", "dist", "test/dummy"], open: true }));
  plugins.push(livereload({ watch: ["src", "public", "!dist"] }));
}

plugins.push(license({ banner }));
plugins.push(filesize());
plugins.push(visualizer());

const rollupBuilds = [
  // Generate unminified bundle
  {
    input: "./src/js/shepherd.js",

    output: [
      {
        dir: "dist",
        entryFileNames: "js/[name].js",
        format: "umd",
        name: "Shepherd",
        sourcemap: false,
      },
      {
        dir: "dist",
        entryFileNames: "js/[name].esm.js",
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins,
  },
];

if (!process.env.DEVELOPMENT) {
  rollupBuilds.push(
    // Generate minifed bundle
    {
      input: "./src/js/shepherd.js",
      output: [
        {
          dir: "dist",
          entryFileNames: "js/[name].min.js",
          format: "umd",
          name: "Shepherd",
          sourcemap: false,
        },
        {
          dir: "dist",
          entryFileNames: "js/[name].esm.min.js",
          format: "esm",
          sourcemap: false,
        },
      ],
      plugins: [
        svelte({
          preprocess: sveltePreprocess(),
          emitCss: true,
        }),
        resolve({
          extensions: [".js", ".json", ".svelte"],
        }),
        commonjs(),
        replace({
          "process.env.NODE_ENV": JSON.stringify(env),
        }),
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
        }),
        postcss({
          plugins: [require("autoprefixer"), require("cssnano")],
          extract: "css/shepherd.css",
        }),
        compiler(),
        license({
          banner,
        }),
        filesize(),
        visualizer(),
        copy({
          targets: [{ src: "dist/js/shepherd.js", dest: "landing/public" }],
        }),
      ],
      // eslint-disable-next-line prettier/prettier
    }
  );
}

export default rollupBuilds;
