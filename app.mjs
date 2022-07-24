function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!


  // Modal Functionalities
  const popupContainer = document.querySelector('.popup-wrapper')
  const popupClose = document.querySelector('.popup-close')

  window.addEventListener('load', () => {
      popupContainer.style.visibility = 'visible'
  })

  popupClose.addEventListener('click', () => {
      popupContainer.style.visibility = 'hidden'
  })

  popupContainer.addEventListener('click', () => {
      popupContainer.style.visibility = 'hidden'
  })
  
};
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //