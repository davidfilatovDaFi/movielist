export async function fetchAPI (url,description) {
  try {
    const response = await fetch(url,description)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}