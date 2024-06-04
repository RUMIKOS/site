import React from 'react'
type PageSeriesProps={
  series:[]
}
export default function PageSeries({series}:PageSeriesProps) {
  return (
    <div className='series'>{series.length}</div>
  )
}
