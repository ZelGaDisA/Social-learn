export const requred = value => {
    if (value) return undefined;

    return "error message";
}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.lenght > maxLenght) return `Max lenght is ${maxLenght} symbols`;

    return undefined;
}

export const maxLenght = value => {
    if (value.lenght > 30) return "Max lenght is 30";

    return undefined;
}