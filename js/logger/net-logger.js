export const netLogger = {
    requests: [],
    startTime: null,

    logRequest(url, options) {
        this.startTime = performance.now();
        this.requests.push({
            url,
            options,
            timestamp: new Date().toISOString()
        });
    },

    async logResponse(response) {
        const duration = performance.now() - this.startTime;
        const body = await response.json();
        
        console.table({
            URL: response.url,
            Status: response.status,
            Duration: `${duration} ms`,
            Size: response.headers?.get('content-length') ?? `${JSON.stringify(body).length} B`,
            Type: response.headers?.get('content-type')
        });

        return body;
    },

    async fetch() {
        for(const r of this.requests) {
            this.logResponse(await fetch(r.url)); 
        }
    }
}

netLogger.logRequest('https://jsonplaceholder.typicode.com/todos?_limit=10');
netLogger.fetch();