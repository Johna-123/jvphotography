import { Octokit } from "https://esm.sh/@octokit/core";

export async function onRequestPost(context) {
  const data = await context.request.json();

  if (
    data.authToken === context.env.ADMIN_AUTH_TOKEN &&
    data.addImageAuthToken === context.env.ADMIN_ADD_IMAGE_AUTH_TOKEN
  ) {
    const octokit = new Octokit({
      auth: context.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    });

    const uid = crypto.randomUUID();

    try {
      await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: "johna-123",
        repo: "jvphotography",
        path: `public/assets/images/collection/thumbnails/${uid}.jpg`,
        message: `Upload thumbnail for ${data.name}`,
        content: data.thumbnail,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });

      await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: "johna-123",
        repo: "jvphotography",
        path: `public/assets/images/collection/${uid}.jpg`,
        message: `Upload image for ${data.name}`,
        content: data.image,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });

      const response = await context.env.JVPHOTOGRAPHY_DB.prepare(
        `INSERT INTO images VALUES (
          '${uid}',
          '${data.slug}',
          '${data.name}',
          '${data.description}',
          '${data.tags}',
          '${data.date}',
          '${data.location}',
          '',
          '',
          '${data.folder}'
        )`
      ).run();
      return new Response(response, { status: 200 });
    } catch (error) {
      return new Response(error, { status: 500 });
    }
  } else {
    return new Response("401 Unauthorized", { status: 401 });
  }
}
