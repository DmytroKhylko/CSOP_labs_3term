// Внесіть зміни в інтерфейс Worker: використовуйте оголошений інтерфейс для поля markPrize.
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
// Визначіть змінну logPrize використовуя визначений раніше інтерфейс.
//  Створіть функцію, яка задовольняє цьому інтерфейсу, присвойте оголошену змінну. Визовіть функцію.
var logPrize = (prize) => console.log(prize);
logPrize("You've got a prize");
