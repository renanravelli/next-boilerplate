import * as S from './styles'

export default function Home({
                               title = 'React Avançado',
                               description = 'TypeScript, ReactJS, NextJS e Styled Components'
                             }) {
  return (
    <S.Wrapper>
      <S.Logo src="https://d33wubrfki0l68.cloudfront.net/6b19a409f82c8c0c94fff2c927f4dc5bb3291ccd/b93d3/img/logo.svg"
              alt="Logo do React Avançado"/>
      <S.Title>{title}</S.Title>
      <S.Description>
        {description}
      </S.Description>
      <S.Illustration
        src="https://d33wubrfki0l68.cloudfront.net/cf9dfe86983925690340feb07037ee260f872e34/74dff/img/hero-illustration.svg"
        alt="Desenvolvendor na frente do computador"/>
    </S.Wrapper>
  )
}
