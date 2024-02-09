export async function onRequestPost(context) {
  const data = await context.request.json();

  if (
    data.authToken === context.env.ADMIN_AUTH_TOKEN &&
    data.addImageAuthToken === context.env.ADMIN_ADD_IMAGE_AUTH_TOKEN
  ) {
    try {
      const response = await context.env.JVPHOTOGRAPHY_DB.prepare(`INSERT INTO images VALUES (
        '${crypto.randomUUID()}',
        '${data.slug}',
        '${data.name}',
        '${data.description}',
        '${data.tags}',
        '${data.date}',
        '${data.location}',
        '${data.thumbnail}',
        '${data.image}',
        '${data.folder}'
      )`).run();
      return new Response(response, { status: 200 });
    } catch (error) {
      return new Response(error, { status: 500 });
    }
  } else {
    return new Response("401 Unauthorized", { status: 401 });
  }
}
