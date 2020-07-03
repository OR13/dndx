import { serve } from "https://deno.land/std/http/server.ts";

const body = new TextEncoder().encode("Hello World\n");

const s = serve({ port: 8000 });

console.log("http://localhost:8000/did:github:OR13/dndx/master/mod.ts");

export function get_module(url: string): string {
  const github_user = url.split("did:github:")[1].split("/")[0];
  const remaining_path = url.split(`did:github:${github_user}/`)[1];
  //   console.log(github_user);
  //   console.log(remaining_path);
  return `https://raw.githubusercontent.com/${github_user}/${remaining_path}`;
}

export function get_did_doc(url: string): string {
  const github_user = url.split("did:github:")[1].split("/")[0];
  return `https://raw.githubusercontent.com/${github_user}/ghdid/master/index.jsonld`;
}

const handle_did_github = async (req: any) => {
  if (req.url.split("/").length > 2) {
    const did_url = get_module(req.url);
    const res = await fetch(did_url);
    const body = await res.text();
    req.respond({ body });
  } else {
    const did_url = get_did_doc(req.url);
    const res = await fetch(did_url);
    const didDocument = await res.json();
    const body = new TextEncoder().encode(JSON.stringify({
      didDocument,
    }));
    req.respond({ body });
  }
};

for await (const req of s) {
  if (req.url.indexOf("/did:github:") === 0) {
    handle_did_github(req);
  } else {
    const body = new TextEncoder().encode(JSON.stringify({
      error: "could not handle github:did url...",
    }));
    req.respond({ body });
  }
}
