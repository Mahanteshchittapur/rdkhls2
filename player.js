
// // // Get references to the video element and the play button
// // const videoPlayer = document.getElementById("videoPlayer");
// // const playButton = document.getElementById("playButton");

// // // Initialize the Dash player
// // const dashPlayer = dashjs.MediaPlayer().create();
// // dashPlayer.initialize(videoPlayer, "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd", true);

// // // Add event listener to the play button
// // playButton.addEventListener("click", () => {
// //     // Check if video is currently paused
// //     if (videoPlayer.paused) {
// //         // Play the video
// //         videoPlayer.play();
// //         playButton.textContent = "Pause";
// //     } else {
// //         // Pause the video
// //         videoPlayer.pause();
// //         playButton.textContent = "Play";
// //     }
// // });

// // // Add event listener to enter full-screen mode
// // videoPlayer.addEventListener("click", () => {
// //     if (videoPlayer.requestFullscreen) {
// //         videoPlayer.requestFullscreen();
// //     } else if (videoPlayer.mozRequestFullScreen) {
// //         videoPlayer.mozRequestFullScreen();
// //     } else if (videoPlayer.webkitRequestFullscreen) {
// //         videoPlayer.webkitRequestFullscreen();
// //     } else if (videoPlayer.msRequestFullscreen) {
// //         videoPlayer.msRequestFullscreen();
// //     }
// // });






// // new code 


//  // Get references to the video element and the play button
//  const videoPlayer = document.getElementById("videoPlayer");
//  const playButton = document.getElementById("playButton");

//  // Initialize the Dash player
//  const dashPlayer = dashjs.MediaPlayer().create();
//  dashPlayer.initialize(videoPlayer, "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd", true);

//  // Add event listener to the play button
//  playButton.addEventListener("click", () => {
//      // Request full-screen mode for the video element
//      if (videoPlayer.requestFullscreen) {
//          videoPlayer.requestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer.mozRequestFullScreen) {
//          videoPlayer.mozRequestFullScreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer.webkitRequestFullscreen) {
//          videoPlayer.webkitRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer.msRequestFullscreen) {
//          videoPlayer.msRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      }
//  });

//  const videoPlayer1 = document.getElementById("videoPlayer1");
//  const playButton1= document.getElementById("playButton1");

//  // Initialize the Dash player
//  const dashPlayer1 = dashjs.MediaPlayer().create();
//  dashPlayer1.initialize(videoPlayer1, "https://dash.akamaized.net/dash264/CTA/imsc1/IT1-20171027_dash.mpd", true);

//  // Add event listener to the play button
//  playButton1.addEventListener("click", () => {
//      // Request full-screen mode for the video element
//      if (videoPlayer1.requestFullscreen) {
//          videoPlayer1.requestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer1.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer1.mozRequestFullScreen) {
//          videoPlayer1.mozRequestFullScreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer1.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer1.webkitRequestFullscreen) {
//          videoPlayer1.webkitRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer1.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer1.msRequestFullscreen) {
//          videoPlayer1.msRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer1.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      }
//  });


//  const videoPlayer2 = document.getElementById("videoPlayer2");
//  const playButton2= document.getElementById("playButton2");

//  // Initialize the Dash player
//  const dashPlayer2 = dashjs.MediaPlayer().create();
//  dashPlayer2.initialize(videoPlayer2, "https://raw.githubusercontent.com/Dash-Industry-Forum/SAND-Test-Vectors/master/mpd/dash-if/HTTPSReporting-Conf-OK-MultiRes.mpd", true);

//  // Add event listener to the play button
//  playButton2.addEventListener("click", () => {
//      // Request full-screen mode for the video element
//      if (videoPlayer2.requestFullscreen) {
//          videoPlayer2.requestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer2.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer2.mozRequestFullScreen) {
//          videoPlayer2.mozRequestFullScreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer2.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer2.webkitRequestFullscreen) {
//          videoPlayer2.webkitRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer2.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer2.msRequestFullscreen) {
//          videoPlayer2.msRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer2.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      }
//  });
//  const videoPlayer3 = document.getElementById("videoPlayer3");
//  const playButton3= document.getElementById("playButton3");

//  // Initialize the Dash player
//  const dashPlayer3 = dashjs.MediaPlayer().create();
//  dashPlayer3.initialize(videoPlayer3, "https://raw.githubusercontent.com/Dash-Industry-Forum/SAND-Test-Vectors/master/mpd/dash-if/HTTPSQuery-OK-MultiRes.mpd", true);

//  // Add event listener to the play button
//  playButton1.addEventListener("click", () => {
//      // Request full-screen mode for the video element
//      if (videoPlayer3.requestFullscreen) {
//          videoPlayer3.requestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer3.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer3.mozRequestFullScreen) {
//          videoPlayer3.mozRequestFullScreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer3.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer3.webkitRequestFullscreen) {
//          videoPlayer3.webkitRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer3.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer3.msRequestFullscreen) {
//          videoPlayer3.msRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer3.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      }
//  });

//  const videoPlayer4 = document.getElementById("videoPlayer4");
//  const playButton4= document.getElementById("playButton4");

//  // Initialize the Dash player
//  const dashPlayer4 = dashjs.MediaPlayer().create();
//  dashPlayer4.initialize(videoPlayer4, "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd", true);

//  // Add event listener to the play button
//  playButton4.addEventListener("click", () => {
//      // Request full-screen mode for the video element
//      if (videoPlayer4.requestFullscreen) {
//          videoPlayer4.requestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer4.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer4.mozRequestFullScreen) {
//          videoPlayer4.mozRequestFullScreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer4.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer4.webkitRequestFullscreen) {
//          videoPlayer4.webkitRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer4.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer4.msRequestFullscreen) {
//          videoPlayer4.msRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer4.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      }
//  });







// // kjsdkljfhasdkk sadfkas


// // <!DOCTYPE html>
// // <html>
// // <head>
// //     <title>Video Player</title>
// // </head>
// // <body>
// //     <!-- Video Element -->
// //     <video id="videoPlayer" controls width="640" height="360">
// //         <!-- Add video sources here -->
// //     </video>

// //     <!-- Play Button -->
// //     <button id="playButton">Play</button>

// //     <script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>
// //     <script>
// //            </script>
// // </body>
// // </html>
// Get references to the video element and the play button
// Get references to the video element and the play button
const videoPlayer = document.getElementById("videoPlayer");
const playButton = document.getElementById("playButton");

let hlsPlayer;

function initializeHlsPlayer(url) {
    if (Hls.isSupported()) {
        hlsPlayer = new Hls();
        hlsPlayer.loadSource(url);
        hlsPlayer.attachMedia(videoPlayer);
        hlsPlayer.on(Hls.Events.MANIFEST_PARSED, () => {
            videoPlayer.play();
        });
    } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
        videoPlayer.src = url;
        videoPlayer.addEventListener("loadedmetadata", () => {
            videoPlayer.play();
        });
    }
}

// Add event listener to the play button
playButton.addEventListener("click", () => {
    const videoUrl = "https://assets.afcdn.com/video49/20210722/v_645516.m3u8"; // Replace with your .m3u8 URL
    initializeHlsPlayer(videoUrl);

    // Request full-screen mode for the video element
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen().then(() => {
            videoPlayer.play();
        }).catch((error) => {
            console.log('Error attempting to enable full-screen mode:', error.message);
        });
    } else if (videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen().then(() => {
            videoPlayer.play();
        }).catch((error) => {
            console.log('Error attempting to enable full-screen mode:', error.message);
        });
    } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen().then(() => {
            videoPlayer.play();
        }).catch((error) => {
            console.log('Error attempting to enable full-screen mode:', error.message);
        });
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen().then(() => {
            videoPlayer.play();
        }).catch((error) => {
            console.log('Error attempting to enable full-screen mode:', error.message);
        });
    }
});
