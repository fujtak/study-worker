onmessage = (e) => {
  // 閲覧コンテキストから受信
  console.log('e.data', e.data)
  // 閲覧コンテキストに送信
  postMessage('専用ワーカーから送信')
}

// 閲覧コンテキストに送信
// postMessage('専用ワーカーから送信')