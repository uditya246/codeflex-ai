import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://finer-sheep-15.clerk.accounts.dev/",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;