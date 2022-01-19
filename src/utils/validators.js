export const required = value => {
    if (value) return undefined;

    return "error message";
}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.lenght > maxLenght) return `Max lenght is ${maxLenght} symbols`;

    return undefined;
}