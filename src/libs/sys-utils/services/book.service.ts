import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksCollection: AngularFirestoreCollection<IBook>;
  bookDoc: AngularFirestoreDocument<IBook>;
  books: Observable<IBook[]>;

  constructor(private afStore: AngularFirestore) {
    this.booksCollection = this.afStore.collection(
      'books',
      ref => ref.orderBy('title', 'asc')
    );
    this.books = this.booksCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as IBook;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getBooks(): Observable<IBook[]> {
    return this.books;
  }

  getIndividualBook(book: IBook): AngularFirestoreDocument<IBook> {
    this.bookDoc = this.afStore.doc(`books/${book.id}`);
    return this.bookDoc;
  }

  addBook(book: IBook) {
    this.booksCollection.add(book);
  }

}
