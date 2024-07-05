const SORT_BEFORE = -1;
const SORT_AFTER  =  1;
const SORT_NOCHANGE = 0;

// Sorting dropdown list options
const SORTING_FEATURED = "Featured";
const SORTING_YEAR     = "New Releases";
const SORTING_TITLE    = "Title";
const SORTING_CATEGORY = "Categories";
const SORTING_AUTHOR   = "Developer";

const SORTING_DEFAULT = SORTING_FEATURED;

const SORT_OPTIONS = [
    SORTING_FEATURED,  // Default sorting type
    SORTING_YEAR,
    SORTING_TITLE,
    SORTING_AUTHOR,
    SORTING_CATEGORY];


const FILTER_ALL = "All"

// Main list of gallery items
var galleryArray;
var gallerySorting = SORTING_FEATURED;
