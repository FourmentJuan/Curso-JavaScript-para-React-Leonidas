import {makeIceCream} from './icecream-machine.js'
  
  const $flavors = document.querySelectorAll('.flavor')
    //console.log($flavors)
    function selectFlavor(){
      this.classList.toggle('is-active')
    }

    $flavors.forEach(($el)=>$el.addEventListener('click',selectFlavor))
    window.btn.addEventListener('click',()=>{
      const $flavors = document.querySelectorAll('.flavor.is-active')
      console.log($flavors)
      try{
         makeIceCream($flavors[0],$flavors[1])
      }catch(error){
        alert('Aun no completa los sabores para preparar tu helado')
      }
     
    })