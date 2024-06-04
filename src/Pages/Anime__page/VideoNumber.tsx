import React from 'react'
type TitleProps ={
  url:string,
  index:number,
  choiseAnime:any
}

export default function VideoNumber({url, index, choiseAnime}:TitleProps) {
  return <div data-url={url} onClick={choiseAnime}>{Number(index+1)}</div>
}
