// ApiCall.js
const API_URL = 'https://healthy-heart-model-server.onrender.com/predict'; // Ensure this URL is correct

export const submitFormData = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        features: Object.values(formData).map(value => {
          const number = Number(value);
          return isNaN(number) ? 0 : number; // Convert to number or use 0 if not a valid number
        })
      }),
    });

    if (!response.ok) {
      // Response was not OK
      const errorMessage = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    // Log error message for debugging
    console.error('API call error:', err);
    throw err;
  }
};
