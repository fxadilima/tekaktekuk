import type { Config, Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const retval = "Request: " + request.toString() + "\n";
    return new Response(retval);
};

export const config: Config = {
    path: "/test",
};

