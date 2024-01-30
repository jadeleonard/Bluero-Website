import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({



    publicRoutes:['/sign-up','sign-in','/']
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(|trpc)(.*)"],
};