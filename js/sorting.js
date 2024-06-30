
// Sort the gallery items before display
// TODO: UI, flexibility
function sortData(galleryItems) {
    galleryItems.sort((a, b) => {
        if      (a.featuredPriority > b.featuredPriority) return SORT_BEFORE;
        else if (a.featuredPriority < b.featuredPriority) return SORT_AFTER;

        if      (a.categoryTags < b.categoryTags) return SORT_BEFORE;
        else if (a.categoryTags > b.categoryTags) return SORT_AFTER;

        // if (a.authorName != b.authorName)
        //     return a.authorName > b.authorName;

        if      (a.itemTitle < b.itemTitle) return SORT_BEFORE;
        else if (a.itemTitle > b.itemTitle) return SORT_AFTER;

        // Default, no change
        return 0;
    });

    return galleryItems;
}

