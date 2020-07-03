import { Application, Router, helpers } from "https://deno.land/x/oak/mod.ts";
const { getQuery } = helpers;
const books = new Map<string, any>();

const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/r/:did", async (context) => {
    if (context.params && context.params.did) {
      const res = await fetch(
        `https://did-web.web.app/api/v1/identifiers/${context.params.did}`,
      );
      const didDocument = await res.json();
      context.response.body = didDocument;
    }
  })
  .get("/d/:did", async (context) => {
    const params = getQuery(context, { mergeParams: true });
    if (params.did) {
      context.response.body = "DID is required...";
    }
    const res = await fetch(
      `https://did-web.web.app/api/v1/identifiers/${params.did}`,
    );
    const didDocument = await res.json();
    if (params.service && params.relativeRef) {
      const service = didDocument.service.find((s: any) => {
        return s.id === "#" + params.service;
      });
      const absoluteRef = service.serviceEndpoint + params.relativeRef;
      const res = await fetch(absoluteRef);
      context.response.body = await res.text();
    }
  });

// http://localhost:8000/d/did:web:did.actor:carol?service=github&relativeRef=/OR13/dndx/master/mod.ts

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
