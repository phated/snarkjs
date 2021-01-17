import { builtinModules as builtin } from 'module';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";

export default {
    input: "main.js",
    output: {
        file: "build/main.cjs",
        format: "cjs",
    },
    external: [
        ...builtin,
        "big-integer",
        "wasmsnark",
        "circom_runtime",
        "blake2b-wasm",

        "ffjavascript",
        "keccak",
        "yargs",
        "logplease"
    ],
    plugins: [
        nodeResolve({ preferBuiltins: true }),
        commonJS({
            preserveSymlinks: true
        }),
    ]
};
