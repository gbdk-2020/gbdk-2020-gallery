



// Load and merge the various gallery data in JSON format
function loadItems() {
    galleryArray = jsonGalleryItemsItch;
    galleryArray = galleryArray.concat(jsonGalleryItemsManual);
    galleryArray = galleryArray.concat(jsonGalleryItemsRomhacking);
    galleryArray = galleryArray.concat(jsonGalleryItemsZGB);
    galleryArray = galleryArray.concat(jsonGalleryItemsCrossZGB);
}

document.addEventListener('DOMContentLoaded', () => {
    loadItems();

    addAndSortGalleryItems();

    populateFilters(galleryArray);

    // Now that filters are populated, try to load any settings from the URL
    urlGetFilters();
    // Add the search control update hooks AFTER the url params are extracted
    // to avoid an overwrite feedback loop as they get set
    addFilterUpdateHooks();
    applyFilters();
});

// Triggered on Forward/Back Navigation button presses
// Uses the states pushed into browser history distinctly changed urls in urlSetFilters()
window.addEventListener("popstate", (event) => {
    // Read the restored URL state and apply it to the UI controls and filtering
    urlGetFilters();
    applyFilters();
});

