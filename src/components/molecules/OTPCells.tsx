
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/atoms/InputOTP"
 
type Props = {
    numberOfCells?: number
}

export function InputOTPPattern(props: Props) {
  const cellCount = props.numberOfCells || 7;
  const cells = [...Array(cellCount).keys()];

  return (
    <InputOTP maxLength={8} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      {cells.map((currentCell) => (
        <InputOTPGroup>
          <InputOTPSlot index={currentCell} />
        </InputOTPGroup>
      )
      )}
    </InputOTP>
  )
}
