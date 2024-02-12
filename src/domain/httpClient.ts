export interface HttpClient {
  get(url: string, opts: any): Promise<any>;
}