import React from 'react'
import { Dropdown } from 'semantic-ui-react'

interface DropdownSemanticProps {
	title: string;
	data: { text: string; value: string }[];
}


const DropdownSemantic: React.FC<DropdownSemanticProps> = ({title, data}) => (
  <Dropdown
    placeholder={title}
    fluid
    selection
    style={{
      outline: 'none',
      border: 'none',
      background: 'whitesmoke',
      borderRadius: '1rem',
      ':active': {
        border: 'none',
      }
    }}
    options={data}
  />
)

export default DropdownSemantic