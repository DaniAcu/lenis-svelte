let counter = 0;
export function getId() {
    counter += 1

    return counter + '';
}