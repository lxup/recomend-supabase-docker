Deno.serve(async (req) => {
	if (req.method !== 'POST') {
	  return new Response(null, { status: 400 })
	}
	const payload = await req.json()
	console.log('payload', payload)
	const data = {
	  status: 'success',
	  message: 'Subscriber synced successfully',
	  payload
	}
  
	return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
})
  