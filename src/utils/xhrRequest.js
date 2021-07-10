const xhrGetRequest = (url, onLoadCallback) => {
  let xhr = new XMLHttpRequest();
  if (onLoadCallback) {
    xhr.onload = () => onLoadCallback(xhr);
  }
  xhr.open("GET", url);
  xhr.send();
};

export default xhrGetRequest;
