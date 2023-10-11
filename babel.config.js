module.exports = function(api) {
    const isProduction = api.env('production');
  
    // Configuración para producción y desarrollo
    const presets = [
      [
        '@babel/preset-react',
        {
          development: !isProduction, // Trata las advertencias como advertencias solo en desarrollo
        },
      ],
    ];
  
    return {
      presets,
    };
  };
  