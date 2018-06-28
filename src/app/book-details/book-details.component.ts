import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//import { book } from '../../../models/book.js';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailsComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log('come here');
    console.log(this.activatedRoute.snapshot.params['id']);

    this.getBookDetailsByID(this.activatedRoute.snapshot.params['id']);
  }

  getBookDetailsByID(id: any) {
    return (this.http.get('/book/' + id).subscribe(
      (data) => {
        this.book = data;
        console.log('success?');
      }
    ));
  }

  deleteBook(id) {
    this.http.delete('/book/' + id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
