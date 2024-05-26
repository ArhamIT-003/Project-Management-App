import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// export default auth((req) => {
//   const isLogged = req.auth;

//   // console.log(req);
//   console.log("Route", req.nextUrl.pathname);

//   console.log("Is-Logged", isLogged);
// });

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// "/((?!api|_next/static|_next/image|favicon.ico).*)"
