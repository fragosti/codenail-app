import React from 'react';
import Editor from './Editor';

import styled from 'styled-components';

const EditorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
`

const EditorWrapper = styled.div`
  padding: 32px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
`

const Create = () => {
  return (
    <EditorContainer>
      <EditorWrapper> 
        <Editor/>
      </EditorWrapper>
    </EditorContainer>
  )
}

export default Create