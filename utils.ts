export const isDateToday = (dateCreated: string): boolean => {
    const inputDate: Date = new Date(dateCreated);
    const todaysDate: Date = new Date();

    return (
        inputDate.getFullYear() === todaysDate.getFullYear() &&
        inputDate.getMonth() === todaysDate.getMonth() &&
        inputDate.getDate() === todaysDate.getDate()
    );
};

export const consoleLogAndTable = (log: string, table: object): void => {
    console.log(log);
    console.table(table);
}