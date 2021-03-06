const initialize = () => {
    //Basic Actions Section
    const onboardButton = document.getElementById('login');
  
    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
      //Have to check the ethereum binding on the window object to see if it's installed
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    };
  
    //------Inserted Code------\\
    const MetaMaskClientCheck = () => {
      //Now we check to see if MetaMask is installed
      if (!isMetaMaskInstalled()) {
        //If it isn't installed we ask the user to click to install it
        onboardButton.innerText = 'Click here to install MetaMask!';
      } else {
        //If it is installed we change our button text
        onboardButton.innerText = 'Connect';
      }
    };
    MetaMaskClientCheck();
    //------/Inserted Code------\\
  };