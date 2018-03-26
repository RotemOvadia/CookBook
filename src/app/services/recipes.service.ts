import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RecipeItem} from '../features/recipe/recipe-item';
import {catchError} from 'rxjs/operators';

@Injectable()
export class RecipesService {
  private _productUrl = '../../db.json';


  constructor(private http: HttpClient) {}

    getRecipes(): Observable<RecipeItem[]> {
      return this.http
        .get<RecipeItem[]>(this._productUrl)
        .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    // getRecipe(id: number): Observable<RecipeItem> {
    //   return this.http
    //     .get<RecipeItem[]>(`../../db.json/`)
    //     .map(recipes => recipes[0])
    //     .filter( recipe => recipe.id === id)
    //     .pipe(catchError((error: any) => Observable.throw(error.json())));
    // }

  getRecipe(id: number): Observable<RecipeItem> {
    return this.http
      .get<RecipeItem[]>(this._productUrl)
      .map((recipes) => recipes
        .filter( recipe =>  recipe.id == id))
      .map((fiteredRecipes) => fiteredRecipes[0])
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

    createRecipe(payload: RecipeItem): Observable<RecipeItem> {
      return this.http
        .post<RecipeItem>(this._productUrl, payload)
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
