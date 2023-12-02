export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello Hello World from Lambda and Github!"),
  }
  return response
}