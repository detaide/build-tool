import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints : ['setup.mjs'],
    bundle : true,
    outfile : "out.mjs"
})