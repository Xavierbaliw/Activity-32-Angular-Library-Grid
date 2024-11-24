import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    { id: 1, title: 'The Atlantic World: America and the Netherlands', author: 'R. J. Oostindie', genre: 'Historical analysis', year: 2021, coverImage: 'assets/img/book1.jpg' },
    { id: 2, title: 'California as I Saw It: First-Person Narratives of California', author: 'Otis A. Singletary', genre: 'Historical Nonfiction or Documentary Literature.', year: 1996, coverImage: 'assets/img/book2.jpg' },
    { id: 3, title: 'Capital and the Bay: Narratives of Washington and the Chesapeake Bay Region.', author: 'Francesca McCaffrey', genre: 'Non-Fiction', year: 2018, coverImage: 'assets/img/book3.jpg' },
    { id: 4, title: 'Humpty Dumpty.', author: 'Arthur Rackham', genre: 'childrens literature or Nursery rhyme.', year: 1871, coverImage: 'assets/img/book4.jpg' },
    { id: 5, title: 'Early Baseball Publications', author: 'William W. Adams', genre: 'Instructional Manual/Sport', year: 1885, coverImage: 'assets/img/book5.jpg' }
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
