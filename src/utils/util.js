export function validateFile(fileId) {
  return false;
}

export function validateUser(userId) {
  return false;
}

export function validateAuthorized(fileId, userId) {
  return false;
}

export function validate({ fileId, userId }) {
  return validateFile(fileId)
    && validateUser(userId)
    && validateAuthorized(fileId, userId);
}
