import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RecipeItem} from '../features/recipe/recipe-item';
import {catchError} from 'rxjs/operators';

@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) {}

    getRecipes(): Observable<RecipeItem[]> {
      return this.http
        .get<RecipeItem[]>("../../db.json")
        .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    createRecipe(payload: RecipeItem): Observable<RecipeItem> {
      return this.http
        .post<RecipeItem>("../../db.json", payload)
        .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    updateRecipe(payload: RecipeItem): Observable<RecipeItem> {
      return this.http
        .put<RecipeItem>(`../../db.json/${payload.id}`, payload)
        .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
  }




// const RECIPES = [{
//   "id": "1",
//   "name": "פאדג' בראוניז",
//   "groceriesList": [
//     {
//       "name": "שוקולד",
//       "quantity": 200,
//       "units": "גרם"
//     },
//     {
//       "name": "חמאה",
//       "quantity": 200,
//       "units": "גרם"
//     },
//     {
//       "name": "ביצים",
//       "quantity": 4,
//       "units": ""
//     },
//     {
//       "name": "סוכר",
//       "quantity": 2,
//       "units": "כוסות"
//     },
//     {
//       "name": "קמח",
//       "quantity": 2,
//       "units": "כוסות"
//     },
//     {
//       "name": "מלח",
//       "quantity": 1,
//       "units": "קורט"
//     }
//   ],
//   "recipeDescription": "לערבב את כל החומרים",
//   "image": "../../assets/Fudge-Brownies2.jpg"
// },
//   {
//     "id": "1",
//     "name": "מאפינס בננה",
//     "groceriesList": [
//       {
//         "name": "בננות",
//         "quantity": 3,
//         "units": ""
//       },
//       {
//         "name": "חמאה",
//         "quantity": 200,
//         "units": "גרם"
//       },
//       {
//         "name": "ביצים",
//         "quantity": 4,
//         "units": ""
//       },
//       {
//         "name": "סוכר",
//         "quantity": 2,
//         "units": "כוסות"
//       },
//       {
//         "name": "קמח",
//         "quantity": 2,
//         "units": "כוסות"
//       },
//       {
//         "name": "מלח",
//         "quantity": 1,
//         "units": "קורט"
//       }
//     ],
//     "recipeDescription": "לערבב את כל החומרים",
//     "image": "../../assets/banana-muffins.jpg"
//   }];
