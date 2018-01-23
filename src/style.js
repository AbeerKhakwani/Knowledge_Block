export default new class Style {
  constructor(){
    this.styles = {
      // This is the styles for form
      submitStyle :{
        width: '100%',
        minWidth: '10rem',
        maxWidth: '17rem',
        marginTop:'2em',
        fontWeight: '700',
        letterSpacing:'.04em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        textAlign: 'center',
        fontSize: '1.2rem',
        lineHeight: '3.4rem',
        textOverflow: 'ellipsis',
        color: '#fff',
        backgroundColor: '#747a7e',
        border: '2px solid transparent',
        borderRadius:'2rem',
      },
      center :{
        display:'flex',
        justifyContent:"center",
        textAlign:"center",
      },
      // This is the styles for options
      backgroundColor:{
        backgroundColor: 'rgba(74, 73, 73, 0.2)',
        width:'100%',
        height:'84px',
        display: 'block',
        fontSize:'20px',

      },
      hoverBackground :{
        width:'100%',
        height:'84px',
        fontSize:'20px',

        display: 'block',
      },
      space :{
        width:'100%',
        marginLeft: '2em',
        marginTop:'3em',
        marginLeft: '2em'
      },
      /// Block styles
      blockStyle :{
        borderWidth: '1px',
        borderColor: '#ddd',
        borderStyle: 'solid',
        width:'40%',
        marginTop: '2%',
        marginLeft: '30%',
        padding: '3rem 4rem 5rem',
        boxShadow: '0 0.4rem 1.2rem 0.2rem rgba(0,0,0,.05)',
      },

      //Image styles
      imgStyle  :{
        maxWidth:'100%',
        maxHeight: '38rem',
      },
      divContainer :{
        width: '100%',
        display: 'flex',
        marginBottom:'2em',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }
  }
}
