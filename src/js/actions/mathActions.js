export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    };
}

export function subractNumber(number) {
    return {
        type: "SUBTRACT",
        payload: number
    };
}
