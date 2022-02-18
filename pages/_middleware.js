export default async function middleware(req) {
  console.log({
    "req.nextUrl.pathname": req.nextUrl.pathname,
    "req.page.name": req.page.name,
  });

  return new Response(
    JSON.stringify({
      "req.nextUrl.pathname": req.nextUrl.pathname,
      "req.page.name": req.page.name,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
