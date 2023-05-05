import type { Config, Context } from "https://edge.netlify.com";
import React from 'https://esm.sh/react@18.2.0';
import {renderToStaticMarkup} from 'https://esm.sh/react-dom@18.2.0/server';
import { compile, run } from "https://esm.sh/@mdx-js/mdx@2.3.0";
import * as runtime from 'https://esm.sh/react@18.2.0/jsx-runtime';
import remarkGfm from "https://esm.sh/remark-gfm@3.0.1";

export default async (request: Request, context: Context) => {
    let retval = `
<h1>Testing Failed</h1>
<p>Most likely we could not fetch()</p>
`;
    await Deno.readTextFile("../documents/testing.mdx")
    .then(x => x.text())
    .then(async (y) => {
        const codes = await compile(y, {
            outputFormat: 'function-body',
            remarkPlugins: [remarkGfm]
        });
        const {default: MDContents} = await run(String(codes), runtime);
        retval = await renderToStaticMarkup(MDContents());
    });
    return new Response(retval, {
        status: 200,
        headers: {
            'content-type': 'text/html'
        }
    });
};

export const config: Config = {
    path: "/test",
};

