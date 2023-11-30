export const getUserIdFromToken = (token) => {
  // Split the token into its three parts: header, payload, and signature
  const [header, payload, signature] = token.split(".");

  // Decode the base64-encoded payload
  const decodedPayload = atob(payload);

  // Parse the JSON data in the payload
  const user = JSON.parse(decodedPayload);

  return user.userId;
};
