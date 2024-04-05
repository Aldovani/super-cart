export function verifyStrengthPassword(password: string) {
  const isThereMoreThanEightCharacters = Number(/^(.{8,})$/.test(password))

  const isThereLowCaseAndUpperCase = Number(
    /[a-z]/.test(password) && /[A-Z]/.test(password),
  )

  const isThereNumber = Number(/\d/.test(password))

  const isThereSpecialCharacter = Number(/[@$!%*?.&]/.test(password))

  const isThereMoreThanTwelveCharacters = Number(/^(.{12,})$/.test(password))

  return (
    isThereMoreThanEightCharacters +
    isThereLowCaseAndUpperCase +
    isThereNumber +
    isThereSpecialCharacter +
    isThereMoreThanTwelveCharacters
  )
}
