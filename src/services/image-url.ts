const getCroppedImageUrl = (url: string) => {
  const img = new Image();

  img.onload = function () {
    if (img.width <= 600 || img.height <= 400) {
    } else {
      const index = url.indexOf("media/") + "media/".length;
      return url.slice(0, index) + "crop/600/400/" + url.slice(index);
    }
  };
  img.src = url;
  return url;
};

export default getCroppedImageUrl;
