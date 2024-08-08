function getUrlParameterValue(url, parameter) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get(parameter);
}