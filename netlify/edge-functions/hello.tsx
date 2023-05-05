import type { Config, Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    console.log(`test: request = ${request}`);
    return new Response("Hello, World!");
};

export const config: Config = {
    path: "/test",
};

