import React from 'react'

export default function layout({
  params,
  searchParams,
}: {
  params: { boardId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div>
      layout
    <p>{params.boardId}</p>
    {JSON.stringify(searchParams)}
    </div>
  )
}
