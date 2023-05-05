export default (req) => {
    console.log("request: " + req);
    new Response("Hello world");
}

export const config = { path: "/test" };

