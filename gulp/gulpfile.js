import gulp from "gulp";

import { path } from "./config/path.js";
import { plugins } from "./config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./tasks/reset.js";
import { html } from "./tasks/html.js";
import { server } from "./tasks/server.js";
import { scss } from "./tasks/scss.js";
import { js } from "./tasks/js.js";
import { images } from "./tasks/images.js";
import { svgSprive } from "./tasks/svgSprive.js";
import { zip } from "./tasks/zip.js";
// import { ftp } from "./gulp/tasks/ftp.js"


function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive }

const mainTasks = gulp.parallel(copy, html, scss, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); 
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
// const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev }
export { build }
export { deployZIP }

gulp.task('default', dev);