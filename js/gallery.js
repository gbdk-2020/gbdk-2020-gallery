



// Load and merge the various gallery data in JSON format
function loadData() {

    galleryArray = jsonGalleryItemsItch;
    galleryArray = galleryArray.concat(jsonGalleryItemsManual);

    galleryArray = sortData(galleryArray);
    populateFilters(galleryArray);
}


document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initFilters();
});
