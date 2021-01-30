import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components'

import db from '../db.json';

import Widget from '../src/components/Widget' ;
import QuizBackground from '../src/components/QuizBackground';

import Footer from '../src/components/Footer';

import GitHubCorner from '../src/components/GitHubCorner';

import QuizLogo from '../src/components/QuizLogo';


// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// function Title(props){  // propcidades/propruedades , pode ser qualer nome
//   return( 
//     <h1>{
//        props.children}
//     </h1>
//     )
// }

// const BackgroundImage = styled.div`
//     background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;

// `;

   // <div style={{ backgroundImage:`url(${db.bg})`}}>
    //   teste teste
    // </div>

const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
      margin: auto;
      padding: 15px;
    }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> caixa alto</h1>
          </Widget.Header>
          <Widget.Content>
            <p> tesxto </p>  
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1> caixa baixo</h1>
          </Widget.Header>
          <Widget.Content>
            <p> tesxto </p>  
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="localhost:300" />
    </QuizBackground>
  );
}