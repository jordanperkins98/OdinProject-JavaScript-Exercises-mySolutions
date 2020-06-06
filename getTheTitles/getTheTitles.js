const getTheTitles = function(books) {
    return books.map(function(obj){
        return obj["title"]
    })
}

module.exports = getTheTitles;
