export const extractDatesFromText = (text:string) => {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const datesFound = text.match(datePattern);
    return datesFound || [];
}
