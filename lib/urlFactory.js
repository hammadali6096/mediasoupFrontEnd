let protooPort = 4000;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId })
{
	let hostname = window.location.hostname;
	
	protooPort=4000;
	// hostname = 'ec2-54-146-90-13.compute-1.amazonaws.com';
	hostname = 'ec2-18-207-211-26.compute-1.amazonaws.com';
	console.log(hostname);
	console.log(protooPort);

	console.log(`wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`);

	return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
}
// Error: listen EADDRINUSE: address already in use /tmp/mediasoup-demo.sock\n