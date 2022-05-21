export const truncate = (input, baseLength = 25) =>
  input.length > baseLength ? `${input.substring(0, baseLength)}...` : input;
