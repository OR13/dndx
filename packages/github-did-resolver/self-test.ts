// https://github.com/w3c/did-core/issues/327
// import { getHelloWorld } from "https://raw.githubusercontent.com/OR13/dndx/master/mod.ts";
// import { getHelloWorld } from "http://localhost:5000/did:web:123?package=/OR13/dndx/master/mod.ts";
import { getHelloWorld } from "http://localhost:8000/did:github:OR13/dndx/master/mod.ts";
// import { getHelloWorld } from "did:github:OR13?service=github&relativeRef=dndx/master/mod.ts"

const helloWorld = getHelloWorld();

console.log(helloWorld); // Prints "Hello World" in bold
