export const getTodos = (active: boolean) => {
  if (active) {
    return 'active wala'
  }
  return 'sabai '
}



export const create = (todo: any) => {
  return 'create garne api'
}



export const update = (id: string, todo: any) => {
  return 'update garne api'
}



export const remove = (id: string) => {
  return 'remove garne api'
}
