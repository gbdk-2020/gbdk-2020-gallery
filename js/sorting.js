
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

// Sort by featured, with N percent of entries shuffled
function sortFeaturedMix(galleryItems) {

    galleryItems = sortFeatured(galleryItems);

    // let swapcount = 0;
    for (let idx = 0; idx < galleryItems.length; idx++) {
        if (Math.random() < FEATURED_MIX_SWAP_THRESHOLD)  {
            const idx_swap_to = Math.floor(Math.random() * (galleryItems.length - 1));
            // swapcount++;
            // console.log("Swap " + idx + " <-> " + idx_swap_to + ": count = " + swapcount);
            [galleryItems[idx], galleryItems[idx_swap_to]] = [galleryItems[idx_swap_to], galleryItems[idx]];
        }
    }

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


function sortDateAdded(galleryItems) {

    galleryItems.sort((a, b) => {
        if      (a.dateAdded > b.dateAdded) return SORT_BEFORE;
        else if (a.dateAdded < b.dateAdded) return SORT_AFTER;

        if      (a.featuredPriority > b.featuredPriority) return SORT_BEFORE;
        else if (a.featuredPriority < b.featuredPriority) return SORT_AFTER;

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
    if      (gallerySorting === SORTING_NEW_ADDS) return sortDateAdded(galleryItems);
    else if (gallerySorting === SORTING_TITLE)    return sortTitle(galleryItems);
    else if (gallerySorting === SORTING_AUTHOR)   return sortAuthor(galleryItems);
    else if (gallerySorting === SORTING_CATEGORY) return sortCategory(galleryItems);
    else if (gallerySorting === SORTING_FEATUREDMIX) return sortFeaturedMix(galleryItems);
    else                                             return sortFeatured(galleryItems); // Default is Featured
}



