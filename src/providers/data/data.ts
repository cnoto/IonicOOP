import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {


  lists: any = [
      {
      listTitle: "Groceries",
         listItems: [
          {
            listName: "strawberries"
          },
          {
              listName: "bananas"
          },
          {
              listName: "mangoes"
          },
          {listName: "kiwi"
          }
        ]
    }
];


// constructor(){
//     console.log('Hello DataProvider Provider');
//     }

}

  // getData(): Object {
  //   return this.lists.listItems;
  // };
