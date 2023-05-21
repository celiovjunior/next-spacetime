'use client'

import { Camera } from "lucide-react";
import { MediaPicker } from "./MediaPicker";
import { FormEvent } from "react";
import { api } from "@/lib/api";
import Cookie from 'js-cookie'
import { useRouter } from "next/navigation";

export function NewMemoryForm() {
  const router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ' '
    
    if (fileToUpload) {
      const uploadFormData = new FormData()

      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)
    
      coverUrl = uploadResponse.data.fileUrl     
    }

    const token = Cookie.get('token')

    await api.post('/memories', {
      coverUrl,
      content: formData.get('content'),
      isPublic: formData.get('isPublic'),
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">

      <div className="flex items-center gap-4">
        <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">Upload media
        <Camera className="w-4 h-4" /></label>
        <label htmlFor="isPublic" className="flex items-center text-sm gap-1.5 text-gray-200 hover:text-gray-100">
          <input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 " />
          Turn this memory public
        </label>
      </div>

      <MediaPicker />

      <textarea name="content" spellCheck={false} className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0" placeholder="Feel free to add a picture, video or testimonial about this experience that you want to remember for ever" />
  
      <button className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-400 transition-colors  self-end" type="submit">Save</button>
    </form>
  )
}