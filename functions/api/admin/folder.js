export async function onRequestGet(context) {
  try {
    context.env.JVPHOTOGRAPHY_DB.prepare(`INSERT INTO folders VALUES (
      ${crypto.randomUUID()},
      'test',
      'Test'
    )`);
    return new Response("Success", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
