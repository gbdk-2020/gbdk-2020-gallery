
// Main list of gallery items
var galleryArray;


// Convert gallery items to DOM elements
function createGalleryItems(galleryItems) {
    const container = document.getElementById('galleryContainer');
    galleryItems.forEach(item => {

        // Create main div for each item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery_grid_item';

        // Create inner div for item details
        const itemGrid = document.createElement('div');
        itemGrid.className = 'item_grid';

        // Image
        const img = document.createElement('img');
        img.src = item.imagePreviewURL;
        img.alt = "game image preview";
        itemGrid.appendChild(img);

        // Item Title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'itemTitle';
        titleDiv.textContent = item.itemTitle;
        itemGrid.appendChild(titleDiv);

        // Short Description
        const shortDescDiv = document.createElement('div');
        shortDescDiv.className = 'shortDescription';
        itemGrid.appendChild(shortDescDiv);

        // Author Name
        const authorDiv = document.createElement('div');
        authorDiv.className = 'authorName';
        authorDiv.textContent = item.authorName;
        itemGrid.appendChild(authorDiv);

        // Links
        const linksDiv = document.createElement('div');
        linksDiv.className = 'itemLinks';
        item.linksArray.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.displayText;
            linksDiv.appendChild(linkElement);
        });
        itemGrid.appendChild(linksDiv);


        // Create matching dataset values for tags
        const tags = ['categoryTags', 'gameTypeTags', 'platformTags'];
        tags.forEach(tag => {
            const tagValue = item[tag];
            if (tagValue) {
                itemDiv.dataset[tag] = tagValue;
            }
        });

        // Append everything inside the main div
        itemDiv.appendChild(itemGrid);
        container.appendChild(itemDiv);
    });
}


// Create filter entries based on attributes of all gallery items
function populateFilters(galleryItems) {
    const categoryTagsSet  = new Set();
    const gameTypesTagsSet = new Set();
    const platformsTagsSet = new Set();

    // Parse the JSON gallery entries and extract tags from them
    galleryItems.forEach(item => {
        if (item.categoryTags) item.categoryTags.split(', ').forEach(tag =>  categoryTagsSet.add(tag));
        if (item.gameTypeTags) item.gameTypeTags.split(', ').forEach(tag => gameTypesTagsSet.add(tag));
        if (item.platformTags) item.platformTags.split(', ').forEach(tag => platformsTagsSet.add(tag));
    });

    // Now create filter option item entries for each tag per type in html form
    const categoryOptions = Array.from(categoryTagsSet).map(tag =>  `<option selected value="${tag}">${tag}</option>`).join('');
    const gameTypeOptions = Array.from(gameTypesTagsSet).map(tag => `<option selected value="${tag}">${tag}</option>`).join('');
    const platformOptions = Array.from(platformsTagsSet).map(tag => `<option selected value="${tag}">${tag}</option>`).join('');

    // And attach them to the multi-select controls
    document.getElementById('categoryTagsFilter').innerHTML = categoryOptions;
    document.getElementById('gameTypeTagsFilter').innerHTML = gameTypeOptions;
    document.getElementById('platformTagsFilter').innerHTML = platformOptions;

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
            if (filterTagsSelected.some(value => value === tag)) { isEnabled = true; }
        });
    }
    return isEnabled;
}


// Update displayed items based on their metadata and the filters
function updateFilters() {
    const categoryTagsSelected = Array.from(document.getElementById('categoryTagsFilter').selectedOptions).map(option => option.value);
    const gameTypeTagsSelected = Array.from(document.getElementById('gameTypeTagsFilter').selectedOptions).map(option => option.value);
    const platformTagsSelected = Array.from(document.getElementById('platformTagsFilter').selectedOptions).map(option => option.value);
    const items = document.querySelectorAll('.gallery_grid_item');

    // Hide all items first
    // items.forEach(item => item.style.display = 'none');

    // Check whether each item is enabled based on the filters
            // item.dataset[category-tags].split(', ').forEach(tag =>  categoryTagsSet.add(tag));
    items.forEach(item => {

        let categoryEnabled = checkMultiSelectFilter('category', categoryTagsSelected, item);
        let gameTypeEnabled = checkMultiSelectFilter('gameType', gameTypeTagsSelected, item);
        let platformEnabled = checkMultiSelectFilter('platform', platformTagsSelected, item);

        // const isVisible = selectedValues.some(value => item.dataset[value] === 'true');
        if (categoryEnabled && gameTypeEnabled && platformEnabled) { item.style.display = ''; }
        else item.style.display = 'none';
    });
}

function initFilters() {
    // Event listener to handle filter changes
    document.querySelectorAll('.filterContainer select[multiple]').forEach(filter => {
        filter.addEventListener('change', () => {
            updateFilters();
        });
    });
}



// Sort the gallery items before display
// TODO: UI, flexibility
function sortData(galleryItems) {
    galleryItems.sort((a, b) => {
        if (a.categoryTags != b.categoryTags)
            return (a.categoryTags > b.categoryTags);

        // if (a.authorName != b.authorName)
        //     return a.authorName > b.authorName;

        return a.itemTitle > b.itemTitle;
    });

    return galleryItems;
}


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
