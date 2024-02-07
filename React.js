function randomColorUtility(length){
    const rand=Math.floor(Math.random()*length)
    console.log('random num',(Math.random()))
    console.log(rand);
    return rand;
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor='#'
    console.log('hexColor')
    for(let i=0;i<6;i++){
      hexColor+=hex[randomColorUtility(hex.length)];      
    }
    console.log(hexColor)   
  }


  handleCreateRandomHexColor();

  