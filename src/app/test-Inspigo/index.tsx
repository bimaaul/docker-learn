import { useRef, useState } from "react"
import { getValidNumber } from "./utils"
import inputStyle from "./index.module.css"

function InspigoTest() {
  const [data, setData] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleValidateInput = () => {
    const data = inputRef.current?.value

    if (data) {
      const validNumber = getValidNumber(data)
      setData(() => (validNumber ? validNumber.join(", ") : "Data tidak valid"))
    }
  }

  const resetValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") setData("")
  }

  return (
    <>
      <div className={inputStyle.app}>
        <div className={inputStyle.wrapper}>
          <div className={inputStyle.inputContainer}>
            <input ref={inputRef} onChange={resetValidation} type="text" />
            <button onClick={handleValidateInput}>Evaluate</button>
          </div>
          <div className={inputStyle.resultContainer}>{data}</div>
        </div>
      </div>
    </>
  )
}

export default InspigoTest
