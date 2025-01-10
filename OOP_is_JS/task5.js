
import { EBook } from './EBook.js';
import { Book } from './Book.js';

const book1 = new Book('Книга Буття', 'Невідомий Автор', 2000);

// Використання статичного методу для створення EBook з форматом "PDF"
const ebook1 = EBook.createEBook(book1, 'PDF');

// Виведення інформації про електронну книгу
ebook1.printInfo();
