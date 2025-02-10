

    // Array of past livestream video IDs, Titles and thumbnail images (manually updated)
    PAST_LIVESTREAMS: [
        { id: "VIDEO_ID_1", title: "Awesome Livestream #1", thumbnail: "img/livestream_1_thumb.jpg" },
        { id: "VIDEO_ID_2", title: "Epic Livestream #2", thumbnail: "img/livestream_2_thumb.jpg" },
        { id: "VIDEO_ID_3", title: "Gaming Livestream #3", thumbnail: "img/livestream_3_thumb.jpg" }
    ],

    // Array of videos (manually updated)
    VIDEOS: [
        { id: "VIDEO_ID_4", title: "Best Video #1", playlist: "COD Mobile", thumbnail: "img/video_4_thumb.jpg" },
        { id: "VIDEO_ID_5", title: "Amazing Video #2", playlist: "Genshin Impact", thumbnail: "img/video_5_thumb.jpg" },
        { id: "VIDEO_ID_6", title: "Pro Video #3", playlist: "COD Mobile", thumbnail: "img/video_6_thumb.jpg" },
        { id: "VIDEO_ID_7", title: "Let's play Video #4", playlist: "PUBG Mobile", thumbnail: "img/video_7_thumb.jpg" },
        { id: "VIDEO_ID_8", title: "Ultimate Video #5", playlist: "COD Mobile", thumbnail: "img/video_8_thumb.jpg" },
        { id: "VIDEO_ID_9", title: "Unstoppable Video #6", playlist: "Genshin Impact", thumbnail: "img/video_9_thumb.jpg" },
    ],

    // Array of shorts (manually updated)
    SHORTS: [
        { id: "SHORT_ID_1", title: "Funny Short #1", thumbnail: "img/short_1_thumb.jpg" },
        { id: "SHORT_ID_2", title: "Epic Short #2", thumbnail: "img/short_2_thumb.jpg" },
        { id: "SHORT_ID_3", title: "Awesome Short #3", thumbnail: "img/short_3_thumb.jpg" }
    ],

    // Array of News Updates (manually updated)
    NEWS: [
        { title: "New COD Mobile Season!", link: "#", description: "Exciting new season is here." ,image:"img/codm_news_1.jpg"},
        { title: "Tournament Announced", link: "#", description: "Participate and win big!",image:"img/codm_news_2.jpg" }
    ],

    // Array of Game Updates (manually updated)
    UPDATES: [
        { title: "Weapon Balancing Changes", link: "#", description: "Important changes to weapon stats.", image:"img/game_update_1.jpg" },
        { title: "New Map Released", link: "#", description: "Explore the new battleground!",image:"img/game_update_2.jpg" }
    ],
    // Function to generate YouTube embed URL
    getYoutubeEmbedUrl: function (videoId) {
        return this.YOUTUBE_EMBED_BASE_URL + videoId;
    }


};

// Export the MRBEN configuration (if using modules)
//  For this example, we'll just load it as a regular script.
// export default MRBEN;
