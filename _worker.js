export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname.startswith('/')) {
      url.hostname = 'hello-world-spring-sunset-a3b8.xkdzhz.workers.dev'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  }
}
