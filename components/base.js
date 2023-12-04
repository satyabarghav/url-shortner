export function getBaseUrl() {
    const { protocol, hostname, port } = window.location;
    let baseUrl = `${protocol}//${hostname}`;
    
    if (port && port !== '80' && port !== '443') {
      baseUrl += `:${port}`;
    }
    
    return baseUrl;
}