import React from 'react'
import EditorJs from 'react-editor-js';
import CheckList from '@editorjs/checklist';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'


function App() {

  const data = []
  return (
    <>
      <h1>hello</h1>
      <EditorJs holder="root"
        data={data}
        tools={{
          checkList: CheckList,
          embed: Embed,
          table: Table,
          paragraph: Paragraph,
          list: List,
          warning: Warning,
          code: Code,
          linkTool: LinkTool,
          image: Image,
          raw: Raw,
          header: Header,
          quote: Quote,
          marker: Marker,
          checklist: CheckList,
          delimiter: Delimiter,
          inlineCode: InlineCode,
          simpleImage: SimpleImage
        }}
      />;
    </>
  )
}
export default App