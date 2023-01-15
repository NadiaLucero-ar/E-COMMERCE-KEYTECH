import styled from "styled-components"



export const Container = styled.div`
     padding: 10px 10px;
     background: #000000;
`
     

export const Wrapper = styled.div` 
     display: flex;
     flex-direction: column;
     justify-content: center;
     max-width: 2000px;
     margin: 0 auto;
     
`

export const Column = styled.div` 
     display: flex;
     flex-direction: column;
     text-align: left;
     margin-left: 5px;
     color: #8821D6;
     p{
          font-size: 20px;
     }
     h3{
          text-decoration: underline;
     }
     

`    

export const Row = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     grid-gap: 50px;

     @media (max-width: 1000px) {
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     }



     copyright{
          bacground-color: var(--dark-bg);
          display: flex;
          justify-content: center;
          color: #ffffff;
          text-align: center;
          padding: 1rem 0;
          margin-top: 1rem;
     }
`    

export const Link = styled.a`
    color: #8821D6;
    margin-bottom: 16px;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    
    &:hover {
          color: #ff7c99;
          transition: 400ms ease-in;
    }
`
    

export const Title = styled.p`
    font-size: 20px;
    color: #8821D6;
    margin-bottom: 25px;
    text-transform: uppercase;
    font-weight: bold;
`  


