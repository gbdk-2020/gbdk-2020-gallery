const SORT_BEFORE = -1;
const SORT_AFTER  =  1;
const SORT_NOCHANGE = 0;

// Sorting dropdown list options
const SORTING_FEATURED    = "Featured";
const SORTING_FEATUREDMIX = "Featured + Mix"; // Featured with a N % chance of random shuffling on a given entry
const SORTING_YEAR        = "Year Released";
const SORTING_NEW_ADDS    = "Recently Added";
const SORTING_TITLE       = "Title";
const SORTING_CATEGORY    = "Categories";
const SORTING_AUTHOR      = "Developer";

const SORTING_DEFAULT = SORTING_FEATUREDMIX; // SORTING_FEATURED;
const FEATURED_MIX_SWAP_THRESHOLD = 0.06; // 6% chance of swap on a given entry for SORTING_FEATUREDMIX

const SORT_OPTIONS = [
    SORTING_FEATUREDMIX,  // Default sorting type
    SORTING_FEATURED,
    SORTING_YEAR,
    SORTING_NEW_ADDS,
    SORTING_TITLE,
    SORTING_AUTHOR,
    SORTING_CATEGORY];


const FILTER_ALL = "All"
const FILTER_ENGINE_NONE = "No Engine"

// Main list of gallery items
var galleryArray;
var gallerySorting = SORTING_FEATURED;
