// function initMap() {
    
//     var center = { lat: -14.235004, lng: -51.92528 };

    
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 6,
//         center: center
//     });

//     // Exemplo de marcador para um apiário
//     var apiario1 = new google.maps.Marker({
//         position: { lat: -12.971599, lng: -38.501206 },
//         map: map,
//         title: 'Apiário 1'
//     });

//     // Adicione mais marcadores para outros apiários

//     // Personalize os marcadores e informações adicionais conforme necessário
// }
function initMap() {
    // Coordenadas do centro do país
    var center = { lat: -10.5077, lng: -39.0159 };
    // Opções do mapa
    var mapOptions = {
        zoom: 8,
        center: center,
    };
    // Crie um mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Array de objetos com informações sobre os pontos
    var apiarios = [
        { nome: 'Observatório Apícola', lat: -10.5077, lng: -39.0159 },
        { nome: 'Apiário de Tucano', lat: -10.9648, lng: -38.7929 },
        { nome: 'Apiário de Monte Santo', lat: -10.4377, lng: -39.3315 },
        // Adicione mais apiários conforme necessário
    ];

    // Loop para criar marcadores para cada apiário
    for (var i = 0; i < apiarios.length; i++) {
        var apiario = apiarios[i];
        var marker = new google.maps.Marker({
            position: { lat: apiario.lat, lng: apiario.lng },
            map: map,
            title: apiario.nome
        });
    }
}
