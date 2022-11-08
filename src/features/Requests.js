const API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXX";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionAndAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchDramaSeries: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchMysterySeries: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchNewsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  fetchRealitySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchScifiSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchSoapSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  fetchTalkSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  fetchWarAndPoliticsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  fetchWesternSeries: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
};
export default requests;
