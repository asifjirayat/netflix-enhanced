import { useReducer, useEffect, useCallback } from "react";

// Initial state
const initialState = {
  movies: [],
  page: 1,
  hasMore: true,
  loading: true,
  loadingMore: false,
  error: null,
};

// Action types
const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const SET_PAGE = "SET_PAGE";

// Reducer function
const moviesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: action.isFirstPage ? true : false,
        loadingMore: action.isFirstPage ? false : true,
        error: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        movies: action.isFirstPage
          ? action.payload
          : [...state.movies, ...action.payload],
        hasMore: action.currentPage < action.totalPages,
        loading: false,
        loadingMore: false,
        error: null,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        loadingMore: false,
        error: action.error,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
};

// Custom hook
export const useMoviesPagination = (apiCall) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  // Fetch function with useCallback
  const fetchMovies = useCallback(
    async (pageNum) => {
      const isFirstPage = pageNum === 1;

      dispatch({
        type: FETCH_START,
        isFirstPage,
      });

      try {
        const response = await apiCall(pageNum);

        dispatch({
          type: FETCH_SUCCESS,
          payload: response.data.results || [],
          currentPage: pageNum,
          totalPages: response.data.total_pages,
          isFirstPage,
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
        dispatch({
          type: FETCH_ERROR,
          error: "Failed to load movies. Please try again later.",
        });
      }
    },
    [apiCall]
  );

  // Load initial movies
  useEffect(() => {
    fetchMovies(1);
  }, [fetchMovies]);

  // Load more movies when page changes
  useEffect(() => {
    if (state.page > 1) {
      fetchMovies(state.page);
    }
  }, [state.page, fetchMovies]);

  // Load more function
  const loadMore = useCallback(() => {
    if (!state.loading && !state.loadingMore && state.hasMore) {
      dispatch({
        type: SET_PAGE,
        page: state.page + 1,
      });
    }
  }, [state.loading, state.loadingMore, state.hasMore, state.page]);

  // Return state and actions
  return {
    ...state,
    loadMore,
  };
};
