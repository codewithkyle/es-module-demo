const browserSync = require('browser-sync');

browserSync.create('sandbox');

browserSync.init({
    server: "./docs"
});

browserSync.watch("./docs").on("change", browserSync.reload);

browserSync.watch("./app/typescript").on("change", ()=>{
    const message = 'Compiling TypeScript';
    browserSync.notify(`<div style="position:fixed;top:0;left:0;display:inline-flex;width:100vw;height:100vh;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.6);"><span style="display:inline-block;padding:16px 32px;border-radius:4px;background-color:#ffffff;box-shadow: 0 2px 8px rgba(75,78,109,0.87);font-size:22px;color:#3b83f9;">${message}</span></div>`, 3000);
});

browserSync.watch("./_compiled").on("change", ()=>{
    const message = 'Bundling Modules';
    browserSync.notify(`<div style="position:fixed;top:0;left:0;display:inline-flex;width:100vw;height:100vh;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.6);"><span style="display:inline-block;padding:16px 32px;border-radius:4px;background-color:#ffffff;box-shadow: 0 2px 8px rgba(75,78,109,0.87);font-size:22px;color:#3b83f9;">${message}</span></div>`, 3000);
});

browserSync.watch("./app/sass").on("change", ()=>{
    const message = 'Compiling SCSS';
    browserSync.notify(`<div style="position:fixed;top:0;left:0;display:inline-flex;width:100vw;height:100vh;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.6);"><span style="display:inline-block;padding:16px 32px;border-radius:4px;background-color:#ffffff;box-shadow: 0 2px 8px rgba(75,78,109,0.87);font-size:22px;color:#3b83f9;">${message}</span></div>`, 3000);
});