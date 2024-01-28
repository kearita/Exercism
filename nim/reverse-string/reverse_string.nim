proc reverse*(s: string): string =
  var reversed: string
  for value in s:
    reversed.add(value)
  return reversed