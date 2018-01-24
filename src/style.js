export default new class Style {
  constructor(){
    this.styles = {
      // This is the styles for form


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
