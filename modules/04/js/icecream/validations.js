function isRequired(params){
  throw new Error(`${params} es requerido`)
}

export { isRequired }