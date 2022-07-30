import PropTypes from 'prop-types';//hay que instalar manualmente npm install prop-types

const newMessage = {
    message: 'hola mundo',
    title: 'martin',
    edad: 34
};
const martin = {
    nombre: 'martin',
    apellido: 'drab',
    edad: 25,
    casado: false,
};

// function getMessage(){
//     return martin
// }

    export const FirstApp = (   {title , subtitle }   ) => {
//    console.log(props)
    // if(  !title   ){
    //     throw new Error('el titulito no existe');
    // }
    return(

        //siempre hay que llevar un solo elemento padre para eso usamos <>....</> si son varias cosas
        <> 
            
          {/* ?\  <h1>    {  JSON.stringify (  getMessage() )   }  </h1> */}
            <code>  {   title   }   </code>
            <p> {   subtitle    }  </p>
        </>
    
    ) 
}
//IMPORTANTE NO SE  PUEDE PONER OBJETOS DENTRO DEL RETURN

//creamos objeto para la protypes. antes installar npm install proptypes e importar al principio del documento
FirstApp.propTypes = {
    title: PropTypes.string.isRequired, //obligamos que sea tipo string y que sea requerido
    subtitle: PropTypes.number.isRequired,
}
FirstApp.defaultProps = {
    title: 'no hay titulo',
    subtitle: 'no hay subtitulo'
}