export async function onRequestGet(context) {
  const images = context.env.JVPHOTOGRAPHY_DB.prepare("SELECT * FROM images");
  const data = await images.all();

  return Response.json(data);
}