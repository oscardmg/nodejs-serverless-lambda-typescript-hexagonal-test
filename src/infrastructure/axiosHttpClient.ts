import { Axios } from "axios";
import { HttpClient } from "../domain/httpClient";

export class AxiosHttpClient implements HttpClient {
    private readonly client: Axios;

    constructor (client: Axios) {
        this.client = client;
    }

    async get(url: string, opts: any) {
        const response = await this.client.get(url, opts);
        return response.data;
    }
}