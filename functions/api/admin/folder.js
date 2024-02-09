export async function onRequestGet(context) {
  try {
    const message = await context.env.JVPHOTOGRAPHY_DB.prepare("INSERT INTO folders (id, slug, name) VALUES ('16256673-c941-4fd3-b125-8396074be384', 'test', 'Test')").run();
    return new Response(`Success: ${message}`, { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
