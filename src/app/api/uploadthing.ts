import { createRouteHandler } from "uploadthing/next-legacy";
 
import { ourFileRouter } from "~/server/uploadthing";

console.log("API route is being executed");
 
export default createRouteHandler({
  router: ourFileRouter,
 
  // Apply an (optional) custom config:
  // config: { ... },
});