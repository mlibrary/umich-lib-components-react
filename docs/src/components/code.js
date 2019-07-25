import React from 'react'
import { jsx } from '@emotion/core'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import * as core from '@umich-lib/core'
import {
  Alert,
  SPACING,
  COLORS
} from '@umich-lib/core'
import theme from './code-theme'
import VisuallyHidden from '@reach/visually-hidden'

const border_color = COLORS.neutral['100']
const background_color = COLORS.neutral['000']

function CodeEditor({ live }) {
  return (
    <div style={{
      margin: `${SPACING['L']} 0`,
      borderLeft: `solid 1px ${border_color}`,
      borderRight: `solid 1px ${border_color}`,
      borderBottom: `solid 1px ${border_color}`,
      background: background_color,
      marginBottom: SPACING['L']
    }}>
      <div css={{
        padding: SPACING['M'],
        borderTop: `solid 1px ${border_color}`,
        whiteSpace: 'normal'
      }}>
        <LivePreview />
      </div>
      <div style={{
        position: 'relative',
        padding: `calc(${SPACING['M']} - 10px)`,
        borderTop: `solid 1px ${border_color}`
      }}>
        <label><VisuallyHidden>Live JSX editor</VisuallyHidden>
          <LiveEditor ignoreTabKey={true} />
        </label>
      </div>
      {live.error && (
        <Alert intent="error">
          <LiveError />
        </Alert>
      )}
    </div>
  )
}

const CodeEditorLive = withLive(CodeEditor)

export default ({children, className, live}) => {
  const language = className ? className.replace(/language-/, '') : ''

  if (live) {
    return (
      <div>
        <LiveProvider
          code={children.trim()}
          scope={{ jsx, ...core }}
          theme={theme}
        >
          <CodeEditorLive />
        </LiveProvider>
      </div>
    )
  }
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={className}
          style={{
            padding: SPACING['M'],
            fontFamily: 'monospace',
            border: `solid 1px ${border_color}`,
            background: background_color,
            marginBottom: SPACING['L'],
            ...style
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}