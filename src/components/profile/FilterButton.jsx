
export const FilterButton = ({ isOpen, setIsOpen, sortedList, setSortedList }) => {

  const handleList = (num) => {

    if (num === '1') {
      const alphaList = sortedList.sort((a, b) => a.title.localeCompare(b.title))
      setSortedList(alphaList)
      setIsOpen(!isOpen)
      console.log(sortedList)
    }
    if (num === '2') {
      const newList = sortedList.sort((a, b) => b.pos - a.pos)
      setSortedList(newList)
      setIsOpen(!isOpen)
      console.log(sortedList)
    }
    if (num === '3') {
      const oldList = sortedList.sort((a, b) => a.pos - b.pos)
      setSortedList(oldList)
      setIsOpen(!isOpen)
      console.log(sortedList)
    }

  }

  return (
    <div
      className="flex gap-x-10 w-44 justify-start w-full">
      <button className='w-[10vw] text-sm text-center font-body text-[#FFFBE9] border border-[#FFFBE9] hover:text-[#FC4ECF] hover:border-[#FC4ECF] px-4 py-2 rounded-full transition-all duration-200' onClick={() => handleList('1')} >Alphabetically</button>
      <button className='w-[10vw] text-sm text-center font-body text-[#FFFBE9] border border-[#FFFBE9] hover:text-[#FC4ECF] hover:border-[#FC4ECF] px-4 py-2 rounded-full transition-all duration-200' onClick={() => handleList('2')} >By Newest</button>
      <button className='w-[10vw] text-sm text-center font-body text-[#FFFBE9] border border-[#FFFBE9] hover:text-[#FC4ECF] hover:border-[#FC4ECF] px-4 py-2 rounded-full transition-all duration-200' onClick={() => handleList('3')} >By Oldest</button>
      <button className='w-[10vw] text-sm text-center font-body text-[#FFFBE9] border border-[#FFFBE9] hover:text-[#FC4ECF] hover:border-[#FC4ECF] px-4 py-2 rounded-full transition-all duration-200'>By Ranking</button>
    </div>
  )
}
