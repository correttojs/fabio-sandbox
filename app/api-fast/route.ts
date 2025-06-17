import { cookies } from 'next/headers'


export async function GET() {

    const cookieStore = await cookies()
    cookieStore.set('myCookie', new Date().toISOString())
    return new Response(
        JSON.stringify({
            message: 'Hello, World!',
            timestamp: cookieStore.get('myCookie')?.value,
        }),
        {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store',
            },
        }
    );
}