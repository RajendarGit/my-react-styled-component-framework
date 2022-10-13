import styled, { css } from "styled-components"
import { Box } from "./Box"

const MainWrapper = styled(Box)`
    padding-top: 2rem;
    padding-bottom: 2rem;
    ${({navFixed}) => navFixed === true && css`
        padding-top: 6rem;
    `}
`
export const Main = ({topGutter, children}) => {
  return (
    <MainWrapper navFixed={topGutter}>
    {children}
    </MainWrapper>
  )
}
