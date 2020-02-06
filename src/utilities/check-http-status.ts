export default function checkHttpStatus(resp: Response): Response {
  if (resp.status < 200 || resp.status >= 300) {
    throw new Error(`HTTP non-success status: ${resp.status}`);
  }
  return resp;
}