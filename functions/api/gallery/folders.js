export async function onRequestGet(context) {
  const folders = context.env.JVPHOTOGRAPHY_DB.prepare("SELECT * FROM folders");
  const data = await folders.all();

  return Response.json(data);
}