class SearchView {
    _parentElement = document.querySelector('.search')


    // i need to select the child ( input field ) and get the value)
    getQuery () {
        const query = this._parentElement.querySelector('.search__field').value
        this.#clearInput
        return query
    }

    #clearInput() {
        this._parentElement.querySelector('.search__field').value = ''
    }

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault()
            handler()
        })
    }
}

export default new SearchView()
