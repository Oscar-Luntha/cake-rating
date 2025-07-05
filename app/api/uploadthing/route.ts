// app/api/uploadthing/route.ts
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/utils/uploadthing.config"; // Update path if needed

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
