const useCart = (key) => {

  const handleProduct = newValue =>{
      const currentValue = localStorage.getItem(key)?
      JSON.parse(localStorage.getItem(key)) : []
      localStorage.setItem(key, JSON.stringify([...currentValue, newValue]))
  }

  return [handleProduct]
}

export default useCart