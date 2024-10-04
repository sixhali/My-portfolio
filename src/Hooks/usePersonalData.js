import { usMyData } from "../Store/myData"

function usePersonalData() {

  const data = usMyData(({myData})=>(myData))
  return data
}

export default usePersonalData