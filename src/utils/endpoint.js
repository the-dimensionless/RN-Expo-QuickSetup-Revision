const apikey = "YOUR OMDBAPI KEY";

const endpoints = {
  0: {
    movie: {
      title: "Star Wars",
      release: 1977,
      screenNumber: 0,
      url: `http://www.omdbapi.com/?apikey=${apikey}&t=Star+Wars&y=1977`,
    },
  },
  1: {
    movie: {
      title: "Black Panther",
      release: 2018,
      screenNumber: 1,
      url: `http://www.omdbapi.com/?apikey=${apikey}&t=Black+Panther&y=2018`,
    },
  },
  2: {
    movie: {
      title: "The Matrix",
      release: 1999,
      screenNumber: 2,
      url: `http://www.omdbapi.com/?apikey=${apikey}&t=The+Matrix&y=1999`,
    },
  },
};

export default endpoints;
