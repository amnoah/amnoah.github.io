/*
 * Parse the CSV data file using Papa Parse library.
 * It won't be immediately loaded, so use a promise to execute code once loaded.
 */

let data = null;

fetch('../assets/data.csv')
   .then(res => res.text())
   .then(csv => {
       data = Papa.parse(csv, {
           header: true,
           comments: true,
           skipEmptyLines: true
           }).data;

       buildFacilities();
       updateChart();
   }
);

/*
 * Find each HTML element we want to control.
 */

const dropdownMenu = document.querySelector('.dropdown-menu');
const toggleButton = document.querySelector('.dropdown-toggle');
const minYearSlider = document.getElementById("minYear");
const maxYearSlider = document.getElementById("maxYear");
const minYearDisplay = document.getElementById("minYearDisplay");
const maxYearDisplay = document.getElementById("maxYearDisplay");

const sideBar = document.getElementById("showSideBar");
const collapse = document.getElementById("collapseChart");

/*
 * Display the slider's initial year on the active year display.
 */

minYearDisplay.innerHTML = minYearSlider.value;
maxYearDisplay.innerHTML = maxYearSlider.value;

/*
 * Build a version of our facilities that is more chart-ready.
 * This separates the raw read data into something like the following structure:
 *
 * Facility 1 Overall Name
 * -> Name List
 * |-> Name 1
 *  |-> Name 1 Start
 *  |-> Name 1 End
 * |-> Name 2
 *  |-> Name 2 Start
 *  |-> Name 2 End
 * Facility 2 Overall Name
 * -> Name List
 * |-> Name 1
 *  |-> Name 1 Start
 *  |-> Name 1 End
 * |-> Name 2
 *  |-> Name 2 Start
 *  |-> Name 2 End
 *
 * A big complexity from this involves the fact that our raw csv data splits facilities up based on location. So,
 * St. Joseph Hospital, for example, operates in one location for ten years and then another for 60 - meaning it's two
 * data segments. This chart doesn't care about that since it operated under one name under all that time, so we must
 * merge those data points. We must be careful to merge data where applicable, but also not merge facilities with gaps
 * (like how Davison General Hospital shut down for a year).
 *
 * After we've done this processing, we then need to convert it into our timeline's native information!
 */

const facilitiesMap = {};

function buildFacilities() {
    // For each facility in our data:
    data.forEach(d => {
        // We only care about active facilities.
        if (d.Status != "active") return;

        // If this facility is not in the map at all yet, add it.
        if (!facilitiesMap[d.FinalName]) {
            facilitiesMap[d.FinalName] = {
                Children: []
            };
        }

        var targetedChild = null;

        // Find if there are already any children with the same name and overlapping dates.
        facilitiesMap[d.FinalName].Children.forEach(c => {
            if (c.Name != d.Name) return;
            if (c.YearStart > d.YearEnd) return;
            if (c.YearEnd < d.YearStart) return;
            targetedChild = c;
        });

        // If there's no overlapping children, create a new one.
        if (targetedChild == null) {
            facilitiesMap[d.FinalName].Children.push({
                Name: d.Name,
                YearStart: d.YearStart,
                YearEnd: d.YearEnd
            });
            return;
        }

        // If there are overlapping children, update the information.
        targetedChild.YearStart = Math.min(targetedChild.YearStart, d.YearStart);
        targetedChild.YearEnd = Math.max(targetedChild.YearEnd, d.YearEnd);
    });

    // This is potentially large, so let's clear it up for garbage collection.
    data = null;
}

/*
 * Misc helper function for making the final chart more vibrant.
 * Based on the "seed" (the group's index) to make colors flash less as items are updated.
 */

function getRandomColor(seed) {
    const hue = Math.floor(Math.min(360, seed * 4));
    return `hsl(${hue}, 70%, 85%)`; // 85% lightness for a pastel look
}

/*
 * Handle updating map on data changes.
 */

var sortMethod = "a";
var timeline = null;
var min, max;

function updateChart() {

    /*
     * In this block of code here, we determine what's actually the max year.
     * Our "min" and "max" sliders can be moved anywhere on the slider... meaning min may actually be set to the max
     * amount and vice versa. We should handle this by dynamically figuring out which one is higher and tracking by
     * that.
     */

    var minYear = Number(minYearSlider.value);
    var maxYear = Number(maxYearSlider.value);

    var showSideBar = sideBar.checked;
    var shouldCollapse = collapse.checked;

    if (minYear > maxYear) {
        var swap = maxYear;
        maxYear = minYear;
        minYear = swap;
    }

    min = minYear;
    max = maxYear;

    // Set the displayed years.

    minYearDisplay.innerHTML = minYear;
    maxYearDisplay.innerHTML = maxYear;

    /*
     * Sort our data appropriately.
     */

    const entries = Object.entries(facilitiesMap);

    // Sort the facilities on the chart A-Z.
    if (sortMethod == "Alphabetical (A-Z)") {
        entries.sort(([nameA], [nameB]) => {
            return nameA.localeCompare(nameB);
        });
    // Sort the facilities on the chart Z-A.
    } else if (sortMethod == "Alphabetical (Z-A)") {
        entries.sort(([nameB], [nameA]) => {
            return nameA.localeCompare(nameB);
        });
    // Sort the facilities on the chart first to last.
    } else if (sortMethod == "Chronological") {
        entries.sort(([, a], [, b]) => {
            const aMin = Math.min(...a.Children.map(c => Number(c.YearStart)));
            const bMin = Math.min(...b.Children.map(c => Number(c.YearStart)));
            return aMin - bMin;
        });
    // Sort the facilities on the chart last to first.
    } else if (sortMethod == "Inverse Chronological") {
        entries.sort(([, b], [, a]) => {
            const aMin = Math.min(...a.Children.map(c => Number(c.YearStart)));
            const bMin = Math.min(...b.Children.map(c => Number(c.YearStart)));
            return aMin - bMin;
        });
    // Sort the facilities on the chart by longest lifespan.
    } else if (sortMethod == "Longevity") {
        var currentYear = 2026;
        entries.sort(([, a], [, b]) => {
            // Helper function to find operational years
            const getLongevity = (facility) => {
                const starts = facility.Children.map(c => Number(c.YearStart));
                const ends = facility.Children.map(c => {
                    const end = Number(c.YearEnd);
                    return end === 9999 ? currentYear : end;
                });

                return Math.max(...ends) - Math.min(...starts);
            };

            const aLongevity = getLongevity(a);
            const bLongevity = getLongevity(b);

            // Sort descending (longest lifespan first)
            return bLongevity - aLongevity;
        });
    // Sort the facilities on the chart by shortest lifespan.
    } else if (sortMethod == "Inverse Longevity") {
        var currentYear = 2026;
        entries.sort(([, b], [, a]) => {
            // Helper function to find operational years
            const getLongevity = (facility) => {
                const starts = facility.Children.map(c => Number(c.YearStart));
                const ends = facility.Children.map(c => {
                    const end = Number(c.YearEnd);
                    return end === 9999 ? currentYear : end;
                });

                return Math.max(...ends) - Math.min(...starts);
            };

            const aLongevity = getLongevity(a);
            const bLongevity = getLongevity(b);

            // Sort descending (longest lifespan first)
            return bLongevity - aLongevity;
        });
    }

    var newMap = Object.fromEntries(entries);


    /*
     * Now it's time to work with vis to display this data!
     */

    // Build the different groups.

    var groupIDMap = [];
    var groupData = [];

    // For each entry in the original facilities map...
    Object.entries(newMap).forEach(([finalName, children]) => {
        var keep = false;

        // Verify some child of this facility is within our targeted time range.
        children.Children.forEach(c => {
            if (c.YearStart > maxYear) return;
            if (c.YearEnd < minYear) return;

            keep = true;
        });

        // If no children are in the time range, we skip.
        if (!keep) return;

        // If a child is, we will track this facility.
        const id = groupData.length + 1;
        groupIDMap[finalName] = id;
        groupData.push({
            id: id,
            content: showSideBar ? finalName : ""
        });
    });

    // Assign a random color to each group.
    groups = new vis.DataSet(groupData.map(group => {
        const color = getRandomColor(group.id);
        return {
            ...group,
            style: `background-color: ${color}`
        };
    }));

    // Next up, we're going to start adding the different items that will be displayed on the map.

    var rawItems = [];

    // For each entry in the original facilities map...
    Object.entries(newMap).forEach(([finalName, children]) => {
        // For every child of the entry...
        children.Children.forEach(c => {

            // Verify that this operation is in the correct time range.
            if (c.YearStart > maxYear) return;
            if (c.YearEnd < minYear) return;

            // Add the item if it meets our criteria. Limit it to the current displayed years.
            rawItems.push({
                id: rawItems.length + 1,
                group: groupIDMap[finalName],
                content: c.Name,
                start: Math.max(c.YearStart, minYear) + '-01-01',
                end: Math.min(c.YearEnd, maxYear) + '-01-01'
            });
        });
    });

    // Add the item's associated group's color to it.
    items = new vis.DataSet(rawItems.map(item => {
        const groupStyle = groups.get(item.group).style;
        return {
            ...item,
            style: groupStyle
        };
    }));

    // If the timeline doesn't yet exist, we have to create and configure it!
    if (timeline == null) {

        var options = {
            stack: false,           // We want each line to be distinct.
            start: '1830-01-01',    // Default window minimum. 10 under our min year.
            end: '2035-01-01',      // Default window maximum. 10 over our max year.
            orientation: 'bottom',  // Elements will align to the bottom first.
            showCurrentTime: false, // Don't show the current date on the chart!
            zoomKey: 'ctrlKey',     // Require ctrl to be held to zoom.
            height: '75vh',         // At maximum, take up 75% of the height of the screen.
            verticalScroll: true,   // If there's too many scroll elements, add a scroll bar.
        };

        // Find the html element we will attach to and create the timeline.
        var container = document.getElementById('chart');
        timeline = new vis.Timeline(container, items, groups, options);

        /*
         * A limitation of vis is that, from my understanding, certain additional elements (like custom time markers)
         * can be dragged and this cannot be easily disabled. We use custom time markers to easily display the min and
         * max year at all times on the chart, so this is quite annoying for us. However, I found a funny solution.
         *
         * One thing that vis does is send off events when things get dragged. So... what I'm doing here is fighting
         * the user. They try to move the min/max time marker? We move it back! On the user's end, it looks like it
         * never moves at all.
         */
        timeline.on('timechange', function (properties) {
            if (properties.id === 'minBar' || properties.id === 'maxBar') {
                const lockedTime = (properties.id === 'minBar' ? min : max) + '-01-01';
                timeline.setCustomTime(lockedTime, properties.id);
            }
        });
    /*
     * If the timeline already exists, we just update it.
     * At first I was creating a new timeline on each update before I found out these setters are exposed... ouch.
     */
    } else {
        // Update the data being displayed.
        timeline.setGroups(groups);
        timeline.setItems(items);
        // If we don't remove these before we set them to the new date, vis gets upset!
        timeline.removeCustomTime('minBar');
        timeline.removeCustomTime('maxBar');

        var options = {
            stack: false,                                    // We want each line to be distinct.
            start: '1830-01-01',                             // Default window minimum. 10 under our min year.
            end: '2035-01-01',                               // Default window maximum. 10 over our max year.
            orientation: 'bottom',                           // Elements will align to the bottom first.
            showCurrentTime: false,                          // Don't show the current date on the chart!
            zoomKey: 'ctrlKey',                              // Require ctrl to be held to zoom.
            height: shouldCollapse? '75vh' : null,           // At maximum, take up 75% of the height of the screen.
            verticalScroll: shouldCollapse ? true : false,   // If there's too many scroll elements, add a scroll bar.
        };

        timeline.setOptions(options);
        timeline.redraw();
    }

    // Update our min/max with the new dates.
    timeline.addCustomTime(minYear + '-01-01', 'minBar');
    timeline.addCustomTime(maxYear + '-01-01', 'maxBar');
}


/*
 * Trigger a map market update whenever a slider is updated.
 */

minYearSlider.addEventListener("input", () => {
  updateChart();
});
maxYearSlider.addEventListener("input", () => {
  updateChart();
});
sideBar.addEventListener("change", updateChart);
collapse.addEventListener("change", updateChart);
dropdownMenu.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('dropdown-item')) {
        sortMethod = event.target.innerText;
        updateChart();
    }
});