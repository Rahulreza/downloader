document.getElementById('viewButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    const mediaContainer = document.getElementById('mediaContainer');
    const downloadButton = document.getElementById('downloadButton');

    // Clear previous content
    mediaContainer.innerHTML = '';
    downloadButton.style.display = 'none';

    if (url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)) {
        // Extract video ID and embed it
        const videoId = url.split('v=')[1] || url.split('youtu.be/')[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.width = '100%';
        iframe.height = '500px';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
    } else if (url.match(/\.(jpeg|jpg|gif|png)$/)) {
        // Image
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Image';
        mediaContainer.appendChild(img);
        downloadButton.style.display = 'inline-block';
    } else if (url.match(/\.(mp4|webm|ogg)$/)) {
        // Video
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        mediaContainer.appendChild(video);
        downloadButton.style.display = 'inline-block';
    } else if (url.match(/\.(mp3|wav)$/)) {
        // Audio
        const audio = document.createElement('audio');
        audio.src = url;
        audio.controls = true;
        mediaContainer.appendChild(audio);
        downloadButton.style.display = 'inline-block';
    } else if (url.match(/\.(pdf)$/)) {
        // PDF
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        mediaContainer.appendChild(iframe);
        downloadButton.style.display = 'inline-block';
    } else {
        mediaContainer.innerHTML = 'Unsupported file type or invalid URL.';
    }

    // Set download link if applicable
    if (downloadButton.style.display === 'inline-block') {
        downloadButton.href = url;
    }
});
