import { styled } from '@mui/system'
import * as React from 'react'

type InputWithLabelProps = {
  value: string
  setValue: any
  label: string
  type: string
  placeholder: string
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  value,
  setValue,
  label,
  type,
  placeholder,
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={handleValueChange}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default InputWithLabel

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  margin: '10px 0px',
})

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '1rem',
  marginBottom: '5px',
})

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid #000',
  borderRadius: '5px',
  color: '#dcddde',
  background: '#35393f',
  margin: 0,
  fontSize: '1rem',
  padding: '0 5px',
})
