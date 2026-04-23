# Camera App

Aplicacion desarrollada con Ionic + Angular + Capacitor. El proyecto incluye tres pestañas principales:

- `Alertas`: muestra una alerta simple desde la interfaz.
- `Camara`: permite tomar una foto usando el plugin de Capacitor.
- `Galeria`: carga y muestra las fotos guardadas localmente.

## Icono de la aplicacion

Se actualizo el icono principal de la app usando la imagen fuente ubicada en `src/resources/Camera icon.png`. A partir de esa imagen se genero el asset final que usa el proyecto:

![Icono de Camera App](resources/icon.png)

Ese icono luego se transforma en los recursos nativos de Android dentro de `android/app/src/main/res/mipmap-*` mediante Capacitor Assets.

## Splash Screen

Tambien se personalizo el splash screen para que muestre:

- el icono de la aplicacion
- el texto `camera app`
- un fondo con degradado vertical desde `#01c0fa` hasta `#017297`

El asset base generado para el splash es:

![Splash Screen de Camera App](resources/splash.png)

Luego ese archivo se replica a los recursos nativos de Android, por ejemplo en:

- `android/app/src/main/res/drawable/splash.png`
- `android/app/src/main/res/drawable-port-*/splash.png`
- `android/app/src/main/res/drawable-land-*/splash.png`

## Configuracion del plugin SplashScreen

La configuracion del splash se definio en `capacitor.config.ts` usando `@capacitor/splash-screen`. Entre los parametros principales se configuraron:

- `launchShowDuration: 3000`
- `launchAutoHide: true`
- `launchFadeOutDuration: 3000`
- `androidSplashResourceName: "splash"`
- `androidScaleType: "CENTER_CROP"`
- `splashFullScreen: true`
- `splashImmersive: true`

Nota: el degradado no se aplica desde `backgroundColor`, porque esa opcion solo acepta un color plano. Por eso el degradado se construyo directamente dentro de la imagen `resources/splash.png`.

## Flujo usado para aplicar icono y splash

1. Se toma la imagen base desde `src/resources/Camera icon.png`.
2. Se generan `resources/icon.png` y `resources/splash.png`.
3. Se configura el plugin `SplashScreen` en `capacitor.config.ts`.
4. Se regeneran los recursos nativos con Capacitor.
5. Se sincroniza Android con `npx cap sync android`.
