"use strict";

let hp = {

    _element: '',

    _dom: '',
    
    getAllHtml: function(url, callback, waiting){
        waiting ? waiting() : null;
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        fetch(proxyUrl + url)
        .then(data => data.text())
        .then(res => {
          callback(res);
        }).catch(e => {
            console.error(e);
        });
    },

    _stringToHTML: function(str){
        let parser = new DOMParser();
        this._dom = parser.parseFromString(str, 'text/html');
        return this._dom;
    },
    
    find(data, element, returnElem){
        let html = this._stringToHTML(data);
        let found = html.querySelectorAll(element);
        this._element = found;
        if(returnElem===true){
           return this._element;
        }
        else{
           return this;
        }
    },

    length(){
      return this._element.length;
    },

    html(number=0){
          return this._element[number].outerHTML;
    },

    text(index=0){
      return this._element[index].innerText;
    }


};

