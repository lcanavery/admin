// has number
const hasNumber = (number: any) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number: any) =>
  new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number: any) =>
  new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count: any) => {
  if (count < 2) return { label: "Muy debil", color: "error.main" };
  if (count < 3) return { label: "Debil", color: "warning.main" };
  if (count < 4) return { label: "Normal", color: "warning.dark" };
  if (count < 5) return { label: "Buena", color: "success.main" };
  if (count < 6) return { label: "Fuerte", color: "success.dark" };
  return { label: "Muy debil", color: "error.main" };
};

// password strength indicator
export const strengthIndicator = (number: any) => {
  let strengths = 0;
  if (number.length > 5) strengths += 1;
  if (number.length > 7) strengths += 1;
  if (hasNumber(number)) strengths += 1;
  if (hasSpecial(number)) strengths += 1;
  if (hasMixed(number)) strengths += 1;
  return strengths;
};
