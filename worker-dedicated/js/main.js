(() => {

if(!window.Worker) return

// 本ファイルを起点に生成したURL
const url = new URL('worker-dedicated.js', import.meta.url)
const worker = new Worker(url)

const input = document.querySelector('input')
// 専用ワーカーに送信
input.addEventListener('change', (e) => worker.postMessage(e.target.value))
// 専用ワーカーから受信
worker.addEventListener('message', (e) => console.log('e.data', e.data))

})()