document.addEventListener('DOMContentLoaded', () => {
    fetch('team.json')
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.getElementById('team-container');
            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('team-member');
                
                const img = document.createElement('img');
                img.src = data.image;
                img.alt = `${data.name}'s photo`;
                
                const name = document.createElement('h2');
                name.textContent = data.name;
                
                const position = document.createElement('p');
                position.textContent = team.position;
                
                memberDiv.appendChild(img);
                memberDiv.appendChild(name);
                memberDiv.appendChild(position);
                
                teamContainer.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
