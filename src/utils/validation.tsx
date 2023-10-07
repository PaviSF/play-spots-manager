export function validateUsername(username: string): boolean {
  // Define a regular expression pattern for a valid username.
  const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;

  // Test if the provided username matches the pattern.
  return usernamePattern.test(username);
}

export function validatePassword(password: string): boolean {
  // Define a regular expression pattern for a strong password.
  // This pattern requires at least one uppercase letter, one lowercase letter,
  // one digit, one special character, and a minimum length of 8 characters.
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Test if the provided password matches the pattern.
  return passwordPattern.test(password);
}

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  // Define a regular expression pattern for a valid phone number
  const phonePattern = /^[0-9]{10}$/; // Assumes a 10-digit number without any formatting

  // Remove any non-digit characters (e.g., spaces, dashes, parentheses)
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Check if the cleaned phone number matches the pattern
  return phonePattern.test(cleanedPhoneNumber);
};
