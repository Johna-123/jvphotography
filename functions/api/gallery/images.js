export async function onRequestGet(context) {
  const images = context.env.JVPHOTOGRAPHY_DB.prepare("SELECT id, slug, name, tags, folder FROM images");
  const data = await images.all();

  return Response.json(data);
}