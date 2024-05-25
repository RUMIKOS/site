import React from 'react'

export default function VideoNumber({url, index, choiseAnime}) {
  return <div data-url={url} onClick={choiseAnime}>{Number(index+1)}</div>
}
