const useCart = (key, setCartCount) => {

  const handleProduct = newValue =>{
      const currentValue = localStorage.getItem(key)?
      JSON.parse(localStorage.getItem(key)) : []
      localStorage.setItem(key, JSON.stringify([...currentValue, newValue]))
      setCartCount(currentValue.length + 1)
  }

  return [handleProduct]
}

export default useCart