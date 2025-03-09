# Biome: Formateador y Analizador de Código

## ¿Qué es Biome?
Biome es una herramienta moderna para formatear, analizar y optimizar código en proyectos JavaScript y TypeScript. Ofrece funcionalidades como:

- **Formateo de código** rápido y eficiente.
- **Linting** para detectar errores y mejorar la calidad del código.
- **Soporte para TypeScript y JSX/TSX**.
- **Corrección automática de errores comunes**.

## Instalación
Puedes instalar Biome de manera global o en tu proyecto:

### Instalación Global
```sh
npm install -g @biomejs/biome
```
Verifica la instalación con:
```sh
biome --version
```

### Instalación en un Proyecto
```sh
npm install --save-dev @biomejs/biome
```

## Uso Básico
Una vez instalado, puedes usar Biome desde la línea de comandos:

### Formatear un Archivo
```sh
biome format archivo.ts
```
Para formatear todo el proyecto:
```sh
biome format .
```

### Analizar Código (Linting)
```sh
biome lint archivo.ts
```
Para analizar todo el proyecto:
```sh
biome lint .
```

### Corrección Automática
Biome puede intentar corregir errores automáticamente con:
```sh
biome check --apply
```

## Configuración en VS Code
Para usar Biome como formateador en VS Code, agrega esto en `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome"
}
```

Si trabajas con Prisma, puedes agregar:
```json
{
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  }
}
```

## Configuración en el Proyecto
Puedes personalizar la configuración de Biome creando un archivo `biome.json` en la raíz del proyecto:
```json
{
  "formatter": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  }
}
```

## Integración con Pre-Commits (Husky)
Para asegurarte de que el código esté limpio antes de hacer un commit, puedes usar `husky` y `lint-staged`:

1. Instala las dependencias:
```sh
npm install --save-dev husky lint-staged
```

2. Configura un pre-commit en `package.json`:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": "biome format --write"
  }
}
```

3. Activa Husky:
```sh
npx husky install
```

## Conclusión
Biome es una excelente alternativa a herramientas como Prettier y ESLint, ofreciendo una solución rápida y eficiente para mejorar la calidad del código en proyectos modernos de JavaScript y TypeScript.

