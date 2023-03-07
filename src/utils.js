
export const getId = () => {
  const random = Math.random().toString().slice(2)
  return parseInt(random + Date.now())
}


