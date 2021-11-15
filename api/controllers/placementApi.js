import {CONFIG} from "../../config/env.config";
import {Request} from "../request"

const baseUrl = CONFIG.API_URL;

export class PlacementApi {

    static async getSticky() {
        return (
            await new Request()
                .url(baseUrl + "&url=/?page_id=35")
                .send()
        ).body;
    }

    static async getInline() {
        return (
            await new Request()
                .url(baseUrl + "&url=/")
                //.searchParams({url: "/"}) the basic parameters are erased
                .send()
        ).body;
    }
}