'use client'

import { useEffect, useState, useCallback } from 'react'
import { MdEditor } from 'md-editor-rt'
import { useTheme } from 'styled-components'
import axiosInstance from '@/lib/axiosInstance'

export default function MarkdownEditor() {
  const [text, setText] = useState('')
  const theme = useTheme();

  const editorStyle = {
    '--md-color': theme.colors.text,
    '--md-bk-color': theme.colors.background,
    '--md-border-color': theme.colors.border,
    '--md-hover-color': theme.colors.surfaceSecondary,
    '--md-code-bg-color': theme.colors.surface,
    '--md-code-color': theme.colors.textSecondary,
    '--md-pre-bg-color': theme.colors.surface,
    '--md-pre-color': theme.colors.textSecondary,
    '--md-a-color': theme.colors.primary,
    '--md-a-hover-color': theme.colors.accent,
    '--md-blockquote-color': theme.colors.textTertiary,
    '--md-blockquote-bg-color': theme.colors.surfaceSecondary,
    transition: 'all 0.2s ease-in-out',
  } as React.CSSProperties;


  const handleImageUpload = useCallback(async (imageFile: File[]) => {
    const formData = new FormData();
    formData.append('file', imageFile[0])

    try {
      const response = await axiosInstance.post(
        `resume/clipboard_upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/from-data'
          }
        });


      if (response.status === 200) {
        return response.data.url
      }
    }
    catch (error) {
      return "이미지 업로드 실패: " + error;
    }
  }, [])


  // 클립보드 붙여넣기 핸들러
  const handlePaste = useCallback(async (event: ClipboardEvent) => {
    const items = event.clipboardData?.items
    if (!items) return

    const imageFiles: File[] = []

    for (const item of items) {
      if (item.type.startsWith('image')) {
        event.preventDefault()
        const file = item.getAsFile()
        if (file) {
          imageFiles.push(file)
        }
      }
    }

    if (imageFiles.length > 0) {
      const markdownImages = await handleImageUpload(imageFiles)
      setText(prev => prev + '\n![](' + markdownImages + ')\n')
    }
  }, [handleImageUpload])

  // 테마 설정 및 클립보드 이벤트 리스너 등록
  useEffect(() => {
    // 클립보드 이벤트 리스너 추가
    document.addEventListener('paste', handlePaste)
    return () => {
      document.removeEventListener('paste', handlePaste)
    }
  }, [handlePaste])

  return (
    <div className="md-editor-container">
      <MdEditor
        toolbarsExclude={[
          'github',
          'save',
          'pageFullscreen',
          'fullscreen',
          'preview',
          'htmlPreview',
        ]}
        value={text}
        onChange={setText}
        theme={theme.name}
        language="en-US"
        onUploadImg={handleImageUpload}
        style={editorStyle}
        className="custom-editor"
      />

      <input
        id="hidden-image-input"
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={async (e) => {
          if (e.target.files) {
            const markdowns = await handleImageUpload(Array.from(e.target.files))
            setText(prev => prev + '\n' + markdowns.join('\n'))
          }
        }}
      />
    </div>
  )
}
