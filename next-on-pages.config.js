import { rewriteNextStaticPaths } from "@cloudflare/next-on-pages/rewrites";

export default {
  export: {
    rewrites: [rewriteNextStaticPaths()],
  },
};