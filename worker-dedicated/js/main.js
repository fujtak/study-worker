(() => {

if(!window.Worker) return

const url = new URL('worker-dedicated.js', import.meta.url) // 本ファイルを起点に生成したURL
const worker = new Worker(url)

const input = document.querySelector('input')
input.addEventListener('change', (e) => worker.postMessage(e.target.value))

})()