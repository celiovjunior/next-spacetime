'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input accept="image/*" onChange={onFileSelected} type="file" name="" id="media" className="invisible h-0 w-0" />

      {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />}
    
    </>
  )
}