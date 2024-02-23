import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false,
  };

  //componentDidMount() {

  /*
            const series = ["Vikings", "Game of thrones"];
            setTimeout(() => {
              * this.setState({ series: series }); // you can write only {serious} when they have the 'same name'.
              this.setState({ series });
            }, 2000);
  */

  /*
      * we can put these methods inside 'onSeriesInputChange' instead of using "componentDidMount()":
     
    // fetch 'Data' from 'API': Now we launch an API 'request' at every time our app component renders يتم عرضه.
    // 'fetch' returns a 'promise'
    fetch("https://api.tvmaze.com/search/shows?q=vikings")
      .then((response) => {
        console.log(response); // Response {type: 'cors', url: 'https://api.tvmaze.com/search/shows?q=vikings', redirected: false, status: 200, ok: true, …}
        return response.json();
      })

      .then((json) => {
        console.log(json); // To render/display all the 'shows' of 'our series'.
        // Array(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // 0: score: 0.9108788show: {id: 29, url: 'https://www.tvmaze.com/shows/29/vikings', name: 'Vikings', type: 'Scripted', language: 'English', …}[[Prototype]]:Object .........

        // to update the 'series' data, Not to be 'empty':
        // Lets set the 'setState()' of our app:
        this.setState({ series: json });
      });

    //   .catch((error) => {
    //     console.log(error); // Handle any errors that occurred during fetching
    //   });
  }

  */

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>

        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please enter series name into the input</p>
        )}

        {isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV series have been found with this name</p>
        )}

        {isFetching && <Loader />}

        {!isFetching && (
          <div>
            <SeriesList list={this.state.series} />
          </div>
        )}
      </div>
    );
  }
}

export default Series;
