import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest) {
  // creating an url to redirect for
  const redirectURL = new URL('/', request.url)


  // store the token by cookies
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=$; Path=/; max-age=0`
    }
  })
}