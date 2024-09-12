import React from 'react'
type PageSeriesProps={
  series:string[]
}
export default function PageSeries({series}:PageSeriesProps) {
  return (
    <div className='series'>{series.length}</div>
  )
}
