export async function onRequestPost(context, request) {
  if (
    request.body.authToken === context.env.ADMIN_AUTH_TOKEN &&
    request.body.addFolderAuthToken === context.env.ADMIN_ADD_FOLDER_AUTH_TOKEN
  ) {
    try {
      context.env.JVPHOTOGRAPHY_DB.prepare(`INSERT INTO folders VALUES (
        ${crypto.randomUUID()},
        ${request.body.slug},
        ${request.body.name}
      )`);
      return new Response("Success", { status: 200 });
    } catch (error) {
      return new Response(error, { status: 500 });
    }
  } else {
    return Response("401 Unauthorized", { status: 401 });
  }
}
