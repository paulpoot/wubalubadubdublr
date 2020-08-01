export const injectString = (
    str?: string,
    obj?: {
        [key: string]: string;
    },
): string => {
    if (str && obj) {
        let newString = str;

        Object.keys(obj).forEach((key) => {
            newString = newString.split('${' + key + '}').join(obj[key]);
        });
        return newString;
    }
    return '';
};
