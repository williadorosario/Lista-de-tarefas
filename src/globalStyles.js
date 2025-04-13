import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

        body {

            margin: 0;
            padding: 0;
            box-sizing: border-box;
            width:100%;
            height:100vh;   
            overflow:hidden;
            background-image: url("https://img.freepik.com/fotos-gratis/caderno-plano-com-lista-de-tarefas-na-mesa_23-2148938726.jpg?t=st=1744543004~exp=1744546604~hmac=a2bd9537e4dd182c082e74aff0d2d7a71e61b513de1cae5b466387bdeb1dceb7&w=996");
            background-position:center;
            background-size:cover;
            background-repeat:no-repeat;
            
            
        }
        
        * {
            font-family: "Poppins", sans-serif;
        }
    
    
`;

export default GlobalStyle;
