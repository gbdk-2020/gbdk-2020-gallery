
// Sort the gallery items before display

function sortFeatured(galleryItems) {

    galleryItems.sort((a, b) => {
        if      (a.featuredPriority > b.featuredPriority) return SORT_BEFORE;
        else if (a.featuredPriority < b.featuredPriority) return SORT_AFTER;

        if      (a.categoryTags < b.categoryTags) return SORT_BEFORE;
        else if (a.categoryTags > b.categoryTags) return SORT_AFTER;

        if      (a.itemTitle < b.itemTitle) return SORT_BEFORE;
        else if (a.itemTitle > b.itemTitle) return SORT_AFTER;

        // Default, no change
        return SORT_NOCHANGE;
    });

    return galleryItems;
}

function sortCategory(galleryItems) {

    galleryItems.sort((a, b) => {
        if      (a.categoryTags < b.categoryTags) return SORT_BEFORE;
        else if (a.categoryTags > b.categoryTags) return SORT_AFTER;

        if      (a.gameTypeTags < b.gameTypeTags) return SORT_BEFORE;
        else if (a.gameTypeTags > b.gameTypeTags) return SORT_AFTER;

        if      (a.itemTitle < b.itemTitle) return SORT_BEFORE;
        else if (a.itemTitle > b.itemTitle) return SORT_AFTER;

        // Default, no change
        return SORT_NOCHANGE;
    });

    return galleryItems;
}


function sortYear(galleryItems) {

    galleryItems.sort((a, b) => {
        if      (a.yearFirstReleased > b.yearFirstReleased) return SORT_BEFORE;
        else if (a.yearFirstReleased < b.yearFirstReleased) return SORT_AFTER;

        if      (a.itemTitle < b.itemTitle) return SORT_BEFORE;
        else if (a.itemTitle > b.itemTitle) return SORT_AFTER;

        // Default, no change
        return SORT_NOCHANGE;
    });

    return galleryItems;
}


function sortTitle(galleryItems) {

    galleryItems.sort((a, b) => {

        if      (a.itemTitle < b.itemTitle) return SORT_BEFORE;
        else if (a.itemTitle > b.itemTitle) return SORT_AFTER;

        // Default, no change
        return SORT_NOCHANGE;
    });

    return galleryItems;
}


function sortAuthor(galleryItems) {

    galleryItems.sort((a, b) => {

        if      (a.authorName < b.authorName) return SORT_BEFORE;
        else if (a.authorName > b.authorName) return SORT_AFTER;

        if      (a.itemTitle < b.itemTitle) return SORT_BEFORE;
        else if (a.itemTitle > b.itemTitle) return SORT_AFTER;

        // Default, no change
        return SORT_NOCHANGE;
    });

    return galleryItems;
}


function sortData(galleryItems) {

    if      (gallerySorting === SORTING_YEAR)     return sortYear(galleryItems);
    else if (gallerySorting === SORTING_TITLE)    return sortTitle(galleryItems);
    else if (gallerySorting === SORTING_AUTHOR)   return sortAuthor(galleryItems);
    else if (gallerySorting === SORTING_CATEGORY) return sortCategory(galleryItems);
    else                                          return sortFeatured(galleryItems); // Default is Featured
}



