// components/MarkdownDisplay.tsx
import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useTheme } from 'styled-components';

interface MarkdownDisplayProps {
  content: string;
}

export default function MarkdownDisplay({ content }: MarkdownDisplayProps) {
  const theme = useTheme();
  const previewStyle = {
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


  return (
    <MdPreview
      value={content}
      theme={theme.name}
      style={previewStyle}
    />
  )
    ;
}
