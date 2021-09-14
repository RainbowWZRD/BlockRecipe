import View from "./view.js";
import icons from "url:../../img/icons.svg";

class PaginationView {
    _parentElement = document.querySelector('.pagination')

    _generateMarkup() {
        const numPages = Match.ceil(this._data.results.length / this._data.resultsPerPage)
        const currPage = this._data.page
        console.log(numPages);

        //PAGE 1 AND OTHER PAGES
        if(currPage === 1 &&  numPages > 1) {
            return `
            <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
            `
        }

        //LAST PAGE 
        if(currPage === numPages && numPages > 1) {
            return `
            <button class="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
            `
        }

        //PAGE IN THE MIDDLE
        if(currPage  < numPages) {
            return `
            <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
            `
        }

            //PAGE 1, NO OTHER PAGES
            if(currPage === 1) {
                return ''
            }
    

    }
}

export default new PaginationView()