const postData = async (url: string | URL, data: object) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error("There was an error!", error);
  }
};
export { postData };
