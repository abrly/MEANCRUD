import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getBook(this.route.snapshot.params['id']);


  }

  getBook(id) {

    this.http.get(['/book/'] + id ).subscribe(

      (res) => {


        this.book = res;

      }

    );

  }


  updateBook(id) {

   // console.log('update book id : ' + id );
   // console.log('update data : ' +  this.book);

    this.http.put('/book/' + id, this.book)
      .subscribe(res => {

         id = res['_id'];
         this.router.navigate(['/book-details', id]);
       // console.log('PUT success .+ ' + res['_id'] );
        }, (err) => {
          console.log(err);
        }
      );
  }


}
