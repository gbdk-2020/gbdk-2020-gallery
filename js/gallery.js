



// Load and merge the various gallery data in JSON format
function loadData() {

    galleryArray = jsonGalleryItemsItch;
    galleryArray = galleryArray.concat(jsonGalleryItemsManual);

    galleryArray = sortData(galleryArray);
    populateFilters(galleryArray);
}


document.addEventListener('DOMContentLoaded', () => {
    loadData();
    // Now that filters are populated, try to load any settings from the URL
    urlGetFilters();
    // Add the search control update hooks AFTER the url params are extracted
    // to avoid an overwrite feedback loop as they get set
    addFilterUpdateHooks();
    applyFilters();
});
