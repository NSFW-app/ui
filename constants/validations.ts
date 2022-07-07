export const validations = {
  emailValidation: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Email address is not valid',
  },
  passwordValidation: {
    value: /^.{6,}$/,
    message: 'Password must be at least 6 characters long',
  },
}
