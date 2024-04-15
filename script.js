document.addEventListener('DOMContentLoaded', function () {
    fetch('projets.json') // Assure-toi d'avoir un fichier JSON avec tes données
        .then(response => response.json())
        .then(data => {
            const projetsContainer = document.getElementById('projets-container');
            const projetTemplate = document.getElementById('projet-template');

            data.forEach(projetData => {
                const projetClone = document.importNode(projetTemplate.content, true);

                projetClone.querySelector('.titre').textContent = projetData.titre;
                projetClone.querySelector('.image').src = projetData.image;
                projetClone.querySelector('.description').textContent = projetData.description;
                projetClone.querySelector('.en-savoir-plus').addEventListener('click', () => {
                    // Action lorsque le bouton est cliqué
                    alert(`En savoir plus sur ${projetData.titre}`);
                });

                projetsContainer.appendChild(projetClone);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des données :', error));
});



