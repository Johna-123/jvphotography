export async function onRequestGet(context, {request}) {
  //if (request.body.authToken === context.env.ADMIN_AUTH_TOKEN && request.body.addFolderAuthToken === context.env.ADMIN_ADD_FOLDER_AUTH_TOKEN) {
    //context.env.JVPHOTOGRAPHY_DB.prepare("INSERT INTO folders VALUES ()");
    return Response(Crypto.randomUUID());
  /*} else {
    return Response("401 Unauthorized", {status: 401});
  }*/
}