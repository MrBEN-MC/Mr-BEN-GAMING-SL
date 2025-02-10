// script.js

// Helper function to create elements
function createElement(tag, attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    element.textContent = textContent;
    return element;
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Populate Past Live Streams Section
    const pastLiveStreamsContainer = document.querySelector('#past-live-streams .grid-container');
    if (pastLiveStreamsContainer && MRBEN.PAST_LIVESTREAMS) {
        MRBEN.PAST_LIVESTREAMS.forEach(stream => {
            const gridItem = createElement('div', { class: 'grid-item' });
            const link = createElement('a', { href: `player.html?videoId=${stream.id}` }); // Link to the Player page
            const img = createElement('img', { src: stream.thumbnail, alt: stream.title });
            const title = createElement('h3', {}, stream.title);

            link.appendChild(img);
            link.appendChild(title);
            gridItem.appendChild(link);
            pastLiveStreamsContainer.appendChild(gridItem);
        });
    }

    // 2. Populate Latest Videos Section
    const latestVideosContainer = document.querySelector('#latest-videos .grid-container');
    if (latestVideosContainer && MRBEN.VIDEOS) {
        MRBEN.VIDEOS.slice(0, 3).forEach(video => { // Display only the first 3
            const gridItem = createElement('div', { class: 'grid-item' });
            const link = createElement('a', { href: `player.html?videoId=${video.id}` }); // Link to the Player page
            const img = createElement('img', { src: video.thumbnail, alt: video.title });
            const title = createElement('h3', {}, video.title);

            link.appendChild(img);
            link.appendChild(title);
            gridItem.appendChild(link);
            latestVideosContainer.appendChild(gridItem);
        });
    }

    // 3. Populate Shorts Section
    const shortsContainer = document.querySelector('#shorts .grid-container');
    if (shortsContainer && MRBEN.SHORTS) {
        MRBEN.SHORTS.slice(0, 3).forEach(short => { // Display only the first 3
            const gridItem = createElement('div', { class: 'grid-item' });
            // Assuming shorts will be opened in a new tab on YouTube:
            const link = createElement('a', { href: MRBEN.getYoutubeEmbedUrl(short.id), target:"_blank" });
            const img = createElement('img', { src: short.thumbnail, alt: short.title });
            const title = createElement('h3', {}, short.title);

            link.appendChild(img);
            link.appendChild(title);
            gridItem.appendChild(link);
            shortsContainer.appendChild(gridItem);
        });
    }

    // 4. Populate News Updates Section
    const newsContainer = document.querySelector('#news-updates .grid-container');
    if (newsContainer && MRBEN.NEWS) {
        MRBEN.NEWS.slice(0, 2).forEach(news => { // Display only the first 2
            const gridItem = createElement('div', { class: 'grid-item' });
            const link = createElement('a', { href: news.link }); // Link to the News page
            const img = createElement('img', { src: news.image, alt: news.title });
            const title = createElement('h3', {}, news.title);
            const description = createElement('p', {}, news.description);

            link.appendChild(img);
            link.appendChild(title);
            link.appendChild(description);
            gridItem.appendChild(link);
            newsContainer.appendChild(gridItem);
        });
    }

    // 5. Populate Game Updates Section
    const updatesContainer = document.querySelector('#game-updates .grid-container');
    if (updatesContainer && MRBEN.UPDATES) {
        MRBEN.UPDATES.slice(0, 2).forEach(update => { // Display only the first 2
             const gridItem = createElement('div', { class: 'grid-item' });
            const link = createElement('a', { href: update.link }); // Link to the News page
            const img = createElement('img', { src: update.image, alt: update.title });
            const title = createElement('h3', {}, update.title);
            const description = createElement('p', {}, update.description);

            link.appendChild(img);
            link.appendChild(title);
            link.appendChild(description);
            gridItem.appendChild(link);
            updatesContainer.appendChild(gridItem);
        });
    }

    // 6. Player Page: Load Video Based on URL Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('videoId');
    const videoPlayer = document.getElementById('video-player');

    if (videoPlayer && videoId) {
        videoPlayer.src = MRBEN.getYoutubeEmbedUrl(videoId);
    }

    // 7. Populate Related Videos on Player Page
    const relatedVideosContainer = document.querySelector('#related-videos .grid-container');
    if (relatedVideosContainer && MRBEN.VIDEOS) {
        MRBEN.VIDEOS.slice(0, 3).forEach(video => { // Display only the first 3
            const gridItem = createElement('div', { class: 'grid-item' });
            const link = createElement('a', { href: `player.html?videoId=${video.id}` });
            const img = createElement('img', { src: video.thumbnail, alt: video.title });
            const title = createElement('h3', {}, video.title);

            link.appendChild(img);
            link.appendChild(title);
            gridItem.appendChild(link);
            relatedVideosContainer.appendChild(gridItem);
        });
    }

      // 8. Videos page : Populate Videos section
    const videoPlaylistsContainer = document.getElementById('video-playlists');
    const showMoreVideosButton = document.getElementById('show-more-videos');
    let videosDisplayed = 6; // Initial number of videos to display
    const videosPerPage = 6;   // Number of videos to load per "Show More" click
    let currentPlaylist = null;   // Keep track of the currently displayed playlist

    if (videoPlaylistsContainer && MRBEN.VIDEOS) {
        // Organize videos by playlist
        const playlists = {};
        MRBEN.VIDEOS.forEach(video => {
            if (!playlists[video.playlist]) {
                playlists[video.playlist] = [];
            }
            playlists[video.playlist].push(video);
        });

        // Function to display videos from a playlist
        const displayPlaylistVideos = (playlistName, videosToDisplay) => {
            const playlistVideos = playlists[playlistName];
            const videosToShow = playlistVideos.slice(0, videosToDisplay);

            videosToShow.forEach(video => {
                const gridItem = createElement('div', { class: 'grid-item' });
                const link = createElement('a', { href: `player.html?videoId=${video.id}` });
                const img = createElement('img', { src: video.thumbnail, alt: video.title });
                const title = createElement('h3', {}, video.title);

                link.appendChild(img);
                link.appendChild(title);
                gridItem.appendChild(link);
                playlistContainer.appendChild(gridItem); // Append to the playlist container
            });
        };

        // Create playlist containers and headings
        for (const playlistName in playlists) {
            const playlistContainer = createElement('div', { class: 'playlist-container' });
            const playlistHeading = createElement('h3', { class: 'playlist-heading' }, playlistName);

            playlistContainer.appendChild(playlistHeading);
            videoPlaylistsContainer.appendChild(playlistContainer);

            displayPlaylistVideos(playlistName, videosDisplayed);   // Initial videos to display
        }


        // Show More functionality
        showMoreVideosButton.addEventListener('click', () => {
            for (const playlistName in playlists) {
                const playlistVideos = playlists[playlistName];
                 videosDisplayed += videosPerPage;   // Increment the videos count

                // Get all elements with class 'playlist-container'
                const playlistContainers = document.querySelectorAll('.playlist-container');

                // Loop through the playlistContainers and delete the old grid-items
                for (let container of playlistContainers) {
                    while (container.firstChild) {
                        container.removeChild(container.firstChild);
                    }
                    container.appendChild(createElement('h3', { class: 'playlist-heading' }, playlistName));
                    displayPlaylistVideos(playlistName, videosDisplayed);   // Re-display videos with new count
                }
            }
        });
    }

});