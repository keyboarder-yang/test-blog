export function useTyper(text: string) {
    let index: number = 0;
    let typeValue: string = '';
    const timer: NodeJS.Timeout = setInterval(() => {
        if (index < text.length) {
            console.log(typeValue)
            typeValue += text.charAt(index);
            index++;
        } else {
            clearInterval(timer);
        }
    }, 50);
    return typeValue
}