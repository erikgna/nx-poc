import { generateId } from '@nx-demo/utils';

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch(endpoint: string): Promise<any> {
    const requestId = generateId();
    console.log(`[${requestId}] Fetching from ${this.baseUrl}${endpoint}`);
    return { data: 'mock data', requestId };
  }
}

export function createClient(baseUrl: string): ApiClient {
  return new ApiClient(baseUrl);
}
