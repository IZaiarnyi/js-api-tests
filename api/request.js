import * as got from "got";

export class Request {
    options = {
        responseType: "json"
    }

    url(url) {
        this.options.url = url;
        return this;
    }

    method(method) {
        this.options.method = method;
        return this;
    }

    headers(headers) {
        this.options.headers = headers;
        return this;
    }

    searchParams(searchParams) {
        this.options.searchParams = searchParams;
        return this;
    }

    body(body) {
        this.options.json = body
        return this
    }

    async send() {
        return got(this.options)
    }
}