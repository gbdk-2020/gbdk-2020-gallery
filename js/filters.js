

// Create filter entries based on attributes of all gallery items
function populateFilters(galleryItems) {
    const categoryTagsSet  = new Set();
    const gameTypesTagsSet = new Set();
    const platformsTagsSet = new Set();
    const yearReleasedSet  = new Set();
    const filterAll = "<option selected value=\"" + FILTER_ALL + "\">" + FILTER_ALL + "</option>";

    // Parse the JSON gallery entries and extract tags from them
    galleryItems.forEach(item => {
        if (item.categoryTags) item.categoryTags.split(', ').forEach(tag =>  categoryTagsSet.add(tag));
        if (item.gameTypeTags) item.gameTypeTags.split(', ').forEach(tag => gameTypesTagsSet.add(tag));
        if (item.platformTags) item.platformTags.split(', ').forEach(tag => platformsTagsSet.add(tag));
        if (item.yearFirstReleased != '') yearReleasedSet.add(item.yearFirstReleased);
    });


    // Now sort and create filter option item entries for each tag per type in html form
    const categoryOptions = Array.from(categoryTagsSet).map(tag =>  `<option value="${tag}">${tag}</option>`).sort().join('');
    const gameTypeOptions = Array.from(gameTypesTagsSet).map(tag => `<option value="${tag}">${tag}</option>`).sort().join('');
    const platformOptions = Array.from(platformsTagsSet).map(tag => `<option value="${tag}">${tag}</option>`).sort().join('');
    const yearReleasedOptions = Array.from(yearReleasedSet).map(tag => `<option value="${tag}">${tag}</option>`).sort().join('');

    // And attach them to the multi-select controls
    document.getElementById('categoryTagsFilter').innerHTML = filterAll + categoryOptions;
    document.getElementById('gameTypeTagsFilter').innerHTML = filterAll + gameTypeOptions;
    document.getElementById('platformTagsFilter').innerHTML = filterAll + platformOptions;
    document.getElementById('yearReleasedFilter').innerHTML = filterAll + yearReleasedOptions;

    // Call the function to render the gallery
    createGalleryItems(galleryItems);
}


// Check for a given gallery item if it's tags of type N are enabled by the matching multi-select filter
function checkMultiSelectFilter(filterName, filterTagsSelected, item) {
    var isEnabled = true;
    if (item.dataset[filterName + 'Tags']) {
        isEnabled = false;
        // Extract all tags from the item
        item.dataset[filterName + 'Tags'].split(', ').forEach(tag => {
            // Check if any of the item tags is enabled as a selection in the Filter
            if (filterTagsSelected.some(value => (value === tag) || value === FILTER_ALL)) { isEnabled = true; }
        });
    }
    return isEnabled;
}


// Update displayed items based on their metadata and the filters
function updateFilters() {
    const categoryTagsSelected = Array.from(document.getElementById('categoryTagsFilter').selectedOptions).map(option => option.value);
    const gameTypeTagsSelected = Array.from(document.getElementById('gameTypeTagsFilter').selectedOptions).map(option => option.value);
    const platformTagsSelected = Array.from(document.getElementById('platformTagsFilter').selectedOptions).map(option => option.value);
    const openSourceOnly  = document.getElementById('openSourceFilter').checked;
    const linkPlayOnly    = document.getElementById('linkPlayFilter').checked;
    const cartReleaseOnly = document.getElementById('cartReleaseFilter').checked;
    const items = document.querySelectorAll('.gallery_grid_item');


// TODO: Year filter

    // Hide all items first
    // items.forEach(item => item.style.display = 'none');

    // Check whether each item is enabled based on the filters
    items.forEach(item => {
        let categoryEnabled = checkMultiSelectFilter('category', categoryTagsSelected, item);
        let gameTypeEnabled = checkMultiSelectFilter('gameType', gameTypeTagsSelected, item);
        let platformEnabled = checkMultiSelectFilter('platform', platformTagsSelected, item);

        if ((openSourceOnly  === true) && (!item.dataset.hasOwnProperty('isOpenSource'))) item.style.display = 'none';
        else if ((linkPlayOnly    === true) && (!item.dataset.hasOwnProperty('supportsLinkPlay'))) item.style.display = 'none';
        else if ((cartReleaseOnly === true) && (!item.dataset.hasOwnProperty('hasPhysicalRelease'))) item.style.display = 'none';
        else if (categoryEnabled && gameTypeEnabled && platformEnabled) { item.style.display = ''; }
        else item.style.display = 'none';
    });
}

function initFilters() {
    // Event listener to handle filter changes
    // document.querySelectorAll('.filter_container select[multiple]').forEach(filter => {
    // document.querySelectorAll('.filter_container select[multiple], input').forEach(filter => {
    document.querySelectorAll('.filter_container select, input').forEach(filter => {
        filter.addEventListener('change', () => {
            updateFilters();
        });
    });
}
