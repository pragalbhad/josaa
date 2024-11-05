import React, { Children } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// const StyledContainer = styled.div`
//   @media (min-width: 768px) and (orientation: portrait)  {
//     max-width: 750px;
//   }
//   @media (min-width: 992px) {
//     max-width: 970px;
//   }
//   @media (min-width: 1200px) {
//    max-width: 1170px;
//   }
//   @media (min-width: 1400px) {
//    max-width: 1280px;
//   }
//   @media (min-width: 1440px) {
//     max-width: 1350px;
//   }
// `;

function StudentLayout({children}) {
  return (
    <>
        <main className='main-container'>
            {children}
        </main>
    </>
  )
}

export default StudentLayout