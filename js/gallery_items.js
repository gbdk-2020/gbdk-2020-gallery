
function removeAllGalleryItems() {
    const items = document.querySelectorAll('.gallery_grid_item');
    items.forEach(item => {
        item.remove();
    });
}


function addAndSortGalleryItems() {
    // Sort items and generate filters
    galleryArray = sortData(galleryArray);

    // Render the gallery into the DOM
    createGalleryItems(galleryArray);
}


// Convert gallery items to DOM elements
function createGalleryItems(galleryItems) {
    const container = document.getElementById('gallery_grid');
    galleryItems.forEach(item => {

        // Create main div for each item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery_grid_item';

        // Create inner div for item details
        const itemContainer = document.createElement('div');
        itemContainer.className = 'itemContainer';

        // Image
        // Add a link (type=primary) if possible for the anchor holding the image
        const imgLink = document.createElement('a');
        item.linksArray.some(function(link) {
            if (link.type === "primary") {
                imgLink.href = link.url;
                imgLink.target="_blank"; /* open link in a new winfow */
                return true
            } else
                return false;
        });
        const img = document.createElement('img');
        img.src = item.imagePreviewURL;
        img.alt = "game image preview for " + item.itemTitle;
        img.loading = "lazy";
        img.className = "itemPreview";
        // Show the following using html5 tooltips (title tag)
        img.title = "Category: "       + item.categoryTags   + "\n" +
                    "Game Type: "      + item.gameTypeTags   + "\n" +
                    "Source License: " + item.licenseType    + "\n" +
                    "Free Download: "  + item.isFreeDownload + "\n" +
                    "Classic GBDK: "   + item.isClassicGBDK + "\n" +
                    "Date Added: "     + item.dateAdded;
        imgLink.appendChild(img);
        itemContainer.appendChild(imgLink);

        // Item Title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'itemTitle';
        titleDiv.textContent = item.itemTitle;
        itemContainer.appendChild(titleDiv);

        // Short Description
        const shortDescDiv = document.createElement('div');
        shortDescDiv.className = 'shortDescription';
        shortDescDiv.textContent = item.shortDescription;
        itemContainer.appendChild(shortDescDiv);

        // Author Name
        const authorDiv = document.createElement('div');
        authorDiv.className = 'authorName';
        authorDiv.textContent = item.authorName;
        itemContainer.appendChild(authorDiv);

        // Links
        const linksDiv = document.createElement('div');
        // Year
        const yearSpan = document.createElement('span');
        yearSpan.className = 'itemYear';
        yearSpan.textContent = item.yearFirstReleased + " - ";
        linksDiv.appendChild(yearSpan);
        // All Links
        linksDiv.className = 'itemLinks';
        item.linksArray.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.displayText;
            linksDiv.appendChild(linkElement);
        });
        itemContainer.appendChild(linksDiv);

        // Add Meta info footer with text cards
        const metaDiv = document.createElement('div');
        metaDiv.className = 'itemMeta';
        // Attach the cards
        item.platformTags.split(', ').forEach(tag => {
            attachClickFilter( appendSpan(tag,  "itemMetaPlatforms",    metaDiv), "platformTagsFilter", tag);
        });
        if (item.hardwareFeatureTags !== '')  item.hardwareFeatureTags.split(', ').forEach(tag => {
            attachClickFilter( appendSpan(tag, "itemMetaHardwareFeatures", metaDiv), "hardwareFeatureTagsFilter", tag);
        });
        if (item.isOpenSource === true)       attachClickFilter( appendSpan("Open Source", "itemMetaOpenSource",   metaDiv), "openSourceFilter",  item.isOpenSource);
        if (item.supportsLinkPlay === true)   attachClickFilter( appendSpan("Link Play",   "itemMetaSupportsLink", metaDiv), "linkPlayFilter",    item.supportsLinkPlay);
        if (item.hasPhysicalRelease === true) attachClickFilter( appendSpan("Cart Release","itemMetaCartRelease",  metaDiv), "cartReleaseFilter", item.hasPhysicalRelease);
        if (item.usesEngine !== FILTER_ENGINE_NONE) attachClickFilter( appendSpan(item.usesEngine,"itemMetaEngine",metaDiv), "usesEngineFilter",  item.usesEngine);
        // if (item.isMultiPlatform === true) appendSpan("MultiPlatform","itemMetaMultiPlatform",  metaDiv);
        itemContainer.appendChild(metaDiv);


        // Attach metadata to entries
        const tags = ['categoryTags', 'gameTypeTags', 'platformTags', 'hardwareFeatureTags'];
        tags.forEach(tag => {
            const tagValue = item[tag];
            //if (tagValue) {
                itemDiv.dataset[tag] = tagValue;
            //}
        });
        if (item.isOpenSource === true)       itemDiv.dataset["isOpenSource"] = "";
        if (item.supportsLinkPlay === true)   itemDiv.dataset["supportsLinkPlay"] = "";
        if (item.hasPhysicalRelease === true) itemDiv.dataset["hasPhysicalRelease"] = "";
        if (item.isMultiPlatform === true)    itemDiv.dataset["isMultiPlatform"] = "";

        itemDiv.dataset["yearFirstReleased"] = item.yearFirstReleased;
        itemDiv.dataset["authorName"]        = item.authorName;
        itemDiv.dataset["itemTitle"]         = item.itemTitle;
        itemDiv.dataset["shortDescription"]  = item.shortDescription;
        itemDiv.dataset["usesEngine"]        = item.usesEngine;

        // Append everything inside the main div
        itemDiv.appendChild(itemContainer);
        container.appendChild(itemDiv);
    });
}

