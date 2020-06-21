export function did_url_to_http_url(url: string): string {
  const github_user = url.split("did:github:")[1].split("/")[0];
  const remaining_path = url.split(`did:github:${github_user}/`)[1];
  //   console.log(github_user);
  //   console.log(remaining_path);
  return `https://raw.githubusercontent.com/${github_user}/${remaining_path}`;
}
