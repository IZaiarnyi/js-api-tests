import { cleanEnv, str, url} from "envalid";

if (process.env.DOMAIN) {
    process.env.DOMAIN_API_URL = `https://${process.env.DOMAIN}`;
}

export const CONFIG = cleanEnv(process.env, {
    API_URL: url({
      default: process.env.DOMAIN_API_URL || `https://cdn.firstimpression.io/delivery/spc_fi.php?id=8024&ref=demo.simulate.fi`,
      desc: "API URL to be used"
    }),
    S_KEY: str({
      default: process.env.SECRET_KEY,
      desc: "secret key from github"
    }),
    NEW_KEY: str({
      default: process.env.NEW_KEY,
      desc: "secret key"
    })
});