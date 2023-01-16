
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (arguments.length === 0 || matrix.length === 0) {
    return []
  }
  const result = []

  result.push(...matrix[0])

  for (let i = 1; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      result.push(...matrix[i].reverse())
    } else {
      result.push(...matrix[i])
    }
  }

  return result
}
