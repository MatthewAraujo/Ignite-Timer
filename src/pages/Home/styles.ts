import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountDownbutton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountDownbutton = styled(BaseCountDownbutton)`
  background: ${(props) => props.theme['green-500']};
  &:not(:disable):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseCountDownbutton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disable):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
