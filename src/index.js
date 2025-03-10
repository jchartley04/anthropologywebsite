function showInfo(title, text, links = []) {
    const infoBox = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoText = document.getElementById('info-text');

    infoTitle.textContent = title;
    infoText.innerHTML = text.replace(/\n/g, '<br>'); // Keeps line breaks

    // Create a links section
    let linksHtml = "";
    if (links.length > 0) {
        linksHtml += "<div class='info-links'><strong>Learn More:</strong><br>";
        links.forEach(link => {
            linksHtml += `<a href="${link.url}" target="_blank">${link.text}</a><br>`;
        });
        linksHtml += "</div>";
    }

    // Add links to the info box
    infoText.innerHTML += linksHtml;

    infoBox.style.display = 'block';
}

function closeInfo() {
    document.getElementById('info-box').style.display = 'none';
}
