
let address = {
    street: 'gato',
    city:'gatolândia',
    zipCode: 'g'
  };
  
  function showAddress(address){
      for (let key in address)
        console.log(key, address[key]);
  }
  
  showAddress(address);