# MovieRow

## html
``` html
<div className="movieRow">
  <div className="coverImg"><img src={this.props.poster} alt="" /></div>
  <h2>{this.props.title} <span className="year">({this.props.year})</span></h2>
  <div className="plot">{this.props.plot}</div>
  <div className="actors">
    <span>Actors: </span>
    <span>{this.props.actors}</span>
    <span> <a href={link}>More</a></span>
  </div>
</div>
```

## link

```
var link = "http://www.imdb.com/title/" + this.props.imdbID;
```

# MovieTable

## html

``` html
<div>
  {rows}
</div>
```

## code
``` javascript
var rows = [];
var filterText = this.props.filterText;
this.props.movies.forEach(function(movie) {
  if (movie.Title.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
    return;
  }
  rows.push(
    <MovieRow
      title={movie.Title}
      poster={movie.Poster}
      year={movie.Year}
      plot={movie.Plot}
      actor={movie.Actors}
      imdbID={movie.imdbID}
    /> );
  );
});
```

# SearchBar

## Html

``` html
<input ref="filterTextInp" type="text" className="searchField" value="" placeholder="Search..." />
```

# SearchableMovieList

## html
``` html
<div>
  <div> [[ Search Bar]] </div>
  <div> [[ MovieList]] </div>
</div>
```


# ReactDOM

## code

``` javascript
ReactDOM.render(
  <SearchableMovieList movies={data.movies} />,
  document.getElementById("content")
)
```
