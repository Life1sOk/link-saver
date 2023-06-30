export const replaceSpaceHelper = (text: string) => {
  return text.replace(/\s/g, "");
};

export function checkPassword(password: string): boolean {
  const specialChars = /[*@!#%&()^~{}]+/;
  const lengthCheck = password.length >= 6;
  const specialCharCheck = specialChars.test(password);

  return lengthCheck && specialCharCheck;
}
