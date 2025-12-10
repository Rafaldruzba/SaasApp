const isLocal = window.location.hostname === 'localhost'

const env = {
	API_URL: isLocal ? 'localhost:5000' : import.meta.env.VITE_API_URL,
	URL_SOCKET: isLocal ? 'localhost:3000' : window.location.hostname,
}
console.log('backend')
console.log(env.API_URL)
console.log('frontend')
console.log(env.URL_SOCKET)
export default env
