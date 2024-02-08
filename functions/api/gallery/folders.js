export async function onRequestGet(context) {
  const GALLERY = context.env.JVPHOTOGRAPHY_DB;
  const folders = GALLERY.prepare("SELECT * FROM folders");
  const data = await folders;

  return Response.json(data);
}