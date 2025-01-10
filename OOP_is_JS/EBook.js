
import { Book } from './Book.js';

export class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this.fileFormat = fileFormat;
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this.fileFormat}`);
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    const validFormats = ['PDF', 'TXT']; // Дозволені формати
    if (typeof value !== 'string' || !validFormats.includes(value.toUpperCase())) {
      throw new Error(`Формат файлу повинен бути одним із: ${validFormats.join(', ')}`);
    }
    this._fileFormat = value.toUpperCase();
  }

  static createEBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error('Аргумент має бути екземпляром класу Book');
    }
    return new EBook(bookInstance.name, bookInstance.author, bookInstance.year, fileFormat);
  }
}
