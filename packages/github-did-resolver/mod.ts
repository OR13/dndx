import { bold } from "./deps.ts";

export function get_module(url: string): string {
  const github_user = url.split("did:github:")[1].split("/")[0];
  const remaining_path = url.split(`did:github:${github_user}/`)[1];
  return `https://raw.githubusercontent.com/${github_user}/${remaining_path}`;
}

export function get_did_doc(url: string): string {
  const github_user = url.split("did:github:")[1].split("/")[0];
  return `https://raw.githubusercontent.com/${github_user}/ghdid/master/index.jsonld`;
}
