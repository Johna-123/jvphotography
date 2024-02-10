export async function onRequestGet(context) {
  const image = context.env.JVPHOTOGRAPHY_DB.prepare("SELECT * FROM images WHERE id = ?").bind(context.params.image);
  const data = await image.first();

  return Response.json(data);
}