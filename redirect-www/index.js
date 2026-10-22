export default {
  fetch(request) {
    const url = new URL(request.url)
    url.hostname = 'sadovi-mrii.com.ua'
    return Response.redirect(url.toString(), 301)
  }
}
