const accessToken = "IGQWRQRHpsOXM4bkN5b0pybW9SQi0xUWFfOHVTWXgyNjVIVjhHZAHB6bTBNQUVZAQnZAfbC0wMUxWeFZAXZAS1MQW83MnpFbFpabmJyMGJQcjExS3lISVlUNFBsN2VHVWtKNE9vcWFPbFFKU2dWV3FwSm1iWXJONDk0ZAm8ZD";

async function getInstagramPhotos() {
  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=media_url,permalink&access_token=${accessToken}`);
    const data = await response.json();
    if (!data || !data.data) {
      throw new Error("No data found in Instagram API response.");
    }
    const photos = data.data;
    const photosContainer = document.getElementById("instagram-photos");
    photos.forEach(photo => {
      const portfolioItem = document.createElement("div");
      portfolioItem.classList.add("col-lg-4", "col-md-6", "portfolio-item", "isotope-item");
      const photoElement = document.createElement("img");
      photoElement.src = photo.media_url;
      photoElement.alt = "Instagram Photo";
      const portfolioInfo = document.createElement("div");
      portfolioInfo.classList.add("portfolio-info");
      portfolioInfo.innerHTML = `
        <a href="${photo.permalink}" title="View on Instagram" target="_blank"><i class="bi bi-instagram"></i></a>
      `;
      portfolioItem.appendChild(photoElement);
      portfolioItem.appendChild(portfolioInfo);
      photosContainer.appendChild(portfolioItem);
    });
  } catch (error) {
    console.error("Error fetching Instagram photos:", error);
  }
}
getInstagramPhotos();
