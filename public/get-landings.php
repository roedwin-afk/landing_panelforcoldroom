<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$landingsDir = __DIR__ . '/landings';
$landings = [];

if (is_dir($landingsDir)) {
    $folders = array_diff(scandir($landingsDir), ['.', '..']);
    
    foreach ($folders as $folder) {
        $folderPath = $landingsDir . '/' . $folder;
        
        // Solo carpetas que tengan un index.html
        if (is_dir($folderPath) && file_exists($folderPath . '/index.html')) {
            
            // Diccionario de nombres personalizados (ES/EN)
            $nombres = [
                'paneldetecho' => [
                    'es' => 'Panel de Techo',
                    'en' => 'Roof Panel'
                ],
                'panelparacuartofrio' => [
                    'es' => 'Panel para Cuarto Frío',
                    'en' => 'Cold Room Panel'
                ]
            ];
            
            // Si no está en el diccionario, auto-generar nombre
            $nombreEs = $nombres[$folder]['es'] ?? ucwords(str_replace(['-', '_'], ' ', $folder));
            $nombreEn = $nombres[$folder]['en'] ?? ucwords(str_replace(['-', '_'], ' ', $folder));
            
            $landings[] = [
                'slug' => $folder,
                'url' => '/landings/' . $folder,
                'nombre' => [
                    'es' => $nombreEs,
                    'en' => $nombreEn
                ],
                'fecha' => filemtime($folderPath)
            ];
        }
    }
    
    // Ordenar alfabéticamente por nombre en español
    usort($landings, function($a, $b) {
        return strcmp($a['nombre']['es'], $b['nombre']['es']);
    });
}

echo json_encode([
    'success' => true,
    'landings' => $landings,
    'timestamp' => time()
]);
?>