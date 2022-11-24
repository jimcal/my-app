// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  runtime: 'experimental-edge',
}

export default async function (req) {
  return new Response(
    JSON.stringify({ name: ' Jim Liu'}),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
