import { cookies } from 'next/headers'


export async function GET() {

    const cookieStore = await cookies()
    cookieStore.set('myCookie', new Date().toISOString())
    await new Promise(resolve => setTimeout(resolve, 7000)) // Simulate some delay
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