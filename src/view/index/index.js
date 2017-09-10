import {http, params} from '../../utils/index.js'

http.get('http://huaban.com/favorite/fitness/?j7d6y1kx').then(res => {
	console.log(res)
})

console.log(params.parseUrl())
console.log(params.getParameterByName('name'))