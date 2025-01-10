import { Book } from './Book.js';
import { EBook } from './EBook.js';

const books = [
  new Book('Володар Перстнів : Повернення Короля', 'Джон Рональд Руел ТЬолкієн', 1955),
  new EBook('Електронна книга 1', 'Автор 2', 2015, 'PDF'),
  new Book('Книга 2', 'Автор 3', 1995),
  new EBook('Божественна комедія', 'Данте Алігєрі', 1321, 'txt'),
];

const oldestBook = Book.getOldestBook(books);
console.log('Найдавніша книга:');
oldestBook.printInfo();

const book1 = new Book('Книга 1', 'Автор 1', 2000);

// Використання статичного методу для створення EBook з форматом "PDF"
const ebook1 = EBook.createEBook(book1, 'PDF');

// Виведення інформації про електронну книгу
ebook1.printInfo();
