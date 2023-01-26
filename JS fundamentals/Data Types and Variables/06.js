function songRotation(band, album, song) {
    let songDuration = (album.length * band.length * song.length) / 2;

    let rotated = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotated} times.`);
}

songRotation('Black Sabbath', 'Paranoid', 'War Pigs');
