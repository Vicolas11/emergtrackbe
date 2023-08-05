export const genRandomNum = (): string => {
  const length = 8;
  const characters = "0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

export const genRandomUsername = (
  firstName: string,
  lastName: string
): string => {
  const firstNamePrefix = firstName.slice(0, 3).toLowerCase();
  const lastNamePrefix = lastName.slice(0, 3).toLowerCase();

  // Generate a random three-digit number
  const randomNumber = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");

  const username = `${firstNamePrefix}${lastNamePrefix}_${randomNumber}`;
  return username;
};

export const genRanNum = (): string => {
  const maxLength = 9;
  let randomNumber = "5";

  // Generate remaining 9 random digits
  for (let i = 0; i < maxLength; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    randomNumber += randomDigit.toString();
  }

  return randomNumber;
};
