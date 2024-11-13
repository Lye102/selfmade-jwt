import { toBase64URL } from "./lib/toBase64.ts";
import type { Header, Payload } from "./types/types.ts";

const header: Header = {
  alg: "HS256",
  typ: "JWT"
}
const payload: Payload = {
  sub: "1234567890",
  exp: 1704704777
};

const headerToBase64URL = toBase64URL(header);
const payloadToBase64URL = toBase64URL(payload);
const joinedHeaderAndPayload = headerToBase64URL + "." + payloadToBase64URL;