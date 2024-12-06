const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/send";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  const response = await fetch(endpoint, options);
  
  // Check if the response is empty or not in JSON format
  if (!response.ok) {
    console.error("Error with response:", response.statusText);
    return;
  }

  const resData = await response.json(); // Get the response as plain text

  // Try to parse it as JSON if possible
  let jsonData;
  try {
    jsonData = JSON.parse(resData);
  } catch (error) {
    console.error("Failed to parse response as JSON:", error);
    return;
  }

  if (jsonData && response.status === 200) {
    console.log("Message sent.");
    setEmailSubmitted(true);
  } else {
    console.error("Failed to send message:", jsonData);
  }
};
