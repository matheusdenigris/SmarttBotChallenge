import * as Dialog from '@radix-ui/react-dialog'
import { styled } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0;
  background: rgba(0, 185, 161, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.primaryFont};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  strong {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 200% */
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    color: ${(props) => props.theme['gray-300']};
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    input {
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-700']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-300']};
      }
    }
  }
`

interface ActtionButtonProps {
  typebutton: 'Submit' | 'Cancel'
}

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme['red-500']};
  font-size: 0.75rem;
`

export const ActionButton = styled.button<ActtionButtonProps>`
  width: 90px;
  height: 29px;
  border: 0;
  background: ${(props) =>
    props.typebutton === 'Submit'
      ? props.theme['green-500']
      : props.theme['gray-300']};
  border-radius: 6px;
  color: ${(props) => props.theme.primaryFont};
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.typebutton === 'Submit'
        ? props.theme['green-700']
        : props.theme.red};
    transition: background-color 0.2s;
  }
`

export const ActtionButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3.125rem;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const StrategyType = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
`

interface StrategyTypeButtonProps {
  variant: 'Tangram' | 'Price Action'
}

export const StrategyTypeButton = styled(
  RadioGroup.Item,
)<StrategyTypeButtonProps>`
  border: 1px solid ${(props) => props.theme['gray-50']};
  border-radius: 6px;
  width: auto;
  height: 4.125rem;
  cursor: pointer;

  background: ${(props) => props.theme.primaryFont};
  color: ${(props) => props.theme['gray-400']};

  &:hover {
    transform: scale(1.01);
    transition: 0.1s ease-in-out;
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.primaryFont};
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.orange};
    background: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.primaryFont};
  }
`

export const CustomTitle = styled(Dialog.Title)`
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme['gray-500']};
`

export const LabelInput = styled.p`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  color: ${(props) => props.theme['gray-700']};
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 2.25rem;
`
