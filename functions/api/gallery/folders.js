export async function onRequestGet(context) {
  const folders = context.env.JVPHOTOGRAPHY_DB.prepare("SELECT * FROM folders");
  const data = await folders.first();

  return Response.json(data);
}