export const formatDate = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    const day = date.getDate();
    let hours = date.getHours();
    hours = hours > 9 ? hours : `0${hours}`;
    const minutes = date.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}