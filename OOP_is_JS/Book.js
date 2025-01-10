export class Book {
  constructor(name, author, year) {
    (this.name = name), (this.author = author), (this.year = year);
  }
  printInfo() {
    console.log(`Назва книги ${this.name}, Автор книги ${this.author}, Рік видання ${this.year}`);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва повинна бути обов`язковою');
    }
    this._name = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор повинен бути');
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Рік видання повинен бути цілим числом та більше 0.');
    }
    this._year = value;
  }

  static getOldestBook(books) {
    return books.reduce((oldest, currentBook) => {
      return currentBook.year < oldest.year ? currentBook : oldest;
    });
  }
}

const book1 = new Book('Володар Перстнів : Повернення Короля', 'Джон Рональд Руел ТЬолкієн', 1955);

const book2 = new Book('Гаррі Поттер і філософський камінь', 'Джоан Роулінг', 1997);

const book3 = new Book('Божественна комедія', 'Данте Алігєрі', 1321);

book1.printInfo();
book2.printInfo();
book3.printInfo();
