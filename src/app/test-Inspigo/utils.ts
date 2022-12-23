const sortData = (data: Array<number>) => {
  return data.sort((x, y) => x - y)
}

const getValidNumber = (data: string, separator: string = ",") => {
  const arrayOfData = data.split(separator)
  const setOfNumber = new Set<number>()

  for (let i = 0; i < arrayOfData.length; i++) {
    const value = arrayOfData[i]
    if (value === "") continue

    const number = Number(value)
    if (number) setOfNumber.add(number)
    else return null
  }

  return sortData([...setOfNumber])
}

export { getValidNumber, sortData }
