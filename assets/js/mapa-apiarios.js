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
    // Coordenadas do Obeservatório 
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
        { nome: 'Observatório Apícola', lat: -10.5077, lng: -39.0159, descricao:'Observatório Apícola' },
        { nome: 'Apiário de Tucano', lat: -10.9648, lng: -38.7929, descricao:'Apiário de Tucano' },
        { nome: 'Apiário de Monte Santo', lat: -10.4377, lng: -39.3315, descricao:'Apiário de Monte Santo' }
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

        function createInfoWindow(descricao) {
            return new google.maps.InfoWindow({
                content: descricao
            });
        }

        // Crie uma instância de InfoWindow para o marcador atual
        var infoWindow = createInfoWindow(apiario.descricao);

        // Adicione um evento de clique para mostrar a janela de informações
        //função imediatamente invocada (IIFE)
        marker.addListener('click', (function (infoWindow) {
            return function () {
                infoWindow.open(map, this);
            };
        })(infoWindow));
    }
}