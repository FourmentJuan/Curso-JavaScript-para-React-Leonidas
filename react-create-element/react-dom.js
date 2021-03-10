function render(element, container){
  if(typeof element == 'string' || element instanceof Element)
    return container.append(element)
  
  function reRender(newChild) {
    container.replaceChild(newChild,childElement);
    childElement = newChild
  }
  element.update = reRender
  let childElement = element.render()
  container.append(childElement)
}





export {
  render
}