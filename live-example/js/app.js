var MovieRow = React.createClass({
  render: function(){
    var link = "http://www.imdb.com/title/" + this.props.imdbId;
    return (
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
    )
  }
});

var MovieTable = React.createClass({

  render: function(){
    var rows = [];
    var filterText = this.props.filterText;
    this.props.movies.forEach(function(movie) {
      if (movie.Title.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
        return;
      }
      rows.push(<MovieRow title={movie.Title} year={movie.Year} actors={movie.Actors} poster={movie.Poster} imdbId={movie.imdbID} key={movie.imdbID} plot={movie.Plot} />);
    });

    return (
      <div>
        {rows}
      </div>
    )
  }
});

var SearchBar = React.createClass({
  handleChange: function(){
    this.props.onUserInput(this.refs.filterTextInp.value);
  },
  render: function(){
    return(
      <input ref="filterTextInp" type="text" className="searchField" value={this.props.filterText} placeholder="Search..." onChange={this.handleChange} />
    )
  }
});

var SearchableMovieList = React.createClass({
  getInitialState: function(){
    return {filterText: ''}
  },
  handleFilterTextChange: function(newFilterText) {
    this.setState({
      filterText: newFilterText
    });
  },
  render: function(){
    return(
      <div>
        <div><SearchBar filterText={this.state.filterText} onUserInput={this.handleFilterTextChange} /></div>
        <div><MovieTable movies={this.props.movies} filterText={this.state.filterText} /></div>
      </div>
    )
  }
});

ReactDOM.render(
  <SearchableMovieList movies={data.movies} />,
  document.getElementById("content")
);
